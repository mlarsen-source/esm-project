import express from 'express';

const router = express.Router();

router.get("/home", (req, res) => {

  res.status(200).json({
    fname: "Matthew",
    lname: "Larsen",
    nickname: "Matt"
  })
   

})

export default router;