const express = require('express');
const router = express.Router();


router.use(express.json());

let items=[
  {
    id: 1,
    product: "Multi vitamin for her",
    price: 19.99,
    quantiy: 1,
  },
  {
    id: 2,
    product: "Honey Crisp Apples",
    price: 2.99,
    quantiy: 8,
  },
  {
    id: 3,
    product: "Whole Milk",
    price: 4.99,
    quantiy: 2,
  },
  {
    id: 4,
    product: "Bananas",
    price: 0.4,
    quantiy: 6,
  },
];

//get /cart-items
router.get("/cart-items", (req, res) => {
  res.status(200).json(items);
});


router.get("/cart-items/id", (req, res) =>{
  let cartItems = items.find()
  res.items.id;
  res.status(200).json(items);
} )


//accept POST request at URI: /students
router.post("/cart-items", (req, res) => {
    console.log(req.body)
    let itemAdded = {
      id: items.length + 1,
      product: req.body.product,
      price: req.body.price,
      quantiy: req.body.quantiy,
    };
    items.push(itemAdded);
    res.status(201).json(itemAdded);
});

module.exports = router;