function dictionary(arr) {
    let dictionary = {};
    for (let line of arr) {
         obj = JSON.parse(line);//от JSON го превръщаме в обект;
        dictionary = Object.assign(dictionary, obj); 
    } 
    
    let sortedDictionary = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));
    for (let term of sortedDictionary) {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    }
}
