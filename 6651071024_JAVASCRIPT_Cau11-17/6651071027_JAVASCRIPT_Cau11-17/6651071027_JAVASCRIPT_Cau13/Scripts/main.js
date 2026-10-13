$(function(){
  $("#togglePassword").on("click", function(){
    const input = $("#password");
    const show = input.attr("type") === "password";
    input.attr("type", show ? "text" : "password");
    $(this).attr("aria-label", show ? "Ẩn mật khẩu" : "Hiện mật khẩu");
  });
});
