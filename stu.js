const students = [
    { name: "Alice", score: 95, subject: "Math" },
    { name: "Bob", score: 67, subject: "Science" },
    { name: "Charlie", score: 82, subject: "English" },
    { name: "David", score: 74, subject: "History" },
    { name: "Eve", score: 58, subject: "Art" },
    { name: "Frank", score: 89, subject: "Physics" },
    { name: "Grace", score: 91, subject: "Biology" },
];

const found=students.filter((item)=>{
    return(item.score<=70);
    
});
console.log(found);

const gradee=students.map((student)=>{
    let grade=" ";

    if(student.score>=90) grade='A';
    else if(student.score>=80) grade='B';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    else if(student.score>=70) grade='C';
    else if(student.score>=60) grade='D';
    else grade='F';
    return{student,grade};

});
console.log(gradee);

let totalscore=students.reduce((num1,num2)=>{
    return num1+num2.score;

},0);
console.log("total score",totalscore);

let average=totalscore/students.length;
console.log("average=",average);

let above=students.filter((ite)=>{
    return(ite.score<=average);

});
console.log(above);







