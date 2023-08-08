function matchPhoneNumber(input){
let pattern=/\+359([ -])2\1\d{3}\1\d{4}\b/g;
let text=input.shift()

let result=text.match(pattern);
console.log(result.join(", "))

}
