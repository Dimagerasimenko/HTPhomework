
/*var N = +prompt('Введите  N - количество элементов: ');
var array = [];


var dataInput = function (N) {
    for (var i = 0; i < N; i++) {
        array[i] = +prompt('Элемент № ');
        // записали все введенные числа в массив
    }

    var a = +prompt('введите искомый элемент');
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == a) {
            count++;
        }
    }
    // Сортировка к третьему заданию
    function sort(array) {
        var sortArray = array.length-1;
        for (var i = 0; i < sortArray; i++){
            for (var k = 0; k < sortArray - i; k++){
                if (array[k] > array[k+1]){
                    var tempValue = array[k+1];
                    array[k+1] = array[k];
                    array[k] = tempValue;
                }
            }
        }
        return array;
    }

    return [alert('Совпадение числа ' + a + ' равно: ' + count), alert('Введенные значения: ' + array), alert('Отсортированные введенные значения ' +
    sort(array))];
    }

dataInput(N);*/