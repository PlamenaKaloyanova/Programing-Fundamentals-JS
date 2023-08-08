function companyUsers(input) {

    let result = {}

    input.forEach(line => {
        let [companyName, employeeId] = line.split(" -> ");
        if (!result.hasOwnProperty(companyName)) {
            result[companyName] = []
        }
        result[companyName].push(employeeId)

    });
    let sortedResult = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    sortedResult.forEach(el=>{
        const companyName=el[0];
        const allIds=el[1]
        console.log(companyName)
        let uniqueId=new Set(allIds);
        for (const id of uniqueId) {
            console.log(`-- ${id}`)
        }
    })



}
