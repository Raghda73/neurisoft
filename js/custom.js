$(function(){
  'use strict';
       //Featured work shuffle images
       $('.portfolio ul li').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active');
      if($(this).data('class')==='all'){
        $('.portfolio-grid .col-md').css('opacity', 1);
      } else{
        $('.portfolio-grid .col-md').css('opacity','0.1');
        $($(this).data('class')).parent().css('opacity', 1);
    
      }
      });




  var vid = document.getElementById("myVideo"); 
  var join = document.getElementById("join-us");  
  $('.play-vid').click(function(){
   
    $('.modal-video').show();
    $('.modal-video').addClass('animated fadeInDown slow'); 
});

$('.close').click(function(){
   
  $('.modal').hide();
  vid.pause();
});


$('.close').mouseover(function(){
  $(this).addClass('animated  wobble'); 
});
});



$('.get').click(function(){
   
  $('#join-us ').show();
  $('#join-us').addClass('animated fadeInDown slow'); 
});
