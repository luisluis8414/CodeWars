function getCount(str) {
    var vowelCount=0;
    var vowels=['a','e','i','o','u']
    var chars=str.split('');
    chars.forEach(element => {if(vowels.includes(element))vowelCount++;});
    return vowelCount;
  }

