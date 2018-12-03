const DAYS_PER_YEAR = 365;

var fullName = prompt('Введите свою Фамилию');
var name = prompt('Введите свое имя');
var secondName = prompt('Введите свое Отчество');
var age = prompt('Введите ваш Возраст');
var gen = confirm("ваш пол - мужской?");
var gender, field4, different;
var retirement = 'вы на пенсии: нет';

if(gen == true){
  gender = 'Мужской';
} else {
  gender = 'Женский';
}

if(isNaN(parseInt(age)) || !isNaN(fullName) || !isNaN(name) ||
!isNaN(secondName) ) {
    alert('Вы должны правильно ввести данные');
}else {
  if(age < 25) {
    different = 25 - age;
    field4 = 'через ' + parseFloat(different)  + ' лет вам будет: 25';
  }else {
    different = age - 25;
    field4 = 'уже прошло ' + parseFloat(different) + ' лет как вам было: 25';
  }

  if(gen == true){
    if(age > 60){
      retirement = 'вы на пенсии: да';
    }
  } else {
    if(age > 55){
      retirement = 'вы на пенсии: да';
    }
  }

  alert('ваше ФИО: ' + fullName + ' ' + name + ' ' + secondName + '\n'
  + 'ваш возраст в годах: ' + age + '\n'
  + 'ваш возраст в днях: ' + DAYS_PER_YEAR * age + '\n'
  + field4 + '\n' + gender + '\n' + retirement);

}
