let element = prompt('Type the list of commodity you want: ', '');
const array = [];

array.push(element);

while(element) {
    element = prompt('Type the list of commodity you want: ', '');
    if(element) {
        array.push(element);
    }
    console.log(array)
}

array.sort()
console.log(array)
array.splice(2,3);
console.log(array);

