let marks = [35,45,78,22,56,33,11]


//Using Forloops
let passed = 0
for(let i = 0;i<marks.length;i++){
    if(marks[i]>=35){
        passed++
    }
}
console.log(passed);
//op:-4

let result = marks.filter((value) => value>=35 ).length
console.log(result);
//op:-4