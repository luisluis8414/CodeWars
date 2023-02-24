function squareDigits(num){
    var sum=[];
    var splitNums=num.toString().split('');
    splitNums.forEach(element => {
        sum.push(element*element);
    });
    var end=parseInt(sum.join(''));
    return end;
  }

  console.log(squareDigits(129));