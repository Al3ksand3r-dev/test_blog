const express = require("express");
const router = express.Router();
const { create, getAll } = require("../models/Blog");
const { auth } = require("./verifyUser");

router.get("/", auth, async (req, res) => {
  const blogs = await getAll(req.user.userID);
  if (blogs) {
    res.render("pages/blogs", { user: req.user, blogs });
    return;
  }
  res.status(500);
});

router.post("/", auth, async (req, res) => {
  const blog = await create(req.body, req.user.userID);
  if (blog) {
    res.json(blog);
    return;
  }
  res.status(500);
});

module.exports = router;
