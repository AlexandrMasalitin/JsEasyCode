/*
 1. Составить предложение из вышестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 25, 1, команда"
 */

let numbers = [25, 1];
let project = "проект";
let team = `команда`;
let howMuch = "Сколько";
let sentence = 'нужно программистов чтобы сделать проект ?';

let task1 = howMuch + " " + sentence + numbers + " " + team;
console.log(task1);

/*
 2. Составьте предложение из представленного массива и выведите предложение
 в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью. Он не был больше ни телом, к которому рано или поздно ..."
 */
let array = ['Он не был больше ни телом, к которому рано или поздно',
	'он обнаружил', 'Так, когда Будда достиг Просветления',
	'...', 'что больше не ощущает себя мишенью'
];

let homeSentence = (array[2] + array[1] + array[4] + array[0] + array[3]);
console.log(homeSentence);
/*
 3. Добавьте свойста 4 новых свойства в объект используя квадратные скобки и точку.
 */


let myObj = {
	name: 'JavaScript'
};

myObj['inf'] = 'is a very interesting';
myObj['inf2'] = 'programming';
myObj['inf3'] = 'language';
myObj.inf4 = '!!!'
console.dir(myObj);
/*
 4. Используя метод .slice, добавте в недостающие символы в строку
 */

let sliceString = 'Ytube'; //
console.log(sliceString[0] + 'ou' + sliceString.charAt(1).toUpperCase(1) + sliceString.slice(2).toLowerCase(2));
// YouTube
/*
 5. Преобразуйте строку x, в максимально удобно читаемый вид
 */
let frameworks = [2, 'Angular', 'Angular2', 'React/Redux'];
let x = `google released new version ` + frameworks[1] + Math.floor(frameworks[0]) + ".\n" +
	"But real speed is " + `${frameworks[frameworks.length - 1]}`;
console.log(x);