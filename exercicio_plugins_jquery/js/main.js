$(document).ready(function () {
  $('form').css('color', '#0769ad');

  $('#c_p_fisica').mask('000.000.000-00', { placeholder: '000.000.000-00' });

  $('#cep').mask('00000-000', { placeholder: '99999-999' });

  $('#tel').mask('(00)00000-0000', { placeholder: '(99)99999-8888' });
});
