function demo(input){
let studentGrades={};

input.forEach(line => {
    let currentLine=line.split(" ");
    let name=currentLine.shift();
    let grades=currentLine;
    if(!studentGrades.hasOwnProperty(name)){
        studentGrades[name]=grades;
    }else{
        let oldGrades=studentGrades[name]
        let newGrades=[]
        newGrades.push(grades)
        studentGrades[name]=grades.concat(oldGrades)
    }
});
let sortedGrades=Object.entries(studentGrades).sort((a,b)=>a[0].localeCompare(b[0]))
for (const [name,grades] of sortedGrades) {
let sum=0;
for (const grade of studentGrades[name]) {
   sum+=Number(grade);
}
let averageGrade=sum/(grades.length);
console.log(`${name}: ${averageGrade.toFixed(2)}`)
}

}
