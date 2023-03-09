// Write your solution below:
let small = ''
let medium = ''
let large = ''

function sortedBySize(str) {
    let lowerStr = str.toLowerCase()
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === 's') {
            small += lowerStr[i]
        } if (lowerStr[i] === 'm') {
            medium += lowerStr[i]
        } if (lowerStr[i] === 'l') {
            large += lowerStr[i]
        }
    } return small + medium + large
}

console.log(sortedBySize('LMSLSM'))