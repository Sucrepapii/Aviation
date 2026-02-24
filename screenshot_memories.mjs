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
    const element = await page.$("#memories");
    if (element) {
      await element.screenshot({ path: "memories_screenshot.png" });
      console.log("Screenshot saved to memories_screenshot.png");
    } else {
      console.log("Could not find #memories element");
    }
  } catch (error) {
    console.log("Script error:", error.message);
  }

  await browser.close();
})();
