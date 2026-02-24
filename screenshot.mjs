import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  try {
    await page.goto("http://localhost:5173", {
      waitUntil: "load",
      timeout: 15000,
    });
    await new Promise((r) => setTimeout(r, 2000));
    await page.screenshot({ path: "screenshot.png", fullPage: true });
    console.log("Screenshot saved to screenshot.png");
  } catch (error) {
    console.log("Script error:", error.message);
  }

  await browser.close();
})();
