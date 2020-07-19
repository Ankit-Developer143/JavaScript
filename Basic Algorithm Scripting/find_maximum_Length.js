

function findLongestWordLength(str) {
    let lengths = str.split(' ').map(word => word.length) //any variable u can choose
    console.log(Math.max(...lengths)); 
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog"); 