function makePhrases() {
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B"];
    var words2 = ["emprowered", "value-added", "oriented", "focused"];
    var words3 = ["process", "solution", "tipping-point", "strategy"];

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    // alert(phrase);
    console.log(words1[words1.length - 1])
}
makePhrases();