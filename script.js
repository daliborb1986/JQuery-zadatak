$('tbody').click('delete-data', function (event) {
  $(event.target).parent('td').parent('tr').detach();
});

$('#add-employee-form').click(function () {
  $('#form-data').removeClass('d-none');
});

$('#add-employee-button').click(addEmployee);

function addEmployee() {
  var name = $('#name').val();
  var surname = $('#surname').val();
  var email = $('#email').val();

  var tableData = `<tr>
    <td class="employee-data">${name}</td>
    <td class="employee-data">${surname}</td>
    <td class="employee-data">${email}</td>
    <td class="text-center fw-bold">
    <button class="btn fw-bold delete-data p-0">X</button>
    </td></tr>`;

  $('tbody').append(tableData);
  $('#name').val('');
  $('#surname').val('');
  $('#email').val('');
  $('#form-data').addClass('d-none');
}
$(document).on('click', '.employee-data', function (e) {
  var newValue = prompt('Izmena:');
  $(this).text(newValue);
});
