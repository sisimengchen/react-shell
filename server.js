// const express = require('express');
// const app = express();

// const React = require('react');
// const ReactDOMServer = require('react-dom/server');

// const App = React.createFactory(require('./App'));

// app.get('/', (req, res) => {
//   const html = ReactDOMServer.renderToStaticMarkup(React.DOM.body(
//     null,
//     React.DOM.div({
//       id: 'root',
//       dangerouslySetInnerHTML: {
//         __html: ReactDOMServer.renderToStaticMarkup(App())
//       }
//     })
//   ));

//   res.end(html);
// });

// app.listen(3000, () => {
//   console.log(`running on port ${3000}`);
// });
console.time();
const puppeteer = require('puppeteer');
// import puppeteer from 'puppeteer';

async function ssr(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  const html = await page.content(); // serialized HTML of page DOM.
  await browser.close();
  console.log(html);
  console.timeEnd();
  return html;
}

ssr('http://192.168.31.75:8080');
