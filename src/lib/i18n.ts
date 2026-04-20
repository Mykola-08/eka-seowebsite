import { headers, cookies } from 'next/headers';

export const SUPPORTED_LOCALES = ['ca', 'en', 'es', 'ru'] as const;
export const DEFAULT_LOCALE: Locale = 'ca';
export const LOCALE_COOKIE = 'NEXT_LOCALE';

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

/**
 * Resolve the active locale on the server. Reads the `x-locale` header set by
 * `src/middleware.ts`, falling back to the cookie, then the default.
 */
export async function getServerLocale(): Promise<Locale> {
  const h = await headers();
  const fromHeader = h.get('x-locale');
  if (isLocale(fromHeader)) return fromHeader;

  const c = await cookies();
  const fromCookie = c.get(LOCALE_COOKIE)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  return DEFAULT_LOCALE;
}

/**
 * Map an internal locale to a BCP 47 / OpenGraph locale tag.
 */
export const OG_LOCALE: Record<Locale, string> = {
  ca: 'ca_ES',
  en: 'en_US',
  es: 'es_ES',
  ru: 'ru_RU',
};

export const HTML_LANG: Record<Locale, string> = {
  ca: 'ca',
  en: 'en',
  es: 'es',
  ru: 'ru',
};

export const NATIVE_NAMES: Record<Locale, string> = {
  ca: 'Català',
  en: 'English',
  es: 'Español',
  ru: 'Русский',
};
