// Nasimi store configuration
window.NASIMI_CONFIG = {
  // WhatsApp number that receives orders (international format, no +)
  whatsappNumber: '201500059484',

  // Google Sheet published as CSV (File -> Share -> Publish to web -> CSV).
  // Leave empty ('') to use the bundled products.json instead.
  // Sheet columns: id,title,brand,category,price,colors,duration,power,image,stock
  sheetCsvUrl: 'https://docs.google.com/spreadsheets/d/1ZNLR38JR8wjwzy25WQVqpPOzfSqcuJICb4eNMzTKkJs/gviz/tq?tqx=out:csv',

  // Fallback data file
  productsJsonUrl: 'products.json',

  currency: 'EGP'
};
