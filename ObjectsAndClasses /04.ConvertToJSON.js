function demo(firstName,lastName,hairColor) {

let info={
    name:firstName,
    lastName:lastName,
    hairColor:hairColor
}
let formated=JSON.stringify(info)
console.log(formated)
}
