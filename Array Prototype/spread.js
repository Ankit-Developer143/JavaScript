//its use to combine to operator
    let fragment = ['to', 'code'];
    let sentence = ['learning',...fragment,'is','fun'] // Change this line
    
  console.log(sentence);

  //op:-[ 'learning', 'to', 'code', 'is', 'fun' ]



  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning',...fragment,'is','fun'] // Change this line
    return sentence;
  }
  
  console.log(spreadOut());
  //same as above op:-[ 'learning', 'to', 'code', 'is', 'fun' ]
  