const express = require("express");
const cors = require("cors");

const mutexRoutes = require("./routes/mutexRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Mutex Backend Running Successfully 🚀"
  });
});

app.use("/api/mutex", mutexRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

module.exports = app;