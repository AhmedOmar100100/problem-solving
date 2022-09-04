function sum(numbers) {
    var sum = 0; //10
    // [1,2,3,4] =>numbers = 4
    for (var counter = 0; counter < numbers.length; counter++) {
        sum = sum + numbers[counter]
    }

    return sum;

}



console.log(sum([]))