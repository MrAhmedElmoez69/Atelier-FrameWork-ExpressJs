var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  const { id: _id } = req.query;
  console.log(_id);

  console.log(param);
  res.status(200).json("welcome To Express ");
});

router.post("/", function (req, res, next) {
  try {
    const { x, y } = req.body;
    if (!x || !y) {
      throw new Error("you must specify x and y");
    }
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      throw new Error("x and y must be integer");
    }
    res.status(200).json(`la somme de x et y est ${x + y}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;