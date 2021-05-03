const express = require('express');
const router = express.Router();

router.use(express.json());

const items = [
  {
    id: items.array + 1,
    product: "Multi vitamin for her",
    price: 19.99,
    quantiy: 1,
  },
  {
    id: items.array + 1,
    product: "Honey Crisp Apples",
    price: 2.99,
    quantiy: 8,
  },
  {
    id: items.array + 1,
    product: "Whole Milk",
    price: 4.99,
    quantiy: 2,
  },
  {
    id: items.array + 1,
    product: "Bananas",
    price: 0.4,
    quantiy: 6,
  },
];

router.get("/cart-items", (req, res) => {
  res.json(items);
});

//accept POST request at URI: /students
router.post("/cart-items", (req, res) => {
    console.log(req.body)
    items.push({
        id: items.length+1,
        product:req.body.product,
        price: req.body.price,
        quantiy: req.body.quanity
    })
  res.json("adding a item...");
});

module.exports = router;