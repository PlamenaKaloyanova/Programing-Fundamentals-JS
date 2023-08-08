function demo(input) {
let employees={}

for (const line of input) {
    let name=line;
    employees[name]=name.length;
}
for (const name in employees) {
  console.log(`Name: ${name} -- Personal Number: ${employees[name]}`)
}

}
