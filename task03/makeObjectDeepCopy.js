// Сложность O(n)
const makeObjectDeepCopy = (obj) => {
    if (typeof obj !== "object" || obj === null) {
        return obj
    }
  
    const objCopy = obj instanceof Array ? [] : {}
  
    for (let key in obj) {
        objCopy[key] = makeObjectDeepCopy(obj[key])
    }
  
    return objCopy
}
