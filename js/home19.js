/*
Даны строки разделенные различным образом,
верните строки разделенные / или _, в нижнем регистре
solution("ActiveModel::Errors") => active_model/errors"
solution("HelloHowAreYou") => "hello_how_are_you"
solutio("MyNAMEIsBOND-JamesBond") => my_name_is_bond_james_bond"
solution("MAINCompany::BEST-MAINUser") => "main_company/best_main_user"
*/
function solution(str) {

  function replaceMatches(string, arg) {
    if (arg) {
      arg.forEach(elem => {
        string = string.replace(elem, '_' + elem.toLowerCase());
      });
    }
    return string
  }

  let myStr = str.replace(/::/, '/').replace('-', '_');
  let part = myStr.match(/[A-Z]{1}[a-z]/g);
  myStr = replaceMatches(myStr, part);
  part = myStr.match(/[A-Z]{2,}/g);
  myStr = replaceMatches(myStr, part);
  myStr = myStr.replace('/_', '/').replace('__', '_');
  if (myStr[0] === '_') {
    myStr = myStr.slice(1);
  }

  console.log(myStr);
}
solution("ActiveModel::Errors");//active_model/errors
solution("MAINCompany::BEST-MAINUser");//"main_company/best_main_user"
solution("HelloHowAreYou") //"hello_how_are_you"
solution("MyNAMEIsBOND-JamesBond")// => my_name_is_bond_james_bond"
/*
*/
/*
По приложению phone-book;
1. Для каждой страницы у вас должен быть класс с одноименным названием в отдельном файле
2. Каждый класс должен содержать методы render() - который рендерит всю страницу и методы
 header(), main()
3. Удалить jquery.js и bootstrap.js с проекта
-> Закончить keypad с прошлого занятия, добавить функционал для удаления номера
Сортировка таблицы!
Визуализировать страницы Edit contact, User, Add User;
/*
Подготовка к занятию в среду.
Windows:
  Установите все node.js скачать отсюда -> https://nodejs.org/en/
  Скачайте последнюю 7.5 версию
  Для проверки установки в консоле введите "node -v" (без кавычек) отобразит версию node.js
Linux
 sudo apt install npm // установить менеджер пакетов npm
 npm i -g n // установить пакет для установки node.js
 sudo n latest // установить последнюю версию node.js
*/
/*
Сделайте таблицу 5x5
При клике на элемент, изменяйте цвет у элемента на красный.
Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
Пример 3х3:
[]|[]|[]
[]|[]|[]
[]|[]|[]
кликаем сюда ->[]|[]|[]
               []|[]|[]
               []|[]|[x] <- загорается тут
               
                []|[]|[]
кликаем сюда -> []|[]|[x] <- загорается тут
                []|[]|[x]
*/














// @SUPER-FrontEnd
/*
У вас есть 3 блока смотри events.html при mousedown и движении мышки нужно сделать
ресайз одного блока.
Подсказка - событие необходимо повесить на доп. элемент .resize
*/