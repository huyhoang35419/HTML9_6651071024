$(function(){
  function updateTheme(){
    const light = $("#themeToggle").is(":checked");
    $("body").toggleClass("dark-theme", !light);
    $("#themeStatus").text(light ? "On - Giao diện sáng" : "Off - Giao diện tối");
  }
  $("#themeToggle").on("change", updateTheme);
  updateTheme();
});
