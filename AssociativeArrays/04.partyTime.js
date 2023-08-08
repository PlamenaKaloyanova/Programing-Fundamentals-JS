function partyTime(input){

let vipList=[];
let regularList=[];

let cuurentGuest=input.shift()

while(cuurentGuest!=="PARTY"){
    const isVip=!isNaN(cuurentGuest[0])
    if(isVip){
        vipList.push(cuurentGuest)
    }else{
        regularList.push(cuurentGuest)
    }
    cuurentGuest=input.shift()
}

let allGuests=vipList.concat(regularList);

for (const guest of input) {
    allGuests.splice(allGuests.indexOf(guest),1)
}
console.log(Object.keys(allGuests).length)
allGuests.forEach(guest=>console.log(guest))
}
