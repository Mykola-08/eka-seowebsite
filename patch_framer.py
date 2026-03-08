import re

with open('src/components/MainLayout.tsx', 'r') as f:
    content = f.read()

# Let's adjust the mobile navigation elements to look more Apple-like (rounded, white background, larger text).
old_nav_links = """                <div className="p-6 pb-24 space-y-6">
                  {/* Home */}
                  <div className="border-b border-gray-200/50 pb-4">
                    <Link
                      href="/"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 text-2xl font-semibold text-gray-900 tracking-tight"
                    >
                      {t('nav.home') || 'Home'}
                    </Link>
                  </div>

                  {/* Services */}
                  <div className="border-b border-gray-200/50 pb-4">
                    <Link
                      href="/services"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 text-2xl font-semibold text-gray-900 tracking-tight"
                    >
                      {t('nav.services')}
                    </Link>
                    <div className="ml-4 space-y-2 mt-2">
                      {navigation.find(n => n.name === t('nav.services'))?.dropdownItems?.map(dropdownItem => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2 text-lg text-gray-500 font-medium pl-4"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* For Business */}
                  <div className="border-b border-gray-200/50 pb-4">
                    <Link
                      href="/for-business"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 text-2xl font-semibold text-gray-900 tracking-tight"
                    >
                      {t('personalizedServices.business') || 'For Business'}
                    </Link>
                  </div>

                  {/* Mobile Reserva */}
                  <div className="pt-4">
                    <Button asChild variant="default" size="lg" className="w-full text-base font-semibold rounded-xl">
                      <Link
                        href="/booking"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t('nav.bookNow')}
                      </Link>
                    </Button>
                  </div>
                </div>"""

new_nav_links = """                <div className="p-6 pb-24 space-y-4">
                  <div className="flex flex-col space-y-2 bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-white/40 shadow-sm">
                    {/* Home */}
                    <div className="border-b border-gray-100 pb-2">
                      <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-2xl font-semibold text-gray-900 tracking-tight active:scale-[0.98] transition-transform"
                      >
                        {t('nav.home') || 'Home'}
                      </Link>
                    </div>

                    {/* Services */}
                    <div className="border-b border-gray-100 py-2">
                      <Link
                        href="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-2xl font-semibold text-gray-900 tracking-tight active:scale-[0.98] transition-transform"
                      >
                        {t('nav.services')}
                      </Link>
                      <div className="ml-2 space-y-1 mt-2 pl-4 border-l-2 border-gray-100">
                        {navigation.find(n => n.name === t('nav.services'))?.dropdownItems?.map(dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 py-2 text-lg text-gray-500 font-medium active:scale-[0.98] transition-transform"
                          >
                            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-gray-50 text-gray-400">
                              {serviceIcons[dropdownItem.href] || <Hand className="w-4 h-4" />}
                            </span>
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* For Business */}
                    <div className="pt-2">
                      <Link
                        href="/for-business"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-2xl font-semibold text-gray-900 tracking-tight active:scale-[0.98] transition-transform"
                      >
                        {t('personalizedServices.business') || 'For Business'}
                      </Link>
                    </div>
                  </div>

                  {/* Additional App Links */}
                  <div className="flex flex-col space-y-2 bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-white/40 shadow-sm">
                    <div className="border-b border-gray-100 pb-2">
                      <Link
                        href="/360-revision"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-xl font-medium text-gray-800 tracking-tight active:scale-[0.98] transition-transform"
                      >
                        {t('nav.revision360')}
                      </Link>
                    </div>
                    <div className="pt-2">
                      <Link
                        href="/agenyz"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-xl font-medium text-gray-800 tracking-tight active:scale-[0.98] transition-transform"
                      >
                        Agenyz
                      </Link>
                    </div>
                  </div>

                  {/* Mobile Reserva */}
                  <div className="pt-4 pb-12">
                    <Button asChild variant="default" size="lg" className="w-full text-lg font-semibold rounded-2xl h-14 active:scale-[0.97] transition-transform shadow-md">
                      <Link
                        href="/booking"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t('nav.bookNow')}
                      </Link>
                    </Button>
                  </div>
                </div>"""

if old_nav_links in content:
    content = content.replace(old_nav_links, new_nav_links)
    with open('src/components/MainLayout.tsx', 'w') as f:
        f.write(content)
    print("Patched nav links inside mobile menu successfully.")
else:
    print("Could not find mobile nav links block.")
