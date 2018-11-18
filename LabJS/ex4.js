let array1 = [1,6,23];

function reverse(array) {
    let table = [];
    for (let i = array.length - 1; i >= 0; i--){
         table.push(array[i]);
    }
    console.log(table);
    return table;
}

const a = reverse(array1);