// document.addEventListener('DOMContentLoaded', function() {
//     function getUrlParameter(name) {
//         name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//         var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//         var results = regex.exec(location.search);
//         return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
//     };
//     var parameterValue = getUrlParameter('condition').toLowerCase();
//     switch(parameterValue){
//         case 'wordpress':
//             document.getElementById('wix').classList.add('hidden');
//             document.getElementById('wordpress').classList.remove('hidden');
//             document.getElementById('squarespace').classList.add('hidden');
//             break;
//         case 'squarespace':
//             document.getElementById('wix').classList.add('hidden');
//             document.getElementById('wordpress').classList.add('hidden');
//             document.getElementById('squarespace').classList.remove('hidden');
//             break;
//         case 'wix':
//             document.getElementById('wix').classList.remove('hidden');
//             document.getElementById('wordpress').classList.add('hidden');
//             document.getElementById('squarespace').classList.add('hidden');
//             break;
//         default:
//             document.getElementById('wix').classList.remove('hidden');
//             document.getElementById('wordpress').classList.remove('hidden');
//             document.getElementById('squarespace').classList.remove('hidden');
//     }
// });
import { launch } from 'puppeteer';

async function scrapeFlipkart(url, className) {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto(url);

  // Wait for the element with the specified class name to appear
  await page.waitForSelector(`.${className}`);

  // Extract the text content of the element
  const elementContent = await page.$eval(`.${className}`, element => element.textContent.trim());

  await browser.close();

  return elementContent;
}

// Usage
const url = 'https://www.flipkart.com/apple-iphone-15-pink-128-gb/p/itm7579ed94ca647?pid=MOBGTAGPNMZA5PU5&lid=LSTMOBGTAGPNMZA5PU5MHAHWI&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_2&otracker=browse&fm=organic&iid=a733a6cc-c9cb-4579-b4f5-7e31ceaba2c8.MOBGTAGPNMZA5PU5.SEARCH&ppt=hp&ppn=homepage&ssid=pm3p4wqbg00000001712203656691';
const className = '_30jeq3 _16Jk6d';

scrapeFlipkart(url, className)
  .then(data => {
    const scrapedDataElement = document.getElementById('scrapedData');
    scrapedDataElement.textContent = data;
  })
  .catch(error => {
    console.error('Error:', error);
    const scrapedDataElement = document.getElementById('scrapedData');
    scrapedDataElement.textContent = 'Failed to fetch data';
  });
