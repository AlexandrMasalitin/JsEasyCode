/*
TASK 0
Проверьте 2 строки и определите изоморфные ли они.
Две строки являются изоморфеыми если все их символы s, могут быть заменены t.
Все символы одной строки могут быть заменены такими же символами другой строки, независимо от 
порядка символов.
Given two strings, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character but a character may map to itself."
arguments ["egg", "add"] => expected true
arguments ["foo", "bar"] => expected false
arguments ["paper", "title"] => expected true
arguments ["ca", "ab"] => expected true
arguments ["aa", "bb"] => expected true
arguments ["aedor", "eiruw"] => expected true
*/

function solution(arr) {
  function transformArray(arr) {
    let checkString = '';
    arr.forEach((element, index) => {
      arr.slice(index + 1).forEach(elem => {
        if (elem) {
          element === elem ? checkString += 'a' : checkString += 'b';
        }
      });
    });
    return checkString;
  }
  let arr1 = arr[0].split('');
  let arr2 = arr[1].split('');
  let newStr1 = transformArray(arr1);
  let newStr2 = transformArray(arr2);
  return newStr1 === newStr2 ? true : false

}

console.log(solution(["egg", "add"]));
console.log(solution(["foo", "bar"]));
console.log(solution(["paper", "title"]));
console.log(solution(["ca", "ab"]));
console.log(solution(["aa", "bb"]));
console.log(solution(["aedor", "eiruw"]));
/*
MVC - добавьте верстку любую. gh-pages
@Super-Front-END => рекомендую взять отсюда http://todomvc.com/
1. Переместите dataBase в localStorage и инициализацию View сделайте из localStorage;
2. Добавьте возмозжность удаления элемента следуя паттерну MVC
3. Добавьте возможность редактирования элемента СЛЕДУЯ ПРИНЦИПУ MVC.
*
// @SUPER Front-END
/*
Phone-book
https://learn.javascript.ru/screencast/webpack Посмотрите Часть 1, Часть 2
Добавьте сборку javascript используйте babel и минификацию
для вашего phone-book
*/