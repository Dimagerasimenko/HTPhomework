var alphabet = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
var userString = prompt('Введите строку').toLowerCase();

var compareString = function () {
    var count = 0;
    for (var i = 0; i < userString.length; i++) {
        if (alphabet.includes(userString.charAt(i))) {
            count++;
        }
    }
    return count;
}

console.log('количество гласных в введенной строке ' + compareString() + ' Введенная строка ' + userString);







