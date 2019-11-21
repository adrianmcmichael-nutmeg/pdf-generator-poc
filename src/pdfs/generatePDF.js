import puppeteer from "puppeteer";

const generatePDF = async (res) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("http://localhost:3030/page");
    const buffer = await page.pdf({format: "A4"});

    res.type("application/pdf");
    res.status(201);
    res.send(buffer);

    browser.close();
};
export default generatePDF