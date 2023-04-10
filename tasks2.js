//2.Напишите функцию, которая возвращает true, если первый переданный
//аргумент (строка) заканчивается вторым аргументом (также строкой). 
function atEnd(str1, str2){
  const reg = new RegExp('^[^]+?'+str2+'$');
  return reg.test(str1)
}
console.log(atEnd('abc', 'bc'));
console.log(atEnd('abc', 'd'));


//3.Напишите функцию, которая получает массив целых чисел и возвращает
//массив средних значений каждого целого числа и последователя, если он есть.

var numbers = [2, -2, 2, -2, 2];

function currentSums(numbers) {
   var result = numbers.filter(function(current, sum) {
      return result = ((current + sum) / 2);
   }, 0);

   console.log( result );
}

currentSums(numbers);



//4.Создайте функцию, которая принимает строку и возвращает количество
//(количество) гласных, содержащихся в ней.
function vowel_count(str1) {
  let vowel_list = 'aeiouAEIOU';
  let vcount = 0;
  
  for(let i = 0; i < str1.length ; i++) {
    if (vowel_list.indexOf(str1[i]) !== -1) {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count('Celebration'));
console.log(vowel_count('Palm'));


//5.Напишите функцию, чтобы получить копию объекта, где ключи стали
//значениями

function invert_key_value(obj) {
  var result = {};
  var keys = _keys(obj);
  for (var i = 0, length = keys.length; i < length; i++) {
    result[obj[keys[i]]] = keys[i];
  }
  return result;
}
function _keys(obj) 
{
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys.push(key);
  return keys;
}
function isObject(obj) 
{
  var type = typeof obj;
  return type ==='function' || type ==='object' && !!obj;
}
console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));



//7.Напишите функцию, которая поверхностно сравнивает два объекта.
//Ожидаемый результат: True если объекты идентичны, false если объекты разные
const object1 = {
    title: "Admin",
    id: 1
  };
  
  const object2 = {
    title: "Admin",
    id: 1
  };
  
  const object3 = {
    title: "Main Admin",
    id: 3
  };
  
  console.log(JSON.stringify(object1) === JSON.stringify(object2)); 
  console.log(JSON.stringify(object2) === JSON.stringify(object3)); 


