import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://quierelo.pe/');
  
  await page.waitForTimeout(5000);
  
  const products = await page.evaluate(() => {
    const items = [];
    const allDivs = Array.from(document.querySelectorAll('div'));
    
    // Find all potential product blocks
    allDivs.forEach(div => {
        const text = div.innerText;
        // Products usually have price and name. Name is often in h2/h3 or bold
        if (text.includes('S/') && div.querySelector('img')) {
            const nameEl = div.querySelector('h1, h2, h3, h4, .title, .product-title, span[style*="bold"]');
            if (nameEl) {
                const name = nameEl.innerText.trim();
                if (name.length > 3 && !items.find(i => i.name === name)) {
                    // Find description: often a list of items like "20 Rosas...", "Gipsofila", etc.
                    // Look for child elements that contain these keywords
                    let description = "";
                    const candidates = Array.from(div.querySelectorAll('p, span, div'))
                        .map(el => el.innerText.trim())
                        .filter(t => t.length > 10 && t.length < 200 && 
                                   (t.includes('Rosas') || t.includes('Lazo') || t.includes('Tarjeta') || t.includes('Gipsofila') || t.includes('Tulipanes')));
                    
                    if (candidates.length > 0) {
                        // The description is usually the one that mentions materials
                        description = candidates.find(c => c.split(' ').length > 3) || "";
                    }

                    const priceMatch = text.match(/S\/ ?\d+(\.\d+)?/);
                    const price = priceMatch ? priceMatch[0] : "";
                    const img = div.querySelector('img')?.src;
                    const isSoldOut = text.toLowerCase().includes('agotado');
                    
                    items.push({ name, price, img, isSoldOut, description });
                }
            }
        }
    });
    return items;
  });

  console.log(JSON.stringify(products, null, 2));
  await browser.close();
})();
