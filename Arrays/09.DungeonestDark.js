function dungeonDark(arr){
  let dungen = arr[0].split('|');
  let health = 100;
  let coins = 0;
  let counterRooms = 0;
  let allCoins = 0;
 
  for(let i = 0; i < dungen.length;i++){
      let currentRoom = dungen[i].split(' ');
      let command = currentRoom[0];
      let num = Number(currentRoom[1]); // Може още тук да го направим число
      counterRooms++;
 
      if(command === 'potion'){
//Коригирана проверка за здравето
        if (health + num > 100) {
          num = 100 - health;
          health = 100;
        } else
        {
          health += num;
        }
        console.log(`You healed for ${num} hp.`);
        console.log(`Current health: ${health} hp.`);
 
               
      }else if(command === 'chest'){
        coins = Number(num);
        allCoins += Number(num);
        console.log(`You found ${coins} coins.`);
 
      }else{
        health -= Number(num);
        if(health > 0){
          console.log(`You slayed ${command}.`);
        }else{
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${counterRooms}`);
          //Може направо да прекъснем програмата
          return;
        }
       
      }           
  }
  // Като използваме return проврката се обесмисля
    console.log(`You've made it!`);
    console.log(`Coins: ${allCoins}`);
    console.log(`Health: ${health}`); 
}
