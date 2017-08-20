
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




    //MyPage  //2_TabSelector
    setTimeout(function(){
      window["tagList"] = [];

      $(".tagGroup > span[class='tag']").click(function(evt){
        debugger;
        console.log("1");
        var tagList = window["tagList"];
        console.log("2");
        console.log(evt.target);
        var value = $(evt.target).text()
        console.log("3");
        if(tagList.indexOf(value) == -1){
          tagList.push(value)
          $(evt.target).css("backgroundColor","#ffe28f")
        }else{
          tagList.splice(tagList.indexOf(value),1);
          $(evt.target).css("backgroundColor","white")
        }
        console.log(window.tagList);
      })
        $(".tabselector .button > span,.tabselector .button > img").on("click",function(evt){
          $(".tabselector .button").removeClass("isSelected");

          $(".MyPageTabOrderFilter").addClass("isDeactive");
          $(".MyPageTabOrderList").addClass("isDeactive");
          $(".MyPageTabWishList").addClass("isDeactive");
          $(".MyPageTabMemberModify").addClass("isDeactive");
          $(".MyPageTabPoint").addClass("isDeactive");
          $(".MyPageTabWillPoint").addClass("isDeactive");
          $(".MyPageTabCoupon").addClass("isDeactive");

          $(evt.target).parent().toggleClass("isSelected");
          var datatab = $(evt.target).parent().attr("data-tab");
          if(datatab == "MyPageTabOrder"){
            $("."+datatab+"Filter").removeClass("isDeactive");
            $("."+datatab+"List").removeClass("isDeactive");
          }else{
            $("."+datatab).removeClass("isDeactive");
          }
        })

        //6_Point
        $(".point .rollMenu .isTitle").on("click",function(evt){
          $(evt.target).parent().toggleClass("isSelected");
        })

        //7_WillPoint
        $(".willPoint .rollMenu .isTitle").on("click",function(evt){
          $(evt.target).parent().toggleClass("isSelected");
        })

        // 8_Coupon
        $(".coupon .rollMenu .isTitle > div > div").on("click",function(evt){
          $(evt.target).parent().parent().parent().toggleClass("isSelected");
        })


        //Celleb
        if($("#loginsuccess").length > 0){
          updateCeleb($("#loginsuccess").text());
        }

        $(".addfollow").click(function(){
          if($("#loginsuccess").length > 0){
            togglefollow($(this).next().val());
          }else{
            alert("로그인을 해주십시오.");
          }
        })
    },1000);





    //
}


    function number_format(a){ return a;}

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

// 템플릿 활용하기

function DataToTemplate(purl,listname,keyword,callback){ // url, 리스트이름(기능에 필요), 키워드(리턴받을값)
  console.log(listname);
  window['currentListName'] = listname;
  return function(template,selector){ // 탬플릿과 적용할 셀렉터
    function fuc(data){
      $(selector).children().remove();
      if(data.length > 0){
        var templateHtml = $(template).html();
        $(selector).append(_.template( templateHtml )(data));
      }else{
      }
      if(callback!=='undefined'){
        callback(data.length,keyword);
      }
    }
    var cb = fuc;
    return $.ajax({
          type:"GET",
          url:purl,
          dataType:"JSONP", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨,
          contentType: "application/json;charset=utf-8",
          callback:cb,
          success:fuc
        });
  };
}
function search(val,selector,listname,callback){
  DataToTemplate("/yc/api/item.php?q=/search/"+val+"&callback=test",listname,val,callback)("#ProductList",selector); // 리스트 네임과 셀렉터의 이름을 같게할 것.
}
function searchTag(val,selector,listname,callback){
  try{
    if(val[0] !== "#"){
      alert("해쉬태그를 붙여주세요!");
    }else{
      console.log(val);
      var hval = val.replace(/#/gi,"/");
    DataToTemplate("/yc/api/item.php?q=/tag"+hval+"&callback=test",listname,val,callback)("#ProductList",selector); // 리스트 네임과 셀렉터의 이름을 같게할 것.
    }
  }catch(e){
    console.log(e);
      alert("검색어를 다시 입력해주십시오.");
  }
}

function selectTag(callback){
  try{
    if(window.tagList !== "undefined"){
      var taglistvalue = window.tagList.toString();
      if(taglistvalue !== 'undefined' && taglistvalue !== "null"){
        var url = taglistvalue;
        url = url.replace(/,/gi,"");
        searchTag(url,'.AllItemTagListDatas','AllItemTagListDatas',callback);
      }
    }

  }catch(e){
      console.log(e);
  }
}











// Celeb

// 현재 회원의 현재 Celeb을 업데이트한다.
function updateCeleb(member){
  function callback(data){
//    alert(data);
  }
  DataToTemplate("/yc/api/model.php?m=get&q=/follow/"+member,"follow","",callback)("#LeftMenuFollowList",".LeftMenuFollowList");
  DataToTemplate("/yc/api/model.php?m=get&q=/follow/"+member,"follow","",callback)("#MainTopFollowList",".MainTopFollowList");
  DataToTemplate("/yc/api/model.php?m=get&q=/follow/"+member,"follow","",callback)("#CelebPage",".CelebPage")
}


// Celeb과 follow가 되있으면 팔로우를 해제하고, 그게 아니면 팔로우를 추가한다.
function togglefollow(model){
  if($("#loginsuccess").length > 0){
    var member = $("#loginsuccess").text();
    var purl = "/yc/api/model.php?m=get&q=/follow/"+model+"/"+member;
    function fuc(data){
      if(data.length == 0){
        followCeleb(model,member);
      }else{
        deleteCeleb(model,member);
      }
    }
    $.ajax({
          type:"GET",
          url:purl,
          dataType:"JSONP", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨,
          contentType: "application/json;charset=utf-8",
          callback:fuc,
          success:fuc
        });
  }else{
    alert("로그인을 하신 후 이용하십시오.");
  }
}


// Celeb과 follow를 한다.
function followCeleb(model,follow){
  if($("#loginsuccess").length > 0){
    var purl = "/yc/api/model.php?m=post&q=/follow/"+model+"/"+follow;
    function fuc(data){
      alert("팔로우가 완료되었습니다.");
      updateCeleb(follow)
    }
    $.ajax({
          type:"GET",
          url:purl,
          dataType:"JSONP", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨,
          contentType: "application/json;charset=utf-8",
          callback:fuc,
          success:fuc
        });
  }else{
    alert("로그인을 하신 후 이용하십시오.");
  }
}

// 팔로우를 해제한다.
function deleteCeleb(model,follow){
    if($("#loginsuccess").length > 0){
      var purl = "/yc/api/model.php?m=delete&q=/follow/"+model+"/"+follow;
      function fuc(data){
        alert("팔로우를 해제합니다.");
        updateCeleb(follow);
      }
      $.ajax({
        type:"GET",
        url:purl,
        dataType:"JSONP", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨,
        contentType: "application/json;charset=utf-8",
        callback:fuc,
        success:fuc
      });

    }else{
    alert("로그인을 하신 후 이용하십시오.");
    }
}
