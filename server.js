const express = require("express");
const { port } = require("./conf");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes").route);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
