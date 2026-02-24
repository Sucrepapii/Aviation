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
    await new Promise((r) => setTimeout(r, 3000));

    // Scroll to the bottom to trigger lazy loads if any, or just get destination in view
    await page.evaluate(() => {
      const dest = document.getElementById("destination");
      if (dest) dest.scrollIntoView();
    });

    await new Promise((r) => setTimeout(r, 2000));
    const element = await page.$("#destination");
    if (element) {
      await element.screenshot({ path: "destination_videos_screenshot.png" });
      console.log("Screenshot saved to destination_videos_screenshot.png");
    } else {
      console.log("Could not find #destination element");
    }
  } catch (error) {
    console.log("Script error:", error.message);
  }

  await browser.close();
})();
