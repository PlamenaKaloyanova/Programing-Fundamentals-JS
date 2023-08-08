function loadingBar(number){

if(number===100){
    console.log('100% Complete!')
}else{
    let LoadingResult=Math.floor((number)/10)
    let symbol="%".repeat(LoadingResult)
    let dotsResult=(10-symbol.length)
    let dots=".".repeat(dotsResult)
    console.log(`${number}% [${symbol}${dots}]`)
    console.log('Still loading...')
}
  

}
