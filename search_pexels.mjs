import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });

  async function searchPexels(query) {
    const page = await browser.newPage();
    try {
      await page.goto(
        `https://www.pexels.com/search/videos/${encodeURIComponent(query)}/`,
        { waitUntil: "domcontentloaded" },
      );
      const links = await page.evaluate(() => {
        const anchors = Array.from(
          document.querySelectorAll('a[href^="/video/"]'),
        );
        return anchors.map((a) => a.href).slice(0, 3);
      });
      console.log(`Results for ${query}:`, links);
    } catch (e) {
      console.log(`Failed to search ${query}:`, e.message);
    }
    await page.close();
  }

  await searchPexels("business class cabin interior");
  await searchPexels("luxury airport lounge");

  await browser.close();
})();
