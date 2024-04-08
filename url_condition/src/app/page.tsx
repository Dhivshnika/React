'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = 'https://www.flipkart.com/apple-iphone-15-pink-128-gb/p/itm7579ed94ca647?pid=MOBGTAGPNMZA5PU5&lid=LSTMOBGTAGPNMZA5PU5MHAHWI&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_2&otracker=browse&fm=organic&iid=a733a6cc-c9cb-4579-b4f5-7e31ceaba2c8.MOBGTAGPNMZA5PU5.SEARCH&ppt=hp&ppn=homepage&ssid=pm3p4wqbg00000001712203656691'; // Replace with your URL
        const response = await axios.get(url);
        const cheerio = require('cheerio');
        const $ = cheerio.load(response.data);
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
      {data && <p>{data}</p>}
    </div>
  );
}

export default Home;