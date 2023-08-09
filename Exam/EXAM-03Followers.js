function demo(input){


    let line=input.shift();
    let store={}
    while(line!='Log out'){
    let commandArr=line.split(": ")
    let command=commandArr[0];
    let name=commandArr[1];
    let point=Number(commandArr[2]);
    let likes=0;
    let comments=0
    switch(command){
        case 'New follower':
            if(store.hasOwnProperty(name)){
                break;
            }else{
                store[name]={
                comments:0,
                likes:0,
                }
            }
            break;
        case 'Like':
            let count=point;
            if(store.hasOwnProperty(name)){
                store[name].likes+=count;
            }else{
                store[name]={
                  likes:count  
                }
                
            }

            break;
        case 'Comment':
            if(store.hasOwnProperty(name)){
               
                store[name].likes+=1;
                
            }else{
                store[name]={
                    likes:1,
                }
                    
            }
            break;
        case 'Blocked':
            if(store.hasOwnProperty(name)){
                delete store[name]
            }else{
                console.log(`${name} doesn't exist.`)
            }
            break;
    }


    line=input.shift()
  
    }

let count=Object.keys(store).length;
console.log(`${count} followers`);

for (let [name,likes] of Object.entries(store)){
    console.log(`${name}: ${store[name].likes}`)
   
}

}
demo(["New follower: George",
"Like: George: 5",
"New follower: George",
"Log out"])





