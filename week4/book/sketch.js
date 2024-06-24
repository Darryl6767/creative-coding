/*

This is a p5.js sketch that creates a book by repeating some
word 50000 times, with punctuation and organization added so 
that it looks more like a real book.



What I Have Done:
 - chosen a word to repeat: Echo
 -
  

   
*/

let word = "Echo";
let wc = 0;
let chapter = 1;
let environments = [
    "Mountains", "Caves", "Valleys", "Forests", "Bathroom",
    "Canyons", "Deserts", "Tunnels", "Cathedrals", "Large Halls",
    "Cliffs", "Lakes", "Subways", "Ruins", "Amphitheaters",
    "Abandoned Buildings", "Gorges", "Ravines", "Quarries", "Underground Chambers"
];

// Mix up and shuffle the environments array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
environments = shuffle(environments);

function setup() {

  // We won't need any canvas
  noCanvas();

  let content = select("body");
  content.attribute("id","content");

  content.child(createElement("h1","Echoes"));

  // Create chapters with paragraphs and sentences
  while(wc < 50000 && chapter <= environments.length) {

  	//Learned from https://www.w3schools.com/js/js_string_templates.asp
    let chapterTitle = `Chapter ${chapter}: Echoes in the ${environments[chapter - 1]}`;


    content.child(createElement("h2", chapterTitle));

    for (let p = 0; p < random(5, 20); p++) {
      let paragraph = '';
      for (let s = 0; s < random(3, 20); s++) {
        let Punct = [",", ",", ",", ";", " --"];
        let endPunct = [".", ".", "?", "!"];

        //Leanred from https://www.w3schools.com/js/js_strings.asp
        let sentence = word.charAt(0).toUpperCase() + word.slice(1);
        let sentenceLength = random(9, 25);
        wc += sentenceLength + 1;
        for (let w = 0; w < sentenceLength; w++) {
          sentence += " " + word;
          if (random() < 0.2) {
            sentence += random(Punct);
          }
        }
        sentence += random(endPunct) + " ";
        paragraph += sentence;
      }
      content.child(createElement("p", paragraph));
    }

    chapter++;
  }

  window.PagedPolyfill.preview();
}
