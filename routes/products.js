const express = require("express");
const router = express.Router();
const data = require("products.json");


router.get("/", (req, res, next) => {
  res.json(data);
})

router.get("/instock/:qt", (req, res, next) => {
  const { qt } = req.params;
  const dataFiltered = Object.values(data).filter((elem) => {
    return elem["stock"] > qt;
  });
  res.json(dataFiltered);
})

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  res.json(data[id]);
})

router.get("/:id/:qt", (req, res, next) => {
  const { id, qt } = req.params;
  res.json({
    id: id, qt: qt,
    unit_price: data[id]["price"],
    total_price: qt * data[id]["price"],
  });
})

module.exports = router;
