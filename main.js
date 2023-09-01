$(document).ready(function () {
  $('button').on('click', function (e) {
    e.preventDefault();
    var tarefa = $('#tarefa').val();

    $('ul').append(`<li> ${tarefa} </li>`);

    $('li').on('click', function () {
      $(this).css('text-decoration', 'line-through');
    });

    formTarefa.reset();
  });
});
