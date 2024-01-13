// let fullName = 'Yusif Shafiyev Rashad'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// let result1 = fullName.split('')
// console.log(result1);
// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// let result2 = fullName.slice(6, 15) + fullName.slice(0, 5) + fullName.slice(14)
// console.log(result2);
// 3) Alinan yeni arrayi stringe cevirin(join)
// let result3 = result2.split('')
// console.log(result3);
// let result4 = result3.join('')
// console.log(result4);


// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
// let a = 0
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] === 5) {
//         a++
//     }
// }
// console.log(a);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
// let a = 0
// for (i = 0; i < arr.length; i++) {
//     a += arr[i]
// }
// console.log(a);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
// let result = arr.sort(function (a, b) {
//     return a - b
// })
// console.log(result);

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
// let b = 0
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] === Math.max(...arr)) {
//         b++
//     }
// }
// console.log(b);

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
// let myName = 'Yusif'
// let a = myName.length
// console.log(a);
// if (arr.includes(a)) {
//     console.log('Bu arrayda ' + a + ' reqemi var');
// } else {
//     console.log('Bu arrayda ' + a + ' reqemi yoxdur');
// }

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 == 2) {
//         console.log(arr[i]);
//         console.log(i);
//         break;
//     }
// }

//10) arraydaki en boyuk reqemin ilk indexini tapin
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] === Math.max(...arr)) {
//         console.log(i);
//         break;
//     }
// }

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] === 4) {
//         console.log(i);
//     }
// }

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
// let a = arr.lastIndexOf(5)
// console.log(a);
// let b= arr.indexOf(5)
// console.log(b);

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
// let result = arr.filter(number => number > 2)
// console.log(result);
// let result2 = arr.length - result.length
// console.log(result2);

//14) 7 reqeminin indexleri cemini tapin.
// let b = 0
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] === 7) {
//         b += i
//     }
// }
// console.log(b);



let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//Aşağıdakı hər bir taskı function icərisində yazın.

//QEYD Bu tasklarda arr2 istifade edilecekdir

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// function getresult(anyArr, herf) {
//     return anyArr.filter(item => item.name.startsWith(herf))
// }
// let result = getresult(arr2, 't')
// console.log(result);

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// function getresult(anyArr, herf1, herf2) {
//     return anyArr.filter(item => item.name.startsWith(herf1) && item.name.endsWith(herf2))
// }
// let result = getresult(arr2, 't', 't')
// console.log(result.length);

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// function getresult(anyArr, herf1, herf2) {
//     return anyArr.filter(item => item.name.startsWith(herf1) && item.name.endsWith(herf2))
// }
// let result = getresult(arr2, 't', 't')
// let cem = 0
// for (i = 0; i < result.length; i++) {
//     cem = cem + result[i].key
// }
// console.log(cem);

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// function getName(arr) {
//     return arr.map(item => {
//         if (item.name.endsWith('e')) {
//             item.name = 'SuperDev';
//         }
//         return item;
//     });
// }
// let resultArr = getName(arr2);
// console.log(resultArr);

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// function maxnameLength(arr) {
//     return arr.reduce((maxLength, obj) => {
//         const currentLength = obj.name.length;
//         return currentLength > maxLength ? currentLength : maxLength;
//     }, 0);
// }
// console.log(maxnameLength(arr2));
// for (let i=0; i<arr2.length; i++){
//     if (arr2[i].name.length === maxnameLength(arr2)){
//         console.log(arr2[i].key);
//     }
// }

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// function maxnameLength(arr) {
//     return arr.reduce((maxLength, obj) => {
//         const currentLength = obj.name.length;
//         return currentLength > maxLength ? currentLength : maxLength;
//     }, 0);
// }
// for (let i=0; i<arr2.length; i++){
//     if (arr2[i].name.length === maxnameLength(arr2)){
//         console.log(Math.pow(i,2));
//     }
// }


// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// function nameLength(arr, number) {
//     return arr.filter(item => item.name.length === number)
// }
// let result = nameLength(arr2, 4)
// console.log(result);

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// function maxKeyValue(arr) {
//     return arr.reduce((maxKey, obj) => {
//         const currentKey = obj.key;
//         return currentKey > maxKey ? currentKey : maxKey;
//     }, 0);
// }
// console.log(maxKeyValue(arr2));
// for (let i=0; i<arr2.length; i++){
//     if (arr2[i].key === maxKeyValue(arr2)){
//         console.log(arr2[i].name);
//     }
// }



// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// arr2.map((item, index) => {
//     if (item.name.indexOf('l') !== item.name.lastIndexOf('l')) {
//         console.log(index);
//     }
// })

// console.log('ulfat'.lastIndexOf('l'));







// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.