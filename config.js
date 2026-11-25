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

  // Built-in photos by product id. A photo typed in the Sheet (columns image, image2 ... image6,
  // or several links in 'image' separated by |) takes priority over these.
  productImages: {
    '7': ['images/bl/slmf-1.svg'],
    '8': ['images/bl/pv2-1.svg', 'images/bl/pv2-2.svg', 'images/bl/pv2-3.svg', 'images/bl/pv2-4.svg'],
    '9': ['images/bl/sl59-1.svg'],
    '10': ['images/bl/sl1d-1.svg', 'images/bl/sl1d-2.svg', 'images/bl/sl1d-3.svg'],
    '11': ['images/bl/sltoric-1.svg', 'images/bl/sltoric-2.svg'],
    '12': ['images/bl/ultratoric-1.svg'],
    '13': ['images/bl/ultra-1.svg', 'images/bl/ultra-2.svg', 'images/bl/ultra-3.svg']
  },

  currency: 'EGP'
};
