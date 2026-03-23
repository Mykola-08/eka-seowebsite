from playwright.sync_api import sync_playwright

def test_hero_section():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('http://localhost:3000')
        page.wait_for_selector('h1')
        page.screenshot(path='hero_verification.png', full_page=True)
        browser.close()

if __name__ == "__main__":
    test_hero_section()
