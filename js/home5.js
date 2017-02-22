/*
1. Переместите 0 в конец массива, остальные числа должны остаться неизменными
 .сoncat();
example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => 
 ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
*/
var mass = [ 'a', 0, 0 , 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ]
let x = [];


// for(let e = 0; e < mass.length ; ) {
//  if(mass[e] === 0;) {
//   x.push(mass[e])
//   mass.splice(e, 1);
//  } else {
//   e++;
//  }
// };

let index = 0;
while(index < mass.length) {
  if(mass[index] === 0 ) {
  x.push(mass[index])
  mass.splice(index, 1);
 } else {
  index++;
 }
}

let newUser = mass.concat(x)
console.log(newUser)

var wer = ['a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9];


// console.log(wer.length);0



// 2. Верните сумму двух найменьших чисел в массиве
//   [10,20,30,1,31,11,10] => 11
//   [-1,0,25] => -1
//   [-4,-10,25,10] => -14
//   [0,200,10,25,15] => 10


var a = [10, 20, 30, 1, 31, 11, 10];
a.sort()
console.log(a[0] + a[1])


var b = [-1, 0, 25];
b.sort()
console.log(b[0] + b[1]);


var c = [-4, -10, 25, 10];
c.sort()
console.log(c[0] + c[1]);

var f = [0, 200, 10, 25, 15];
f.sort()
console.log(f[0] + f[1]);

/*
3. Напишите функцию которая меняет местами имя и фамилию
 => "McClane John"
  => "Schwarzenegger Arnold"
 => "Bond James"
 */

 function nameShuffler(name) {
  let newName= name.split(' ');
  return `${newName[1]} ${newName[0]}`
}

 console.log(nameShuffler('John McClane'));
 console.log(nameShuffler('Arnold Schwarzenegger'));
 console.log(nameShuffler('James Bond'));




// 4. Напишите функцию которая принимает массив с именами и возвращает массив
//    в котором первая буква становится заглавной
// capMe (['jo', 'nelson', 'jurie'])   // returns ['Jo', 'Nelson', 'Jurie']

function capMe(arr) {

let nameUpp = [];
  for(let i=0;i <arr.length;i++ ){
    nameUpp.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
  }
    return nameUpp
}

console.log(capMe(['jo', 'nelson', 'jurie'])); 
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));
//  capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']



// 1.ПРИЛОЖЕНИЯ ТЕЛЕФОННЫЙ СПРАВОЧНИК.
/*
 Представьте себе удобное для вас приложение телефонного справочника.
 Пропишите функционал который по вашему должен
 вот такой справочник содержать.
    Обязательные поля:
   - Имя
   - Фамилия
   - Частное лицо или Юридическое лицо
   - номера телефонов. Домашний,Рабочий, Личный
   - Аккаунты в социальных сетях
 */




/*
1. Создайте Массив который будет содержать 5 ваших друзей и 2-3 компании чьими услугами вы пользуетесь.
   - Доработать структуру пользователя согласно того как вы представляете себе
     телефонный справочник из первого домашнего задания
   - Создайте переменную Users
*/

//@SUPER
/*
 1. Найдите Число отсутствующее в заданной последовательности
  
 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 
 [4,6,8,10] => 2
  
 */

/*
 2. Напишите функция которая преобразовывает открывает скобки всех вложенных внутри массивов
    Необходимо реализовать рекурсивный фызов функции.
    Функция должна открывать любое количество внутренних массивов
   
   example:
    [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
    [25,10,[10,[15]]] => [25,10,10,15]
 
 */