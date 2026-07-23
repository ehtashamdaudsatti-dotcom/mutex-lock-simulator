const {
  acquireLock,
  releaseLock,
  getMutexState,
} = require("../utils/mutexAlgorithm");

const lockMutex = (req, res) => {
  const { process } = req.body;

  if (process !== 0 && process !== 1) {
    return res.status(400).json({
      success: false,
      message: "Process must be 0 or 1",
    });
  }

  const result = acquireLock(process);

  res.json({
    success: true,
    data: result,
  });
};

const unlockMutex = (req, res) => {
  const { process } = req.body;

  if (process !== 0 && process !== 1) {
    return res.status(400).json({
      success: false,
      message: "Process must be 0 or 1",
    });
  }

  const result = releaseLock(process);

  res.json({
    success: true,
    data: result,
  });
};

const mutexStatus = (req, res) => {
  const state = getMutexState();

  res.json({
    success: true,
    data: state,
  });
};

module.exports = { lockMutex, unlockMutex, mutexStatus };