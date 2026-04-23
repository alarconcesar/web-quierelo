import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://quierelo.pe/');
  
  await page.waitForTimeout(5000);
  
  const products = await page.evaluate(() => {
    const items = [];
    const cards = document.querySelectorAll('div, li, article');
    cards.forEach(card => {
        const text = card.innerText;
        if (text.includes('S/') && (text.includes('Ramo') || text.includes('Box') || text.includes('Tulipanes') || text.includes('Osito'))) {
            const name = card.querySelector('h1, h2, h3, h4, .name, .title')?.innerText || "Desconocido";
            // Look for description pattern: usually after the price or name, contains words like "Rosas", "Lazo", "Tarjeta"
            // Often it's a smaller text block or another div
            const possibleDescription = Array.from(card.querySelectorAll('p, span, div'))
                .map(el => el.innerText)
                .find(t => t.length > 20 && t.length < 150 && (t.includes('Tarjeta') || t.includes('dedicatoria') || t.includes('Lazo')));

            const price = text.match(/S\/ ?\d+/g) || [];
            const img = card.querySelector('img')?.src;
            const isSoldOut = text.toLowerCase().includes('agotado');
            if (name !== "Desconocido" && !items.find(i => i.name === name)) {
                items.push({ name, price: price[0], img, isSoldOut, description: possibleDescription || "" });
            }
        }
    });
    return items;
  });

  console.log(JSON.stringify(products, null, 2));
  await browser.close();
})();
