let arr = [1, 1, 2, 2, 3, 3, 5, 5, 7, 7, 4]
let newObj = {}
for (let i = 0; i < arr.length; i++) {
    if (!newObj[arr[i]]) newObj[arr[i]] = 0
    newObj[arr[i]] = newObj[arr[i]] + 1
}

let values = Object.values(newObj)

values = values.sort((a, b) => {
    if (a > b) return 1
    else return -1
})

minValue = values[0]
// console.log(minValue)
// console.log(newObj)
let minKey

for (let key in newObj) {
    if (newObj[key] == minValue) {
        console.log(newObj[key])
        minKey = key
    }
}

// console.log(`Минимально встречающая число в массиве ${key}`)






