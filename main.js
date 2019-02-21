$(".signup").click(function() {
  $(".login").attr('disabled', function(_, attr){ return !attr});
});

$(".login").click(function() {
  $(".signup").attr('disabled', function(_, attr){ return !attr});
});
