{
  require("dotenv").config();
}
const custom = require("./custom/customExpress");
const app = custom();

app.listen(process.env.PORT, () => {
  console.log(`app listening at http://localhost:${process.env.PORT}`);
});
