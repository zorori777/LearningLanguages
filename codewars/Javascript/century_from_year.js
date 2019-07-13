// My code
function century(year) {
  const century = Math.floor(year/100);
  const decade = year % 100;
  
  if (decade > 0) {
    return century + 1;
  }
  return century;
}

// Best Practice
const century = year => Math.ceil(year/100)
