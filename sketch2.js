var annabel_lee;

function preload() {
  annabel_lee = loadStrings("annabel_lee.txt");
}

function setup() {
  noCanvas();
  output = select("#output");

  var r = /(\W+)/;
  var newText = [];

  for (var i = 0; i < annabel_lee.length; i++) {
    append(newText, annabel_lee[i].split(r));
  }

  for (var i = 0; i < newText.length; i++) {
    for (var j = 0; j < newText[i].length; j++) {
      var span = createSpan(newText[i][j].toLowerCase());

      if (!/W+/.test(newText[i][j])) {
        span.mouseOver(rhyme);
      }
    }
    var span2 = createSpan("<br>");
    // span2.parent(output);
  }
}


function rhyme() {

      var word = this.html();
      var rita = RiTa.rhymes(word);

      if (rita.length != 0){
      //  console.log(rita[0]);
         this.html(rita[int(random(rita.length))]);
      }

    //

    //  console.log(rita);


  }
