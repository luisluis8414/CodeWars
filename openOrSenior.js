function openOrSenior(data){
    var members=[];
    var open="Open";
    var senior="Senior"
    data.forEach(element => {
        console.log(element);
        if(element[0]>=55&&element[1]>7) members.push(senior);
        else members.push(open);
    });
    return members;
  }

  function openOrSenior2(data){
    return data.map(([age, handicap])=> (age>55&&handicap>7) ? "Senior":"Open");
  }

  console.log(openOrSenior2([]))