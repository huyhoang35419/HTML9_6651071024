$(function(){
  $(".accordion-panel").hide();
  $(".accordion-title").attr("aria-expanded", "false");
  $(".accordion-title").first().addClass("open").attr("aria-expanded", "true").next(".accordion-panel").show();
  $(".accordion-title").on("click", function(){
    const wasOpen = $(this).hasClass("open");
    $(".accordion-title").removeClass("open").attr("aria-expanded", "false");
    $(".accordion-panel").stop(true, true).slideUp(180);
    if (!wasOpen) {
      $(this).addClass("open").attr("aria-expanded", "true");
      $(this).next(".accordion-panel").stop(true, true).slideDown(180);
    }
  });
});
