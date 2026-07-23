const express = require("express");

const router = express.Router();

const {
  lockMutex,
  unlockMutex,
  mutexStatus,
} = require("../controllers/mutexController");

router.post("/lock", lockMutex);
router.post("/unlock", unlockMutex);
router.get("/status", mutexStatus);

module.exports = router;