function sumFirstAndLast(array) {

    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop());

    let sumFirstAndLast = firstElement + lastElement;

    console.log(sumFirstAndLast);

}
