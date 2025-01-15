const studentRecords = [
    { name: "Alice", scores: [95, 87, 92] },
    { name: "Bob", scores: [78, 85, 80] },
    { name: "Charlie", scores: [88, 90, 91] },
    { name: "David", scores: [60, 58, 65] }
];

let average=studentRecords.map((student)=>{
    let mark=student.scores.reduce((num1,num2)=>{
        return num1+num2;
    },0);

    let avg=mark/studentRecords.length;
    return{name:student.name,avg};


});
console.log("average is",average);

let above=studentRecords.map((student)=>{
    let avgg=student.scores.filter((scores)=>scores>=85);
    return {name:student.name,avgg};


});
console.log(above);

const topStudent = average.reduce((highest, student) => 
    student.average > highest.average ? student : highest
);
console.log(topStudent);

// let finding = studentRecords.find((student) => {
//     return student.scores.some((score) => score <= 60);  
// });

// console.log(finding);

const firstLowScorer = studentRecords.find(student => Math.min(...student.scores) < 60);
console.log( firstLowScorer);

let nam=studentRecords.map((student)=>{
    return(student.name.toLowerCase());
},0);
console.log(nam);











