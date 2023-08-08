function race(raceDataArray) {


    let racersArray = raceDataArray.shift().split(", ");
    let raceObject = {};

    const patternName = /[A-Za-z]+/g;
    const patternDistance = /[0-9]+/g

    let command = raceDataArray.shift();
    while (command !== 'end of race') {
        const currentName = command.match(patternName).join("");
        const currentDistance = command.match(patternDistance).join("");

        if (racersArray.includes(currentName)) {
            let distance = 0;
            for (const digit of currentDistance) {
                distance += Number(digit)
            }
            if (!raceObject.hasOwnProperty(currentName)) {
                raceObject[currentName] = distance
            } else {
                raceObject[currentName] += distance
            }
        }
        command = raceDataArray.shift()
    }

    let sortedRacers = Object.entries(raceObject).sort((a, b) => b[1] - a[1]);
    const first = sortedRacers[0][0];
    const second = sortedRacers[1][0];
    const third = sortedRacers[2][0];

    console.log(`1st place: ${first}`);
    console.log(`2nd place: ${second}`);
    console.log(`3rd place: ${third}`)


}
