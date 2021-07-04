function isSorted(array) {
    if (typeof array !== "object") return true;  // если передали строку, число и тд., то возвращаем true 
    for (let i = 0; i < array.length - 1; i++) {
        if (+array[i] > +array[i + 1]) {
            return false;
        }
    }
    return true;
}

// console.log(isSorted(["11", "22", "33", "44"]))