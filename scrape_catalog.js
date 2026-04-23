import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://quierelo.pe/');
  
  // Wait for products to load (if dynamic)
  await page.waitForTimeout(5000);
  
  const products = await page.evaluate(() => {
    const items = [];
    document.querySelectorAll('.product-item, .card-product, .item-product').forEach(el => {
        // This is a guess on common class names, I'll look for generic patterns
    });
    
    // Better: look for anything with a price (S/) and a name nearby
    const cards = document.querySelectorAll('div, li, article');
    cards.forEach(card => {
        const text = card.innerText;
        if (text.includes('S/') && (text.includes('Ramo') || text.includes('Box') || text.includes('Tulipanes'))) {
            const name = card.querySelector('h1, h2, h3, h4, .name, .title')?.innerText || "Desconocido";
            const price = text.match(/S\/ ?\d+/g) || [];
            const img = card.querySelector('img')?.src;
            const isSoldOut = text.toLowerCase().includes('agotado');
            if (name !== "Desconocido") {
                items.push({ name, price, img, isSoldOut });
            }
        }
    });
    return items;
  });

  console.log(JSON.stringify(products, null, 2));
  await browser.close();
})();
