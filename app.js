const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sequelize = require("./util/database");
const errorController = require("./controllers/error");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", require("./routes/shop"));
app.use("/admin", require("./routes/admin"));

app.use(errorController.get404);

// Creates the appropriate table
sequelize
  .sync()
  .then((result) => {
    console.log(result);
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
