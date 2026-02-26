import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();


await page.goto('https://biblian.fo/1/1');
const html = await page.content();


let everythingOnPage = await page.evaluate(function() {
  return document.body.innerText;
});

let verseandnumber = everythingOnPage.slice(130,-427);
let tester = verseandnumber.slice(1,14);

if (tester === 'Kapittul 1/50') {
  let modifiedverseandnumber = verseandnumber.slice(28,-1);

  let organisedverseandnumber = modifiedverseandnumber.split('\n');

  let verses = organisedverseandnumber.filter((e, i) =>  i % 2 == 0)
  console.log(verses+ "this");
  console.log(verses[30]);

} else {
  let organisedverseandnumber = verseandnumber.split('\n');

  let verses = organisedverseandnumber.filter((e, i) =>  i % 2 != 0)
  console.log(verses + "that");
  console.log(verses[30]);
} 

//console.log(verses);


// let i = 1;
// let verseText = null;
// let FM1 = [];

// while (i <= 31) {
//   const search = '>'+i+'</span>';
//   const lines = html.split('\n');
//   for (const line of lines) {
//     const idx = line.indexOf(search);
//     if (idx !== -1) {
//       const after = line.slice(idx + search.length);
//       const endIdx = after.indexOf('</li>');
//       if (endIdx !== -1) {
//         verseText = after.slice(0, endIdx).trim();
//         FM1.push(verseText);
//         break;
//       }
//     }
//   }

//   i++;
// }

try {
  // ...all your code...
  await browser.close();
} catch (err) {
  console.error('Error:', err);
}