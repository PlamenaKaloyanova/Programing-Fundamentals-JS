function nonDecreasingSubset(array) {
   let newArray = [];
   let bigestNumber = Number.MIN_SAFE_INTEGER;
   for (let i = 0; i < array.length; i++) {
      let isBigger = true;
      if (array[i] > bigestNumber) {
         bigestNumber = array[i]
      }
      if ((bigestNumber>(array[i]))) {
         isBigger = false;
      } else {
         newArray.push(array[i]);
         isBigger = true;
      }
   }


   console.log(newArray.join(" "))


}
