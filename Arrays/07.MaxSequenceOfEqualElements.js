function maxSequenceOfEqualElements(array) {


    let result = []
    let newArray = [];
    let currentArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1] || array[i] === array[i - 1]) {
            currentArray.push(array[i])
            if (array[i] !== array[i + 1]) {
                newArray = currentArray;
                if (newArray.length > result.length) {
                    result = newArray;
                    currentArray = []
                } else if (newArray.length < result.length) {
                    result = result;
                    currentArray = []
                } else {
                    result = result;
                    currentArray = [];
                }
            }
        } else if ((array[i - 1] !== array[i]) || (array[i] !== array[i + 1])) {
            newArray = result;
            currentArray = [];
        }
    }
    console.log(result.join(' '))

}
