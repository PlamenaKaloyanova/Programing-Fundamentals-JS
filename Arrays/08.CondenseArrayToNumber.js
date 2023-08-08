function condenseArrayToNumber(nums) {
    if (nums.length === 1) {
        console.log(`${nums[0]}`)
    }

    let condensed = []
    while (nums.length > 1) {
        condensed = [];
        for (i = 0; i < nums.length - 1; i++) {

            condensed.push((Number(nums[i]) + (Number(nums[i + 1]))))

        }
        nums = condensed;
    }

    console.log(condensed.join())
}
