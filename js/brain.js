
// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
// arr.filter(el=>el!==removeValue)

const generateKey = (length, characters) => {
    text = '';
    for(let i = 0; i<length;i++) {
        text += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return text
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const answer = generateKey(20,characters);
console.log(answer)


