/*
Давайте напишем функцию ask(question, yes, no) с тремя параметрами:

question
Текст вопроса
yes
Функция, которая будет вызываться, если ответ будет «Yes»
no
Функция, которая будет вызываться, если ответ будет «No»
Наша функция должна задать вопрос question и, в зависимости от того, как ответит пользователь, вызвать yes() или no()
*/
'use strict';
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);

// анонимные функции
/*
ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/