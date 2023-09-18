const puppeteer = require("puppeteer-core");
(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/chromium-browser",
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://google.com");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
