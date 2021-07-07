// 3.  Написать функцию, которая принимает строку, а на выходе возвращает ее зеркальное отображение. 
// Не использовать встроенные методы в JS, разрешается только языковые конструкции (for, while и т.д.).

function Reverse(str) {
    if (typeof str != "string") str = String(str);
    let char;
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

// console.log(Reverse("string"));