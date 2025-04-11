import express from 'express';

const router = express.Router();

router.get("/name", (req, res) => {

  res.status(200).json({
    fname: "Matthew",
    lname: "Larsen",
    middle: "S",
    nickname: "Matt"
  })   

})


router.get("/name/:you", (req, res) => {
  const name = req.params.you;
  res.status(200).json({
    msg: `Hello, ${name}`,
  
  })

})


router.get("/multiply/:a/:b", (req, res) => {
  
  let {a, b} = req.params;

  a = Number(a);
  b = Number(b);  

  const result = a * b;
  
  res.status(200).json({
    result  
  })

})


router.get("/name/first/:first/middle/:middle/last/:last", (req, res) => { 

  const { first, middle, last } = req.params;
  
  res.status(200).json({
    first,
    middle,
    last
  })
})
  

export default router;