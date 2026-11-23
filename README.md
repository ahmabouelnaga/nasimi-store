# Nasimi (ناسيمي) Storefront

Bilingual (Arabic/English) contact-lens store. Free static hosting, no backend, no payment gateway. Checkout = cart summary sent to WhatsApp +20 15 00059484.

## Files
- `index.html`, `styles.css`, `app.js` - the store (no build step needed)
- `config.js` - WhatsApp number + product data source
- `products.json` - bundled product data (317 products, used until the Google Sheet is connected)
- `nasimi-sheet-template.csv` - import this into the Google Sheet

## How the owner edits products (Google Sheet)
1. Create a new Google Sheet (sheets.new) while logged into the store's Google account.
2. File > Import > Upload `nasimi-sheet-template.csv` (replace current sheet).
3. Columns: id, title, brand, category, price, colors (separate several with | ), duration (1 Day / Monthly / Quarterly), power (yes/no), image (photo URL), stock (yes/no).
4. File > Share > Publish to web > choose the sheet tab > CSV > Publish. Copy the CSV link.
5. Paste the link into `config.js` as `sheetCsvUrl`. The site now reads the Sheet live; edits appear on the site within minutes. (products.json is ignored while sheetCsvUrl is set.)
- To hide a product: set stock to `no`. To add one: add a row with a new unique id.

## Deploy on GitHub Pages (free)
1. Create a free GitHub account, then a new PUBLIC repository named `nasimi-store`.
2. Upload all files from this folder (Add file > Upload files, drag the folder contents, Commit).
3. Settings > Pages > Source: Deploy from a branch > Branch: main, folder: / (root) > Save.
4. The store appears at https://<username>.github.io/nasimi-store/ within a minute.
Optional later: buy a custom domain (~$1-12/yr) and set it in Settings > Pages > Custom domain.

## Notes
- Product photos: supplier images go in the `image` column (URLs). Until then the site shows brand-colored placeholders.
- Orders: customer taps "أكمل الطلب على واتساب" / "Complete order on WhatsApp"; WhatsApp opens with a pre-filled order (items, per-eye powers, quantities, prices, total in EGP, name/address lines).
- Language: Arabic default with an English toggle; the choice is remembered per visitor.
- Upgrade path: the same Sheet data can be imported into Shopify or WooCommerce later.
