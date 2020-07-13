function add(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
  }
 var result = new add(10)(20)(30);
 console.log(result);

 /* op:-60 */