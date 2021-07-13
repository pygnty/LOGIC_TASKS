// 2. Задача на рефакторинг и деструктуризацию. Есть код:
// const sarah = {
//   name: 'Sarah',
//   job: {
//     name: 'Andersen',
//     hiringDate: '23.07.2020'
//   }
// }

// function printJobName(user) {
//   console.log(user.job.name);
// }

// printJobName(sarah);

// необходимо осуществить рефакторинг 
// используя деструктуризацию над функцией без потери функциональности.

const sarah = {
    name: 'Sarah',
    job: {
        name: 'Andersen',
        hiringDate: '23.07.2020'
    }
}

function printJobName({ job: { name } }) {
    console.log(name);
}

printJobName(sarah);