// Shared mutex state (persists across requests)
let mutexState = {
  isLocked: false,
  owner: null, // process id that holds the lock
};

function acquireLock(process) {
  if (mutexState.isLocked) {
    return {
      success: false,
      isLocked: mutexState.isLocked,
      owner: mutexState.owner,
      message: `Process ${process} is WAITING. Lock is held by Process ${mutexState.owner}`,
    };
  }

  mutexState.isLocked = true;
  mutexState.owner = process;

  return {
    success: true,
    isLocked: mutexState.isLocked,
    owner: mutexState.owner,
    message: `Process ${process} ACQUIRED the lock and entered Critical Section`,
  };
}

function releaseLock(process) {
  if (!mutexState.isLocked || mutexState.owner !== process) {
    return {
      success: false,
      isLocked: mutexState.isLocked,
      owner: mutexState.owner,
      message: `Process ${process} cannot release. Lock is not held by this process`,
    };
  }

  mutexState.isLocked = false;
  mutexState.owner = null;

  return {
    success: true,
    isLocked: mutexState.isLocked,
    owner: mutexState.owner,
    message: `Process ${process} RELEASED the lock`,
  };
}

function getMutexState() {
  return mutexState;
}

module.exports = { acquireLock, releaseLock, getMutexState };