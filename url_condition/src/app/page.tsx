'use client'
import { useEffect, useState } from 'react';
const cheerio = require('cheerio');
const scrapingbee = require('scrapingbee');

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const client = new scrapingbee.ScrapingBeeClient('OBED8EM95K6POPOSNZCYXBQ1D57ZGYHAXRIA2FTETG3J6V1OW0SR2WGBEP3HS48F7MGX0W79IVDT06LI');
        const scrapingBeeResponse = await client.get({
          url: 'https://www.flipkart.com/apple-iphone-15-pink-128-gb/p/itm7579ed94ca647?pid=MOBGTAGPNMZA5PU5&lid=LSTMOBGTAGPNMZA5PU5MHAHWI&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_2&otracker=browse&fm=organic&iid=a733a6cc-c9cb-4579-b4f5-7e31ceaba2c8.MOBGTAGPNMZA5PU5.SEARCH&ppt=hp&ppn=homepage&ssid=pm3p4wqbg00000001712203656691',
          params: {},  
        });
        const decoder = new TextDecoder();
        const text = decoder.decode(scrapingBeeResponse.data);
        const $ = cheerio.load(text);
        const desiredData = $('._30jeq3._16Jk6d').text();
        setData(desiredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {data ?<p>{data}</p>:<p>Fetching Please wait......</p>}
    </div>
  );
}
