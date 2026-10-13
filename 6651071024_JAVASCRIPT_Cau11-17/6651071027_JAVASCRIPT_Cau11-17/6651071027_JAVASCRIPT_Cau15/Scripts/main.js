$(function(){
  $(".tab-content").hide();
  $("#tab1").show();
  $(".tab").on("click", function(){
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();
    $("#" + $(this).data("tab")).fadeIn(180);
  });
});
