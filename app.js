const express = require("express");
const checkListRouter = require("./source/routes/checklist")
require("./config/database")

const app = express();

app.use(express.json())


app.use("/checklist",checkListRouter)


app.listen(3000, () => {
  console.log("O servidor foi iniciado...");
});
