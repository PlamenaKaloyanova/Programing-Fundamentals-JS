function demo(input) {

    let pattern = /^([$%])(?<tag>[A-Z]{1}[a-z]{2,})\1(: )(\[)(?<group>(\d+))(\])\|(\[)(?<group2>(\d+))(\])\|(\[)(?<group3>(\d+))(\])\|$/gm

    let num = Number(input.shift());

  for(let i=0;i<num;i++){
    let message=input.shift()

     if(!message){
        break;
     }

        let exec = pattern.exec(message);
        let info=[0];
        
 if(exec) {
            let result = "";
            let group1 = exec.groups['group'];
            let group2 = exec.groups['group2'];
            let group3 = exec.groups['group3'];

            let group1Asci = String.fromCharCode(group1);
            let group2Asci = String.fromCharCode(group2);
            let group3Asci = String.fromCharCode(group3);
            result = group1Asci + group2Asci + group3Asci;
            let text = `${exec[2]}: ${result}`
            info.push(text)
            console.log(text)
            exec = pattern.exec(message)
          
        }else{
        console.log("Valid message not found!")
        exec=pattern.exec(message); 
        }
  }     

}
demo(["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"])
console.log("---------------")
demo((["3",
"This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
"$tAGged$: [97][97][97]|",
"$Request$: [73]|[115]|[105]|true"])
)

