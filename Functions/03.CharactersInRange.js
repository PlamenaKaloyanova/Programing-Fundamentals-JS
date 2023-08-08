function demo(firtsChar,secondChar){

       let firtsCharSymbol=Math.min(firtsChar.charCodeAt(),secondChar.charCodeAt());
       let secondCharSymbol=Math.max(firtsChar.charCodeAt(),secondChar.charCodeAt());

       let result="";
       for(let symbol=firtsCharSymbol+1;symbol<secondCharSymbol;symbol++){
        result+=String.fromCharCode(symbol)+" "
       
       }
 console.log(result)


}
