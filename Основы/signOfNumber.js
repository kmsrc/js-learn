﻿/* Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
*/
'use strict';

let num = prompt("Введите число", "");

if (num < 0) {alert(-1);} 
else if (num == 0) {alert(0);}
else {alert(1);}