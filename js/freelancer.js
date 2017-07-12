

// Freelancer Theme JavaScript
(function($) {
    "use strict"; // Start of use strict

    $(document).on("touchstart", function(){ });
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });



    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })



    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });




    $(window).resize(function(){
      /*
      if($(window).width() < 1200){
        $('.fb-left').css("padding-left","");
        $('.fb-right').css("padding-right","");
      }else{
        $('.fb-left').css("padding-left","70px");
        $('.fb-right').css("padding-right","70px");
      }*/
    })


    delibe.render.start();


})(jQuery); // End of use strict


var MainWidth;
var LeftMenuWidth;
window.onload = function(){
    MainWidth = $(window).width();
    LeftMenuWidth = MainWidth - 100;
    $(".left-menu").css("display","block")
    closeNav();
}
function openNav() {
  $(".left-menu").css("margin-left","0px");
  $('.left-menu').css("width",LeftMenuWidth);
  $(".wrapper").css("width",MainWidth);
  $(".wrapper").css("margin-left",LeftMenuWidth);
//
}

function closeNav() {
  console.log("close");
  $(".left-menu").css("margin-left","-"+LeftMenuWidth+"px");
  $(".wrapper").css("margin-left","0px");
}

function detailTest(){
  $("#subMan").css("display","none");
  $(".itemlist").css("display","none");
  $("#testDetail").css("display","block");
  $("#back").css("display","block");
}


function backdetailTest(){
  $("#subMan").css("display","block");
  $(".itemlist").css("display","block");
  $("#testDetail").css("display","none");
  $("#back").css("display","none");
}



function filterMenu(menu){
  var filteredList = [];
  delibe.state.ItemList.getList().forEach(function(data){
      for(i=0;i<data.menu.length;i++){
        if(menu == data.menu[i]){
          filteredList.push(data)
        }
      }
  })
  delibe.render.run(
    {
      "selector": ".itemlist",
      "template":$("#itemlist").html(),
      "data":filteredList}
  );
}


function filterItem(type){
  var filteredList = [];
  delibe.state.ItemList.getList().forEach(function(data){
    if(type == data.type){
      filteredList.push(data)
    }
  })
  delibe.render.run(
    {
      "selector": ".itemlist",
      "template":$("#itemlist").html(),
      "data":filteredList}
  );
}
