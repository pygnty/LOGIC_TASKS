function average(array) {
    if (typeof array !== "object") return +array;  // если передали строку, число и тд. 
    let sum = 0;                                                // то возвращаем его же в виде числа
    for (let i in array) {
        sum += +array[i]; // унарный + для преобразования входящих данных в число
    }

    return (sum / array.length);
}

// console.log(average([-3, -7, "12", true, 3]))