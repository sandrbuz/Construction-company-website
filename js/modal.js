$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  var find = $('.find');

  button.on('click',function(){
      modal.addClass('modal_active');
  });



  find.on('click',function(event){
      event.preventDefault();
      modal.addClass('modal_active');
  });
  



  close.on('click', function(){
      modal.removeClass('modal_active');
  });
});