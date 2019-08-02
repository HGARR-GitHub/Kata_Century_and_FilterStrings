function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(item => Number.isInteger(item))
}

filter_list([,"k",2.2,1,2,3,4,"a","b","c"])


function century(year) {
  // Finish this :)
  calcYear = Math.floor(year/100)
  return (year%100===0 ? calcYear : calcYear+1) 
}

century(1705) //answer 18
century(2000) // answer 20

