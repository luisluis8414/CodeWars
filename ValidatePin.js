function validatePIN (pin) {
    var num=parseInt(pin);
    if(num===0000||num===000000)return true;
    else if((num>=0)&&(Number.isInteger(num))&&(num.toString().length===4)||(pin.toString().length===6))return true;
    else return false;
  }
  
  function validatePIN2 (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
  }
  