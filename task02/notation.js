const notation = () => {
    const a = Number(prompt('Введите число'))
    const b = Number(prompt('Введите степень (от 2 до 36)'))

    if (a >= 0 && b >= 2 && b <= 36) {
        const result = a.toString(b)
        console.log(result)
    } else {
        alert('Некорректный ввод!')
        return
    }
}

notation()
