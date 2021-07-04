function minAndMax(array) {
    if (typeof array !== "object") return { min: +array, max: +array }; // если передали строку, число и тд. 
    let min = +Infinity, max = -Infinity;                               // то возвращаем его же в виде числа
    for (let i in array) {
        if (+array[i] < min) { // унарный + для преобразования входящих данных в число
            min = +array[i];
        }

        if (+array[i] > max) {
            max = +array[i];
        }
    }

    return { min, max };
}

// console.log(minAndMax([-3, -7, "12", true, 3]))