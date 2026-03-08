import re

with open('src/components/MainLayout.tsx', 'r') as f:
    content = f.read()

old_close = """                {/* Close button inside mobile menu to ensure it can be closed if overlapping the header */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-6 p-2 text-gray-800 hover:text-black transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>"""

new_close = """                {/* Close button inside mobile menu to ensure it can be closed if overlapping the header */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-6 p-2 bg-black/5 hover:bg-black/10 text-gray-800 hover:text-black rounded-full transition-colors active:scale-95"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>"""

if old_close in content:
    content = content.replace(old_close, new_close)
    with open('src/components/MainLayout.tsx', 'w') as f:
        f.write(content)
    print("Updated close button successfully.")
else:
    print("Could not find close button.")
