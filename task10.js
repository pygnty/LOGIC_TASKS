// 3. Задача на Map, Set, WeakMap, WeakSet. Есть массив объектов. У каждого объекта есть id 
// const arr = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }].
// В массиве могут быть дубликаты. 
// Написать функцию, которая будет удалять дубликаты из массива. 
// Использовать вышеперечисленные инструменты для решения задачи. 
// В дополнение к этому - разрешается использовать любые средства ES6.

const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }];

function filterDuplicates(arr) {
    let map = new Map();
    for (let elem of arr) {
        map.set(elem.id, elem);
    }
    return Array.from(map.values());
}

// console.log(filterDuplicates(arr)) // [{ id: 1 }, { id: 2 }, { id: 3 }]