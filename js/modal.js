$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  var find = $('.find');
  var tmodal = $('#top-modal');
  var tclose = $('#close-top');


  button.on('click',function(){
      tmodal.addClass('modal_active');
  });



  find.on('click',function(event){
      event.preventDefault();
      modal.addClass('modal_active');
      var target = $(this).attr('data-target');
      $('.modal-content').load(target+".html");
  });




  tclose.on('click', function(){
    tmodal.removeClass('modal_active');
});

  

  close.on('click', function(){
      modal.removeClass('modal_active');
  });
});