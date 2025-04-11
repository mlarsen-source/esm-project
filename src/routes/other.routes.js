import { Router } from 'express';

const router = Router();

router.get("/books/search", (req, res) => {
  const author = req.query.author;

  if (!author || author.trim() === "") {
    return res.status(400).json({
      found: false,
      message: "Missing or empty 'author' query parameter",
    });
  }

  res.status(200).json({
    found: true,
    author,
  });
});

export default router;
