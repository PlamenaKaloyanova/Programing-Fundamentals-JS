function minerTask(input) {

    let result = {};

    for (let i = 0; i < input.length; i+=2) {
        let resource = input[i];
        let quantity = Number(input[i+1]);

        if (!result.hasOwnProperty(resource)) {
            result[resource] = quantity;
        }else{
            result[resource]+=quantity;
        }

    }
    let sortedResult=Object.entries(result)
    for (const [key,value] of sortedResult) {
        console.log(`${key} -> ${value}`)
    }


}
