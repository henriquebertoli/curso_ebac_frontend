$(document).ready(function () {
  $('#cpf').mask('000.000.000-00', { placeholder: '999.999.999-99' });

  $('#cep').mask('00000-000', { placeholder: '99999-999' });

  $('#tel').mask('(00)00000-0000'),
    { placeholder: '(99)-99999-8888' },
    $('form').validate({
      rules: {
        nomeCompleto: {
          required: true,
        },
      },
    });
});
