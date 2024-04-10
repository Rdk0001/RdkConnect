
$(function() {
    $('body').hide();
   window.addEventListener('message', function(event) {
       var data = event.data;
       if (data.action == 'showConnexion') {
           $('body').fadeIn(500);
       } else {
            $.post("https://RdkConnect/close", JSON.stringify({}))
            $("body").fadeOut(500);
       }
   });
});

$('#btn').click(function() {
    $.post("https://RdkConnect/close", JSON.stringify({}))
    $("body").fadeOut(500);
})

