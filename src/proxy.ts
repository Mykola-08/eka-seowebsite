import { NextResponse, type NextRequest } from 'next/server';

const SUPPORTED = ['ca', 'en', 'es', 'ru'] as const;
const DEFAULT_LOCALE = 'ca';
const COOKIE_NAME = 'NEXT_LOCALE';

type Locale = (typeof SUPPORTED)[number];

function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (SUPPORTED as readonly string[]).includes(value);
}

function negotiateFromAcceptLanguage(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;
  // Parse the Accept-Language header crudely but safely.
  const parts = header
    .split(',')
    .map((part) => {
      const [tag, ...rest] = part.trim().split(';');
      const qPart = rest.find((p) => p.trim().startsWith('q='));
      const q = qPart ? parseFloat(qPart.split('=')[1]) : 1;
      return { tag: tag.toLowerCase(), q: Number.isFinite(q) ? q : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of parts) {
    const primary = tag.split('-')[0];
    if (isLocale(primary)) return primary;
  }
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  const locale: Locale = isLocale(cookieLocale)
    ? cookieLocale
    : negotiateFromAcceptLanguage(request.headers.get('accept-language'));

  // Forward the resolved locale to RSC via a request header so that
  // server components can render with the correct language without a
  // round-trip through client state.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', locale);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  // Persist the negotiated locale so subsequent visits skip negotiation.
  if (!isLocale(cookieLocale)) {
    response.cookies.set(COOKIE_NAME, locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
  }
  // Expose for downstream caches.
  response.headers.set('x-locale', locale);
  return response;
}

export const config = {
  matcher: [
    // Skip Next internals, API routes, and static asset files.
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|icon|apple-icon|.*\\..*).*)',
  ],
};
