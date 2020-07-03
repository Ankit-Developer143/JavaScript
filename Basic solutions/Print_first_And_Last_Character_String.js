
/* function firstLast(name){
    return name.slice(0,1) + name.slice( name.length -1)
   } */

   const firstLast = name => name[0] + name[name.length - 1];
   console.log(firstLast("hello"));