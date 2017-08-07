
(function($) {
    "use strict"; // Start of use strict
    try{
      $('img').lazyload();
    }catch(e){

    }
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
    try{
      $('body').scrollspy({
          target: '.navbar-fixed-top',
          offset: 51
      });
    }
    catch(e){

    }

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });



    // Offset for Main Navigation
    try{
      $('#mainNav').affix({
          offset: {
              top: 100
          }
      })
    }catch(e){

    }



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



})(jQuery); // End of use strict


var MainWidth;
var LeftMenuWidth;
window.onload = function(){

    try{
      $('img').lazyload();
    }catch(e){

    }

    try{
      $('body').scrollspy({
          target: '.navbar-fixed-top',
          offset: 51
      });
    }
    catch(e){

    }

    try{
      $('#mainNav').affix({
          offset: {
              top: 100
          }
      })
    }catch(e){

    }
    backcontroller.render.start();

    MainWidth = $(window).width();
    LeftMenuWidth = MainWidth - 100;
    $(".left-menu").css("display","block")
    closeNav();







    //
}



function openNav() {
  $(".left-menu").css("transition", "0.5s");
  $(".left-menu").css("margin-left","0");
  $('.left-menu').css("width","85%");
  LeftMenuWidth = $('.left-menu').css("width");
  $(".wrapper").css("width",MainWidth);
  $(".wrapper").css("margin-left",LeftMenuWidth);
  $(".wrapper").addClass("dimmed");
  setTimeout(function(){
    $(".wrapper").attr("onclick","closeNav()");
  },1000);
//
}

function closeNav() {
  $(".wrapper").removeClass("dimmed");
  $(".left-menu").css("margin-left","-85%");
  $(".wrapper").css("margin-left","0px");
  $(".wrapper").attr("onclick","")
}

function GoDetail(){
  location.href="./detail.html";
//  closeNav();
//  displayPage("none","none","block");
}

function GoStore(){
location.href="./store.html";
//  closeNav();
//  displayPage("none","block","none");
}

function GoMain(){
  location.href="./index.html";
//  closeNav();
//  displayPage("block","none","none");

}

function displayPage(main,store,detail){
    $("#MainPage").css("display",main);
    $("#StorePage").css("display",store);
    $("#DetailPage").css("display",detail);
}


function filterMenu(menu){
  var filteredList = [];
  backcontroller.state.ItemList.getList().forEach(function(data){
      for(i=0;i<data.menu.length;i++){
        if(menu == data.menu[i]){
          filteredList.push(data)
        }
      }
  })
  backcontroller.render.run(
    {
      "selector": ".StoreItemList",
      "template":$("#StoreItemList").html(),
      "data":filteredList}
  );
}


function filterItem(type){
  var filteredList = [];
  backcontroller.state.ItemList.getList().forEach(function(data){
    if(type == data.type){
      filteredList.push(data)
    }
  })
  backcontroller.render.run(
    {
      "selector": ".StoreItemList",
      "template":$("#StoreItemList").html(),
      "data":filteredList
    }
  );
}
