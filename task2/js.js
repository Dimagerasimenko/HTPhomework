const DAYS_PER_YEAR = 365;

var datasPerson = {
  fullName: prompt('Введите свою Фамилию'),
  name: prompt('Введите свое имя'),
  secondName: prompt('Введите свое Отчество'),
  age: prompt('Введите ваш Возраст'),
  gen: confirm("ваш пол - мужской?")
}

var gender, field4, different;
var retirement = 'вы на пенсии: нет';




if(datasPerson.gen == true){
  gender = 'Мужской';
} else {
  gender = 'Женский';
}

if(isNaN(parseInt(datasPerson.age)) || !isNaN(datasPerson.fullName) || !isNaN(datasPerson.name) ||
!isNaN(datasPerson.secondName) ) {
    alert('Вы должны правильно ввести данные');
}else {
  if(datasPerson.age < 25) {
    different = 25 - datasPerson.age;
    field4 = 'через ' + parseFloat(different)  + ' лет вам будет: 25';
  }else {
    different = datasPerson.age - 25;
    field4 = 'уже прошло ' + parseFloat(different) + ' лет как вам было: 25';
  }

  if(datasPerson.gen == true){
    if(datasPerson.age > 60){
      retirement = 'вы на пенсии: да';
    }
  } else {
    if(datasPerson.age > 55){
      retirement = 'вы на пенсии: да';
    }
  }

  alert('ваше ФИО: ' + datasPerson.fullName + ' ' + name + ' ' + datasPerson.secondName + '\n'
  + 'ваш возраст в годах: ' + datasPerson.age + '\n'
  + 'ваш возраст в днях: ' + DAYS_PER_YEAR * datasPerson.age + '\n'
  + field4 + '\n' + gender + '\n' + retirement);
}

//task2

var numberA = parseInt(prompt('Введите число А:'));
var numberB = parseInt(prompt('Введите число В:'));
var sum = 0;

var sumNumberAandB = function (numberA, numberB) {


    if (numberA > numberB) {
        var c = numberA - numberB;
        for (var i = 0; i <= c; i++){
            sum = sum + numberB + i;
        } return alert('Total: ' + sum + ' |number of symbols: ' + i);
    } else {
        alert('Ошибка: Число А должно быть больше числа В');
    }

}

console.log(sumNumberAandB(numberA, numberB));



var N = prompt('Введите  N - количество элементов: ');
var array = [];


var dataInput = function (N) {
    for (var i = 0; i < N; i++) {
        array[i] = prompt('Элемент № ');
        // записали все введенные числа в массив
    }

    var a = prompt('введите искомый элемент');
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == a) {
            count++;
        }
    }
    return [alert('Совпадение числа ' + a + ' равно: ' + count), alert('Введенные значения: ' + array)];
    }

dataInput(N);