function findNextSquare(sq) {
    if(sq%(Math.sqrt(sq))===0) return (sq+1)*(sq+1);
    else return -1;
  }


function findNextSquare2(sq) {
  return Math.sqrt(sq)%1?-1:Math.pow(Math.sqrt(sq+1),2);
}

