// My code
function setAlarm(employed, vacation){
  if (employed === true && vacation === false) {
    return true
  } else {
    return false
  }
}

// Best Practice
const setAlarm = (employed, vacation) => employed && !vacation;
