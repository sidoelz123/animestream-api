const puppeteer = require('puppeteer');

const getVideoUrlsWithPuppeteer = async (pageUrl) => {
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto(pageUrl, { waitUntil: 'domcontentloaded' });

    // Tunggu hingga elemen video tersedia
    await page.waitForSelector('video');

    // Ambil URL video dari tag <source> dalam elemen <video>
    const videoUrls = await page.evaluate(() => {
      const sources = Array.from(document.querySelectorAll('video source'));
      return sources.map(source => source.src);  // Mengembalikan array URL video
    });

    await browser.close();
    return videoUrls;  // Mengembalikan daftar video URLs
  } catch (error) {
    console.error('Error during Puppeteer operation:', error);
    return [];  // Kembalikan array kosong jika terjadi error
  }
};


const getIframeUrl = async (url) => {
  try {
    // Meluncurkan browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Mengunjungi halaman yang dimaksud
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Tunggu elemen iframe tersedia
    await page.waitForSelector('#animeVideoPlayer iframe');  // Tunggu elemen iframe yang berada dalam #animeVideoPlayer

    // Ambil URL src dari elemen iframe
    const iframeSrc = await page.evaluate(() => {
      const iframe = document.querySelector('#animeVideoPlayer iframe'); // Memilih iframe yang ada dalam #animeVideoPlayer
      return iframe ? iframe.src : null;  // Mengambil src dari iframe atau null jika tidak ada
    });

    console.log('URL src dari iframe:', iframeSrc);  // Tampilkan hasil URL iframe di console

    // Menutup browser setelah selesai
    await browser.close();

    return iframeSrc;  // Mengembalikan URL iframe

  } catch (error) {
    console.error('Error mengambil iframe URL:', error);
    return null;  // Kembalikan null jika terjadi error
  }
};
module.exports = {
  getVideoUrlsWithPuppeteer, getIframeUrl
};
