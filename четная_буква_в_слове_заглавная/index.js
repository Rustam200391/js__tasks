// каждая четная буква в строке была заглавной
// To make that every even letter in the string toUpperCase
// первое решение
function toWeirdCase(string) {
  return string.split(" ").map(mapWord).join(" ");
}
// аргумент функции строку - возвращаем строку которую сначала разбиваем на слова, затем образуем массив из полученных слов,букв

const mapWord = (word) => word.split("").map(mapChar).join("");
// каждое слово из массива передаем в вспомогательную функцию mapWord,в аргументах это слово,далее каждое слово делим по буквам(массив  из букв) и проходимся по каждой букве и передаем в функцию mapChair

const mapChar = (char, i) => (i % 2 === 0 ? char.toUpperCase() : char);
// проверяем этот символ на четность,если четный то заменяем заглавной буквой, а если нечетный то просто возвращаем этот символ

console.log(toWeirdCase("Hello world"));

// + и - решения
// +
//   -читабельность, краткость
//   - распределение ответственности
//   - тестируемость

// -
//   - сложность
//   - память

// второе решение

function toWeirCase(string) {
  let count = 0;
  let res = "";
  //используем две переменные

  //пройдемся по строке используя метод for
  for (let char of string) {
    //ищем пустые строки и если будет такая строка будем обнулять каунт,
    // т.к. счетчик будет сбрасываться для каждого нового слова
    if (char === " ") {
      count = 0;

      //в результат добавляем пробел
      res += " ";
      // если char равно пустая строка то мы ничего не возвращаем
      continue;
    }

    //определяем четный или нечетный символ
    if (count % 2 === 0) {
      // если делится на 2 без остатка(четное)
      // то нужно сделать его заглавным
      res += char.toUpperCase();
    } else {
      res += char;
    }

    //увеличиваем каунт
    count++;
  }

  return res;
  //возвращаем эту переменную
}

console.log(toWeirCase("Hello"));

//Третий пример при помощи регулярного выражения
function toWeiCase(string) {
  //ищем вхождение, после нахождения первую букву сделаем заглавной,
  // а вторую оставим как есть и заменин этой буквой исходную строку
  return string.replace(
    /(\w{1,2})/g,
    (m) => m[0].toUpperCase() + (m[1] ? m[1] : "")
  );
  //replace имеет два аргумента(что заменяем строка или регулярное выражение, на что заменяем)
  // во второй аргумент функцию передаем совпадения m-match это строка состоящая либо из одного либо из двух символов
  // первый символ с заглавной буквы,возвращаем второй символ если он существует то мы его возвращаем, а если нет то возвращаем пустую строку
}

//  /(\w-все символы латинского алфавита или [a-z])/
// определяем,что вхождение состояит из одной буквы или из двух{1,2}
// флаг /g говорит о том что вхождений может быть несколько
console.log(toWeiCase("Hello"));
