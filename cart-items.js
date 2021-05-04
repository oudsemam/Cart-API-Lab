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

//get /cart-items by id
router.get('/cart-items/:id', (req, res) => {
  console.log (req.params.id)
  const found = items.find(item => item.id === parseInt(req.params.id));

  if(!found) {
    res.status(404).send('The cart item could not be found');
  }else {
    res.json(found);
  }
  res.status(200).json(item);
});


//accept POST request at URI: /students
router.post("/cart-items", (req, res) => {

  const quantity = parseInt(req.body.quantity);

  if (!quantiy) {
    return res.status(400).send('invalid quantity');
  }

  const price = parseInt(req.body.price);
  
  if (!price) {
    return res.status(400).send('invalid price');
  }

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

//put method
router.put('/cart-items/:id', (req, res) =>{
  const quantity = parseInt(req.body.quantity);

  if (!quantiy) {
    return res.status(400).send("invalid quantity");
  }

  const price = parseInt(req.body.price);

  if (!price) {
    return res.status(400).send("invalid price");
  }
  
  const found = items.find(item => item.id === parseInt(req.params.id));
  if (found) {
    
    found.price = req.body.price;
    found.quantiy = req.body.quantiy;
    found.product = req.body.product;

    res.json (found);
  } else {
    res.status(404).send('the cart item could not be found')
  }
});


module.exports = router;