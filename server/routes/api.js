const express = require("express");
const router = express.Router();

wordCounter = {};

router.get("/sanity", function (req, res) {
  res.end("Server is up and running");
});

router.get("/words/:word", function (req, res) {
  const word = req.params.word;
  if (wordCounter[word]) {
    res.send({ count: wordCounter[word] });
  } else {
    res.send({ count: 0 });
  }
});

router.post("/words/:word", function (req, res) {
  const word = req.params.word;
  if (wordCounter[word]) {
    wordCounter[word] += 1;
  } else {
    wordCounter[word] = 1;
  }
  res.send({ text: "Added " + word, currentCount: wordCounter[word] });
});

router.post("/sentences/:sentence", function (req, res) {
  const sentence = req.params.sentence;

  const words = sentence.split(" ");

  let numNewWords = 0;
  let numOldWords = 0;

  words.forEach((word) => {
    if (wordCounter[word]) {
      wordCounter[word] += 1;
      numOldWords += 1;
    } else {
      wordCounter[word] = 1;
      numNewWords += 1;
    }
  });

  res.send({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1,
  });
});

router.delete("/words/:word", function (req, res) {
  console.log("Someone's trying to make a DELETE request");
  let word = req.params.word;
  if (!wordCounter[word]) {
    throw new Error("No such word");
  }
  delete wordCounter[word];
  res.end();
});

module.exports = router;
