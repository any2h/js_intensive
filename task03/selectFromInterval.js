// Сложность O(n)
const selectFromInterval = (arr, a, b) => {
    if (!Array.isArray(arr) || arr.some(num => typeof num !== 'number') || typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Ошибка!')
    }

    let start, end

    if (a < b) {
        start = a
        end = b
    } else {
        start = b
        end = a
    }
    
    return arr.filter(num => num >= start && num <= end)
}
