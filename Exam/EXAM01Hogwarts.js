function demo(input) {

    let message = input.shift();

    while (input[0] != "Abracadabra") {
        let line = input.shift().split(" ");
        let command = line[0];
        switch (command) {
            case "Abjuration":
                message=message.toUpperCase();
                console.log(message)
                break;
            case "Necromancy":
                message=message.toLowerCase();
                console.log(message)
                break;
            case "Illusion":
                let index=Number(line[1]);
                let letter=line[2];

                if(index>=0 && index<message.length){
                    let sub=message.substring(index,index+1)
                    message=message.replace(sub,letter);
                    console.log("Done!")
                    
                }else{
                    console.log("The spell was too weak.")
                }
                break;
            case "Divination":
                let firstSubstring=line[1];
                let secondSubstring=line[2];
                if(!message.includes(firstSubstring)){
                    break;
                }
                while(message.includes(firstSubstring)){
                    message=message.replace(firstSubstring,secondSubstring)
                }
                console.log(message)
                break;
            case "Alteration":
                let subs=line[1];
                if(message.includes(subs)){
                    message=message.replace(subs,"");
                    console.log(message)
                }else{
                console.log("The spell did not work!")
                }
                break;
                default:
                    console.log("The spell did not work!")

        }
    }
}
demo((["A7ci0",
"Divination ci0 cba",
"Illusion 1 c",
"Illusion 4 o",
"Abjuration",
"Abracadabra"])

)