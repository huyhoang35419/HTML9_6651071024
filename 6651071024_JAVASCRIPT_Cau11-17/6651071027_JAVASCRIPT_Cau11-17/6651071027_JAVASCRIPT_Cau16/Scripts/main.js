$(function(){
  $("#rowForm").on("submit", function(e){
    e.preventDefault();
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const birth = $("#birthdate").val();
    const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !email || !birth) { $("#message").text("Vui lòng nhập đầy đủ thông tin."); return; }
    if (!emailOK) { $("#message").text("Email không đúng định dạng."); return; }
    const date = new Date(birth + "T00:00:00");
    if (Number.isNaN(date.getTime()) || birth > new Date().toISOString().slice(0,10)) { $("#message").text("Ngày sinh không hợp lệ."); return; }
    const tr = $("<tr>");
    $("<td>").append($('<input type="checkbox" class="row-check" aria-label="Chọn hàng">')).appendTo(tr);
    $("<td>").text(name).appendTo(tr);
    $("<td>").text(email).appendTo(tr);
    $("<td>").text(birth).appendTo(tr);
    $("#peopleRows").append(tr);
    this.reset();
    $("#message").text("Đã thêm hàng thành công.");
  });
  $("#deleteRows").on("click", function(){
    const checked = $("#peopleRows .row-check:checked");
    if (!checked.length) { $("#message").text("Hãy chọn ít nhất một hàng cần xóa."); return; }
    checked.closest("tr").remove();
    $("#message").text("Đã xóa các hàng được chọn.");
  });
});
