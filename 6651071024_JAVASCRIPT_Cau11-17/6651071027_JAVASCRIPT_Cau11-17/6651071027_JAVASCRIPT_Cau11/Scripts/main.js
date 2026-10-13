$(function(){
  $("#fileInput").on("change", function(){
    const file = this.files[0];
    if (!file) { $("#fileInfo").text("Chưa chọn file."); return; }
    const name = file.name;
    const dot = name.lastIndexOf(".");
    const ext = dot > 0 ? name.substring(dot + 1) : "Không có phần mở rộng";
    $("#fileInfo").html("<p><b>Tên file:</b> " + $("<div>").text(name).html() + "</p><p><b>Phần mở rộng:</b> " + $("<div>").text(ext).html() + "</p>");
  });
});
