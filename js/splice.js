//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const removeElement_1 = (array, item) => {
    let index = array.indexOf(item);
    if(index > -1) {
        array.splice(index,1)
        return array
    }
    
}

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(removeElement_1(array, 6 ))


const removeElement_2 = (arr, item) => {
    let index = arr.filter(el => el!==item);
    return index
}

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(removeElement_2(array, 6 ))
















