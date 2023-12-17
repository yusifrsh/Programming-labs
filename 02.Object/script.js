// const obj1 = {
//     id: 122,
//     name: 'Yusif',
//     surname: 'Sahfiyev',
//     age: 28,
//     address: {
//         street: 'Sulh kuch.',
//         city: 'Sumgait',
//     },
//     isAdmin: true,
//     position: 'Azerbaijan',
//     info: {
//         uni: 'ASOIU',
//         qualification: 'Cyber Security Specialist',
//     }
// }

// console.log(obj1.id);
// console.log(obj1.name);
// console.log(obj1.surname);
// console.log(obj1.address);

// obj1.name = 'Rashad'
// obj1.surname = 'Aslanli'
// obj1.age = 18
// obj1.address.street = '7 mkr'
// obj1.info.qualification = 'IT'
// console.log(obj1.age * obj1.id);
// console.log(obj1.age + obj1.id);
// delete obj1.age
// delete obj1.position
// console.log(obj1.age + obj1.id);

// const arr = ['salam',5,true,'',undefined,null,5131651]
// console.log(arr[1]);
// console.log(arr[arr.length-2]);
// console.log(arr.at(-2));
// console.log(arr);

// const arr1 = [
//     {
//         id: 10,
//         name: '11',
//         surname: '12',
//         age: 13
//     },
//     {
//         id: 20,
//         name: '21',
//         surname: '22',
//         age: 23
//     },
//     {
//         id: 30,
//         name: '31',
//         surname: '32',
//         age: 33
//     },
//     {
//         id: 40,
//         name: '11',
//         surname: '42',
//         age: 43
//     }
// ]

// arr1.push(true)
// arr1.push('Salam')
// arr1.push('Sagol')
// arr1.push(444)
// arr1.pop()
// arr1.pop()
// arr1.shift()
// arr1.unshift(555)
// arr1.map((item,index) => console.log(item.name));
// arr1.map((item,index) => console.log(item.age));
// arr1.map((item,index) => console.log(item.surname));
// arr1.map((item,index) => console.log(item.id));
// arr1.map((item, index) => console.log(index + item.id));

// const result = arr1.filter(item => item.age >= 22 && item.age <= 25)
// console.log(result);

// let sum = 1
// const result = arr1.map(item => sum = sum * item.id)
// console.log(result);
// console.log(sum);
// let sub = 0
// const result2 = arr1.map((item, index) => sub = sub - index)
// console.log(result2);
// console.log(sub);

// const result3 = arr1.findLast(item => item.name==='11')
// console.log(result3);

// const result4 = arr1.find(item => item.name==='11')
// console.log(result4);