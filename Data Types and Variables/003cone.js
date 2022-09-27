function cone(radius,height){

let volume=((1/3*height)*Math.PI*(radius*radius))
//𝛑r² + 𝛑rl.
let l=Math.sqrt(height*height+radius*radius)
let area=(Math.PI*radius*radius)+(Math.PI*radius*l)

console.log(`volume = ${volume.toFixed(4)}`)
console.log(`area = ${area.toFixed(4)}`)
}
cone(3,5)