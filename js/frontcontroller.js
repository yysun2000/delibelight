


// Freelancer Theme JavaScript
(function($) {
    "use strict"; // Start of use strict

    $('img').lazyload();
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



    backcontroller.render.start();

        DataToTemplate();
})(jQuery); // End of use strict


var MainWidth;
var LeftMenuWidth;
window.onload = function(){


    MainWidth = $(window).width();
    LeftMenuWidth = MainWidth - 100;
    $(".left-menu").css("display","block")
    closeNav();







    //
}



function openNav() {
  $(".left-menu").css("transition", "0.5s");
  $(".left-menu").css("margin-left","0px");
  $('.left-menu').css("width",LeftMenuWidth);
  $(".wrapper").css("width",MainWidth);
  $(".wrapper").css("margin-left",LeftMenuWidth);
  setTimeout(function(){
    $(".wrapper").attr("onclick","closeNav()");
  },1000);
//
}

function closeNav() {
  $(".left-menu").css("margin-left","-"+LeftMenuWidth+"px");
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


function DataToTemplate(){
  var API_URL = "http://0sun.net/pub/intop/yc/api/";
  var connect = backcontroller.DB.dataTotemplate;
  var DataTo = backcontroller.DB.method;

  connect(API_URL+"category.php")("getCategory",function(data){

    DataTo.LeftMenuList(data);
    setTimeout(function(){
      $(".list-mainmenu > li > div").click(function(){
        if($(this).siblings().css("display")=="none"){
          $(this).attr("class","active");
          $(this).siblings().show();
        }else{
          $(this).removeAttr("class");
          $(this).siblings().hide();
        }
      })
    },100);
  });


  if(document.querySelector("#MainPage")){
    connect(API_URL+"model.php")("getFocus",function(data){
      DataTo.FollowList(data);
      connect(API_URL+"item.php?q=/focus")("getFocus",function(data){
        DataTo.PrintFocusOn(data);
      });
    });

    connect(API_URL+"item.php")("getItem",function(data) {
      DataTo.PrintNewItem(data);
      DataTo.PrintBestItem(data);
    })
  }


  if(document.querySelector("#DetailPage")){
      var detailData = location.href.split("#")[1];
      connect(API_URL+"item.php?q=/"+detailData)("getDetail",function(data){
        DataTo.PriceInfo(data);
        DataTo.Slider(data);
      });
  }

  if(document.querySelector("#StorePage")){
      var detailData = location.href.split("#")[1];

      /*
      connect(API_URL+"model.php?q=/"+detailData)("getDetail",function(data){
        DataTo.SubInfo(data);
      });*/

      connect(API_URL+"model.php?q=/"+detailData)("getModel",function(data){
          console.log(API_URL+"model.php?q=/"+detailData+ " :::: " +data);
          DataTo.SubInfo(data);

          connect(API_URL+"item.php?q=/model/"+detailData)("getModelItem",function(data){
            DataTo.StoreItemList(data);
          });

      });



  }


}
