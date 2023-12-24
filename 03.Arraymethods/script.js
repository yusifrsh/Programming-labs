// const obj1 = [
//     {
//         id: 1,
//         name: 'Yusif',
//         surname: 'Shafiyev',
//         age: 28,
//         address: {
//             street: 'Koroghlu',
//             city: 'Sumgait',
//             country: 'Azerbaijan'
//         },
//     },
//     {
//         id: 2,
//         name: 'Rashad',
//         surname: 'Aslanli',
//         age: 19,
//         address: {
//             street: 'Nizmai',
//             city: 'Baku',
//             country: 'Azerbaijan'
//         },
//     },
//     {
//         id: 3,
//         name: 'Nihad',
//         surname: 'Kerimli',
//         age: 30,
//         address: {
//             street: 'Vurgun',
//             city: 'Baku',
//             country: 'Azerbaijan'
//         },
//     },
//     {
//         id: 4,
//         name: 'Emil',
//         surname: 'Aleskerov',
//         age: 35,
//         address: {
//             street: 'Nesimi',
//             city: 'Nakhchivan',
//             country: 'Azerbaijan'
//         },
//     },
//     {
//         id: 5,
//         name: 'Eli',
//         surname: 'Eliyev',
//         age: 25,
//         address: {
//             street: 'Hemze',
//             city: 'Baku',
//             country: 'Azerbaijan'
//         },
//     },
// ]

// let result = obj1.reduce((acc, item, index) => acc + index, 0)
// console.log(result);

// const result = obj1.sort((a, b) => a.age - b.age)
// console.log(result);

// const result2 = obj1.sort((a, b) => a.address.street.localeCompare(b.address.street))
// console.log(result2);

// const result = obj1.reverse()
// console.log(result);

// const result = obj1.filter((item, index) => item.name.length>=6)
// console.log(result);

// const result = obj1.find(a=> a.age > 25)
// console.log(result);

// const newArr = obj1.map((item,index)=> 'myAge '+item.age)
// console.log(newArr);

// let user = 'Yusif'
// let result = user.slice(0, 4).toLocaleLowerCase() + user.slice(-1).toLocaleUpperCase()
// console.log(result);
// let result2 = user.slice(1, 5).toLocaleUpperCase()
// console.log(result2);
// let result3 = user.slice(0, 2).toLocaleLowerCase() + user.slice(2, 3).toLocaleUpperCase() + user.slice(3, 5).toLocaleLowerCase()
// console.log(result3);
// let users = 'yusif shafiyev'
// let result4 = users.slice(0, 5).toLocaleLowerCase() + ' ' + users.slice(-8).toLocaleUpperCase()
// console.log(result4);
// let result5 = users.slice(0, 1).toUpperCase() + users.slice(1, 5).toLocaleLowerCase() + ' ' + users.slice(6, 7).toLocaleUpperCase() + users.slice(7).toLocaleLowerCase()
// console.log(result5);

// let user = 'yusif shafiyev'
// console.log(user.split('u'));
// console.log(user.split(','));
// console.log(user.split(''));
// console.log(user.split(' '));

// const studentsArr = ['Yusif', 'Rashad', 'Abbas', 'Nihad', 'Heyder', 'Aslan']
// const result = studentsArr.map(item => 'name: ' + item)
// console.log(result);
// console.log(result.join());

