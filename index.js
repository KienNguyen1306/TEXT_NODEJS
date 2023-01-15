const express = require("express");
const cors = require("cors"); // url cho phép
require("dotenv").config(); // kết nối biến môi trường
const app = express();

const postRouter = require("./routes/posts_router");
// kết nối cort
// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

//CRUD
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/post", postRouter);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log("Example app listening on port", PORT);
});
