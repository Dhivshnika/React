function Occurance(array) {
    array.sort();
    let count = 0;
    let num;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                count++;
            }
        }
        if (array[i] != num) {
            console.log(array[i] + " " + count);
            num = array[i];
        }
        count = 0;
    }
}
Occurance([1, 2, 3, 1, 2, 3, 5, 5, 6, 1]);