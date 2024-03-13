const express = require("express");
const cors = require("cors");
const data_schedule = require("./data/schedule_ilkom_c.json");

const PORT = 4000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("server is connected");
});

app.get("/schedule", (req, res) => {
  res.json(data_schedule);
});

app.use((req, res) => {
  res.json({
    error: true,
    note: "your url is not valid",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT} `);
});
