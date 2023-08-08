function demo(input){

    let meetingList={};
    input.forEach(line => {
        let [weekday,name]=line.split(" ");
        if(!meetingList.hasOwnProperty(weekday)){
            meetingList[weekday]=name;
            console.log(`Scheduled for ${weekday}`)
        }else{
            console.log(`Conflict on ${weekday}!`)
        }
    });
for (const key in meetingList) {
    console.log(`${key} -> ${meetingList[key]}`)
}
}
