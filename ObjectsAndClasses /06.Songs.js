function demo(array) {
    let numberOfSongs = Number(array.shift());
    let typeList1 = array.pop();
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time
        }
       
    }
    for (let i = 0; i < numberOfSongs; i++) {
        let currentSong = array[i].split("_");
        let typeList, name, time;
        [typeList, name, time] = [currentSong[0], currentSong[1], currentSong[2]];
        if (typeList1 === typeList) {
            let song = new Song(typeList, name, time);
            console.log(song.name)
        } else if (typeList1 === "all") {
            let song = new Song(typeList, name, time);
            console.log(`${song.name}`)
        }
   

    }

}
