const calculation = () => {
    const a = Number(prompt('Введите число 1'))
    
    if (isNaN(a)) {
        alert('Некорректный ввод!')
        return
    }

    const b = Number(prompt('Введите число 2'))

    if (isNaN(b)) {
        alert('Некорректный ввод!')
        return
    }

    const sum = a + b
    const quotient = a / b

    console.log(`Ответ: ${sum}, ${quotient}`)
}

calculation()
