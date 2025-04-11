import { Router } from 'express';
const router = Router();

router.get("/", (req, res) => {

  const term = req.query.term;
  
  if (term && term.trim() !== "") 
  {
    res.status(200)
    .send(`Searching for: ${term}`);
  } 
  else 
  {
    res.status(404)
    .send("Search term required");
  }
});


export default router;