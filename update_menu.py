import re

with open('src/components/MainLayout.tsx', 'r') as f:
    content = f.read()

# Make the toggle icon in the header look more polished when opening/closing
# Check the mobile menu button section
old_toggle = """              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-1 text-gray-800 hover:text-black transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>"""

new_toggle = """              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-1.5 -mr-1 text-gray-800 hover:text-black hover:bg-black/5 active:bg-black/10 rounded-full transition-all active:scale-95"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isMenuOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: isMenuOpen ? -90 : 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: isMenuOpen ? 90 : -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Menu className="w-5 h-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>"""

if old_toggle in content:
    content = content.replace(old_toggle, new_toggle)
    with open('src/components/MainLayout.tsx', 'w') as f:
        f.write(content)
    print("Updated menu toggle button successfully.")
else:
    print("Could not find mobile toggle button.")
