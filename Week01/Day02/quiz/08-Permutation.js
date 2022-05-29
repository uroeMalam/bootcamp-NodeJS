const checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false

    // else sort and compare 
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
    const one = stringOne.split('');
    const two = stringTwo.split('');
    if (one.length !== two.length) {
        return false;
    }else{
      if (one.sort == two.sort) {
        return true;
      }
      return false;
    }
       
  };
  

  console.log(checkPermute('aba', 'aab'))//true;
  console.log(checkPermute('aba', 'aaba'))//false;
  console.log(checkPermute('aba', 'aa'))//false;