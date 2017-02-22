/*
1. Напишите функцию которая принимает в качестве аргумента массив
и элемент массива и добавляет элемент в конец массива
*/

let arr = [];

function addToArray(arr, newElem) {
  arr.push(newElem);

  //1. Найти последний индекс в массиве
  //2. Записать в последний индекс новый элемент
}

addToArray(arr, 35);
console.log(arr); // [35]
addToArray(arr, 35);
console.log(arr); // [35,35]
addToArray(arr, { functionTypes: ['functionExpression', 'functionDeclaration'] });
console.log(arr); // [35, 35, { functionTypes: ['functionExpression', 'functionDeclaration'] }]



/*
2. Напишите функцию которая получает 3 параметра и возвращает объект типа: 
    
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }
    


    
*/
function simpleObjectGenerator2(param1, param2, param3) {
     
  let x =   {argument1: param1,
             argument2 : param2,
             argument3 : param3}
     
   
      return x;
};



console.log(simpleObjectGenerator2('protocol', { url: '22' }, 8000));



/* {
   argument1:'protocol',
   argument2:{url:'22'},
   argument3:8000
}*/

var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];
function simpleObjectGenerator(param1, param2, param3){
let x = {argument1: param1,
        argument2: param2,
        argument3: param3

        };

  return x;
};
console.log(userNames);
console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));
/* {
 argument1:'77',
 argument2:[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
 argument3:PRIVET KAK DELA CHTO NOVOGO
 }*/

///////////////////////////////////////////////
/*
3.  Напишите функцию которая принимает 3 аргумента, третий аргумент - это объект.
    
    Функция создает объект где ключ это первый аргумент, а значение - второй аргумент
    и добавляет свойство "name" из объекта и возвращает данный новый объект
*/

var myName = { name: 'Oleg' };

function addNameToUser(param1, param2, param3){
  let x = {}
  x['name'] = param3.name;
  x[param1] = param2;

  return x; 
}

console.log(addNameToUser('family', '%Lustenko%', myName));
/*
{name:'Oleg', family:'%Lustenko%'}
*/
//console.log(myName);
/*
{name:'Oleg'}
*/
/*
-> @@ SUPER
  Напишите функцию, которая будет возвращать 'Fizz' если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5, 'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

function fizzBuzz(num) {
  let str = '';
  if (num % 3 ==0 ){
    str = str + 'Fizz';
  }
  if (num % 5 ==0 ){
    str = str + 'Buzz';
  }
  if (!str.length){
    return num;
  }
return str;
};

fizzBuzz(1); // 1
fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
    // ...
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'
fizzBuzz();



