$(document).click('delete-data', function (event) {
  $(event.target).closest('tr').remove();
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
    <td>${name}</td>
    <td>${surname}</td>
    <td>${email}</td>
    <td class="text-center fw-bold">
    <button class="btn fw-bold delete-data p-0">X</button>
    </td></tr>`;

  $('tbody').append(tableData);
  $('#name').val('');
  $('#surname').val('');
  $('#email').val('');
}
