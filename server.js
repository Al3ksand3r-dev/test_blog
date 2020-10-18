const { urlencoded } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const cookieParser = require("cookie-parser");
const navRoutes = require("./routes/nav");
const userRoutes = require("./routes/users");
const blogRoutes = require("./routes/posts");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/", navRoutes);
app.use("/", userRoutes);
app.use("/api/posts", blogRoutes);

app.listen(port, () => console.log(`Server up and running on port: ${port}`));
