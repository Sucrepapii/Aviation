import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  page.on("pageerror", (error) => console.log("PAGE ERROR:", error.message));

  try {
    await page.goto("http://localhost:5173", {
      waitUntil: "load",
      timeout: 10000,
    });
    console.log("Page load event fired");

    // Wait a bit for React to render
    await new Promise((r) => setTimeout(r, 2000));

    const rootHtml = await page.$eval("#root", (el) => el.innerHTML);
    if (!rootHtml.trim()) {
      console.log("REACT ROOT IS EMPTY! React likely crashed on mount.");
    } else {
      console.log(
        "React rendered successfully. Root HTML length:",
        rootHtml.length,
      );
      const title = await page.title();
      console.log("Page Title:", title);
    }
  } catch (error) {
    console.log("Script error:", error.message);
  }

  await browser.close();
})();
