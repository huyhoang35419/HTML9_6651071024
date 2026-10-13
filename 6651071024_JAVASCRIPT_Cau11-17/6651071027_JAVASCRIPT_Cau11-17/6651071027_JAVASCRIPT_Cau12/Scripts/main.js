$(function(){
  function toggleBox(group, box, input) {
    const yes = $('input[name="' + group + '"]:checked').val() === "yes";
    $(box).toggle(yes);
    if (!yes) $(input).val("");
  }
  $('input[name="passport"]').on("change", function(){ toggleBox("passport", "#passportBox", "#passportNumber"); });
  $('input[name="credit"]').on("change", function(){ toggleBox("credit", "#creditBox", "#creditNumber"); });
  $("#passportBox, #creditBox").hide();
});
