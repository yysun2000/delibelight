

var backcontroller = (function(){

  // UI
  var lists = {
    topmenu : [],
    filterlist : [],
    itemlist : []
  } // private


  // DB
  var dbprops = {
    itemlist : []
  }
  var dataview = {};
  var view = [];
  var showViews = function(){
    console.log(view);
    console.log("total : "+view.length);
    for(var i=0;i<view.length;i++){
      console.log("current : "+i);
      view[i]();
    }
  }
  var DataToTemplate = function(purl){
    return function(cb,fuc){
      return $.ajax({
            type:"GET",
            url:purl,
            dataType:"JSONP", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨,
            contentType: "application/json;charset=utf-8",
            callback : cb,
            success : fuc
          });
    };
  }
  /*
  $.ajax({
        type:"GET",
        url:"http://127.0.0.1:9988/yc/dbtojson/storelist.php",
        dataType:"JSONP", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨,
        contentType: "application/json;charset=utf-8",
        callback : "setItemList",
        success : function(data) {
          dbprops.itemlist = data;
          if(document.querySelector("#MainPage")){
            backcontroller.DB.method.PrintNewItem(data);
            backcontroller.DB.method.PrintBestItem(data);
          }else if(document.querySelector("#DetailPage")){
            backcontroller.DB.method.PrintSlider(data);
            backcontroller.DB.method.PrintPriceInfo(data);
          }
        }
  });*/





  var setting = [
    /*
    MainTopMenu
    MainTopSubMenu
    MainTopFollowList
    MainTopSlider
    MainMiddleListSlider
    MainFocusOn
    MainNewItem
    MainMiddleBanner
    MainBestItem
    MainCategory
    MainInstagram
    MainFooter
    */
    {
      Name : "Main",
      DataURL : "./admin/json/topmenu.json",
      templateSelector : '#MainTopMenu',
      stateProcessor : function(data){
        backcontroller.state.TopMenu.setList(data);
      },
      targetSelector : ".MainTopMenu",
      afterEvent : function(){
      }
    },
    {
      Name : "Main",
      templateSelector : '#MainTopSubMenu',
      stateProcessor : function(data){
      },
      targetSelector : ".MainTopSubMenu",
      afterEvent : function(){
      }
    },
    {
      Name : "Main",
      DataURL : "DB:FollowList",
      templateSelector : '#MainTopFollowList',
      stateProcessor : function(data){
      },
      targetSelector : ".MainTopFollowList",
      afterEvent : function(){
      }
    },
    {
      Name : "Main",
      templateSelector : '#MainTopSlider',
      stateProcessor : function(data){
      },
      targetSelector : ".MainTopSlider",
      afterEvent : function(){
      }
    },
    {
      Name : "Main",
      templateSelector : '#MainMiddleListSlider',
      stateProcessor : function(data){
      },
      targetSelector : ".MainMiddleListSlider",
      afterEvent : function(){

      }
    },
    {
      Name : "Main",
      DataURL : "DB:PrintFocusOn",
      templateSelector : '#MainFocusOn',
      stateProcessor : function(data){
      },
      targetSelector : ".MainFocusOn",
      afterEvent : function(){
      }
    },
    {
      Name : "Main",
      DataURL : "DB:PrintNewItem",
      templateSelector : '#MainNewItem',
      stateProcessor : function(data){
      },
      targetSelector : ".MainNewItem",
      afterEvent : function(){
      }
    },
    {
      Name : "Main",
      templateSelector : '#MainMiddleBanner',
      stateProcessor : function(data){
      },
      targetSelector : ".MainMiddleBanner",
      afterEvent : function(){
      }
    },
    {
      Name : "Main",
      DataURL : "DB:PrintBestItem",
      templateSelector : '#MainBestItem',
      stateProcessor : function(data){
      },
      targetSelector : ".MainBestItem",
      afterEvent : function(){
      }
    },
    {
      Name : "Main",
      templateSelector : '#MainCategory',
      stateProcessor : function(data){
      },
      targetSelector : ".MainCategory",
      afterEvent : function(){
      }
    },
    {
      Name : "Main",
      templateSelector : '#MainInstagram',
      stateProcessor : function(data){
      },
      targetSelector : ".MainInstagram",
      afterEvent : function(){
      }
    },
    {
      Name : "Main",
      templateSelector : '#MainFooter',
      stateProcessor : function(data){
      },
      targetSelector : ".MainFooter",
      afterEvent : function(){
      }
    },
    /*
      StoreTopMenuInfo
      StoreSubInfo
      StoreFilterMenu
      StoreItemList
    */


      {
        Name : "Store",
        DataURL : "./admin/json/topmenu.json",
        templateSelector : '#StoreTopMenuInfo',
        stateProcessor : function(data){
          backcontroller.state.TopMenu.setList(data);
        },
        targetSelector : ".StoreTopMenuInfo",
        afterEvent : function(){
        }
      },
      {
        Name : "Store",
        DataURL : "DB:SubInfo",
        templateSelector : '#StoreSubInfo',
        stateProcessor : function(data){
        },
        targetSelector : ".StoreSubInfo",
        afterEvent : function(){
        }
      },
      {
        Name : "Store",
        DataURL : "DB:FilterMenu",
        templateSelector : '#StoreFilterMenu',
        stateProcessor : function(data){
          backcontroller.state.FilterList.setList(data);
        },
        targetSelector : ".StoreFilterMenu",
        afterEvent : function(){
        },
        },
        {
          Name : "Store",
          DataURL : "DB:StoreItemList",
          templateSelector : '#StoreItemList',
          stateProcessor : function(data){
            backcontroller.state.ItemList.setList(data);
          },
          targetSelector : ".StoreItemList",
          afterEvent : function(){
          }
        },







          // 좌측 메뉴
          /*
          LeftMenuTopMenuInfo
          LeftMenuFollowList
          LeftMenuMenuList
          LeftMenuLatestList
          LeftMenuFooter
          */
          {
            Name : "LeftMenu",
            DataURL : "./admin/json/filter.json",
            templateSelector : '#LeftMenuTopMenuInfo',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".LeftMenuTopMenuInfo",
            afterEvent : function(){
            }
          },
          {
            Name : "LeftMenu",
            DataURL : "./admin/json/filter.json",
            templateSelector : '#LeftMenuFollowList',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".LeftMenuFollowList",
            afterEvent : function(){
            }
          },
          {
            Name : "LeftMenu",
            DataURL : "DB:LeftMenuList",
            templateSelector : '#LeftMenuMenuList',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".LeftMenuMenuList",
            afterEvent : function(){
            }
          },
          {
            Name : "LeftMenu",
            DataURL : "./admin/json/filter.json",
            templateSelector : '#LeftMenuLatestList',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".LeftMenuLatestList",
            afterEvent : function(){
            }
          },
          {
            Name : "LeftMenu",
            DataURL : "./admin/json/filter.json",
            templateSelector : '#LeftMenuFooter',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".LeftMenuFooter",
            afterEvent : function(){
            }
          },

          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 디테일 페이지 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          {
            Name : "Detail",
            DataURL : "./admin/json/filter.json",
            templateSelector : '#DetailTopMenu',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".DetailTopMenu",
            afterEvent : function(){
            }
          },
          {
            Name : "Detail",
            DataURL : "DB:Slider",
            templateSelector : '#DetailSlider',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".DetailSlider",
            afterEvent : function(){
            }
          },
          {
            Name : "Detail",
            DataURL : "DB:PriceInfo",
            templateSelector : '#DetailPriceInfo',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".DetailPriceInfo",
            afterEvent : function(){
            }
          },
          {
            Name : "Detail",
            DataURL : "./admin/json/filter.json",
            templateSelector : '#DetailContents',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".DetailContents",
            afterEvent : function(){
            }
          },
          {
            Name : "Detail",
            DataURL : "./admin/json/filter.json",
            templateSelector : '#DetailBottomMenu',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".DetailBottomMenu",
            afterEvent : function(){
            }
          },
          {
            Name : "Detail",
            DataURL : "./admin/json/filter.json",
            templateSelector : '#DetailBottomItems',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".DetailBottomItems",
            afterEvent : function(){
            }
          },

          // 로그인 페이지///


          {
            Name : "Login",
          //  DataURL : "./admin/json/filter.json",
            templateSelector : '#LoginTopMenu',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".LoginTopMenu",
            afterEvent : function(){
            }
          },
          {
            Name : "Login",
          //  DataURL : "./admin/json/filter.json",
            templateSelector : '#LoginFrame',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".LoginFrame",
            afterEvent : function(){
            }
          },


          ///////////////// 회원 가입
          {
            Name : "JoinPage",
          //  DataURL : "./admin/json/filter.json",
            templateSelector : '#JoinTopMenu',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".JoinTopMenu",
            afterEvent : function(){
            }
          },
          {
            Name : "JoinPage",
          //  DataURL : "./admin/json/filter.json",
            templateSelector : '#JoinPage',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".JoinPage",
            afterEvent : function(){
            }
          },
                    //JoinTopMenu
                    //JoinPage
          ///////////////// 회원 가입 약관
          {
            Name : "JoinCheck",
          //  DataURL : "./admin/json/filter.json",
            templateSelector : '#JoinCheckTopMenu',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".JoinCheckTopMenu",
            afterEvent : function(){
            }
          },
          {
            Name : "JoinCheck",
          //  DataURL : "./admin/json/filter.json",
            templateSelector : '#JoinCheck',
            stateProcessor : function(data){
              //backcontroller.state.FilterList.setList(data);
            },
            targetSelector : ".JoinCheck",
            afterEvent : function(){
            }
          },

          //JoinCheckTopMenu
          //JoinCheck


        ////////////////////MYPAGE


        /*
        MyPageTopMenu
        MyPageTopState
        MyPageTabSelector
        MyPageTabOrderFilter
        MyPageTabOrderList
        MyPageTabWishList
        MyPageTabMemberModify
        MyPageTabPoint
        MyPageTabWillPoint
        MyPageTabCoupon

        */
        {
          Name : "MyPage",
        //  DataURL : "./admin/json/filter.json",
          templateSelector : '#MyPageTopMenu',
          stateProcessor : function(data){
            //backcontroller.state.FilterList.setList(data);
          },
          targetSelector : ".MyPageTopMenu",
          afterEvent : function(){
          }
        },
        {
          Name : "MyPage",
        //  DataURL : "./admin/json/filter.json",
          templateSelector : '#MyPageTopState',
          stateProcessor : function(data){
            //backcontroller.state.FilterList.setList(data);
          },
          targetSelector : ".MyPageTopState",
          afterEvent : function(){
          }
        },
        {
          Name : "MyPage",
        //  DataURL : "./admin/json/filter.json",
          templateSelector : '#MyPageTabSelector',
          stateProcessor : function(data){
            //backcontroller.state.FilterList.setList(data);
          },
          targetSelector : ".MyPageTabSelector",
          afterEvent : function(){
          }
        },
        {
          Name : "MyPage",
        //  DataURL : "./admin/json/filter.json",
          templateSelector : '#MyPageTabOrderFilter',
          stateProcessor : function(data){
            //backcontroller.state.FilterList.setList(data);
          },
          targetSelector : ".MyPageTabOrderFilter",
          afterEvent : function(){
          }
        },
        {
          Name : "MyPage",
        //  DataURL : "./admin/json/filter.json",
          templateSelector : '#MyPageTabOrderList',
          stateProcessor : function(data){
            //backcontroller.state.FilterList.setList(data);
          },
          targetSelector : ".MyPageTabOrderList",
          afterEvent : function(){
          }
        },
        {
          Name : "MyPage",
        //  DataURL : "./admin/json/filter.json",
          templateSelector : '#MyPageTabWishList',
          stateProcessor : function(data){
            //backcontroller.state.FilterList.setList(data);
          },
          targetSelector : ".MyPageTabWishList",
          afterEvent : function(){
          }
        },
        {
          Name : "MyPage",
        //  DataURL : "./admin/json/filter.json",
          templateSelector : '#MyPageTabMemberModify',
          stateProcessor : function(data){
            //backcontroller.state.FilterList.setList(data);
          },
          targetSelector : ".MyPageTabMemberModify",
          afterEvent : function(){
          }
        },
        {
          Name : "MyPage",
        //  DataURL : "./admin/json/filter.json",
          templateSelector : '#MyPageTabPoint',
          stateProcessor : function(data){
            //backcontroller.state.FilterList.setList(data);
          },
          targetSelector : ".MyPageTabPoint",
          afterEvent : function(){
          }
        },
        {
          Name : "MyPage",
        //  DataURL : "./admin/json/filter.json",
          templateSelector : '#MyPageTabWillPoint',
          stateProcessor : function(data){
            //backcontroller.state.FilterList.setList(data);
          },
          targetSelector : ".MyPageTabWillPoint",
          afterEvent : function(){
          }
        },
        {
          Name : "MyPage",
        //  DataURL : "./admin/json/filter.json",
          templateSelector : '#MyPageTabCoupon',
          stateProcessor : function(data){
            //backcontroller.state.FilterList.setList(data);
          },
          targetSelector : ".MyPageTabCoupon",
          afterEvent : function(){
          }
        }


    ];


  return {

    DB : {
      method : dataview,
      getItemList : function(){
        return dbprops.itemlist;
      },
      dataTotemplate : DataToTemplate
    },
    state : {

      TopMenu : {
        setList : function(_list){
          lists.topmenu = _list
        },
        getList : function(){
          return lists.topmenu;
        }
      },
      ItemList : {
        setList : function(_list){
          lists.itemlist = _list
        },
        getList : function(){
          return lists.itemlist;
        }
      },
      FilterList : {
        setList : function(_list){
          lists.filterlist = _list
        },
        getList : function(){
          return lists.filterlist;
        }
      }


    },

    render : {
      View : view,
      showView : showViews,
      json : function(param){

        /*
        DataURL : "url",
        templateSelector : "#template",
        stateProcessor : function(data){

        },
        targetSelector : "#output"
        */
        if(param.DataURL){
          if(param.DataURL.indexOf("DB:") > -1){
            dataview[param.DataURL.split(":")[1]] = function(_data){
              var data = _data;
              view.push(function(){
                var templateHtml = $(param.templateSelector).html();
                $(param.targetSelector).append(_.template( templateHtml )(data));
              });
            }
          }else{
            view.push(function(){
              $.ajax({
                    type:"GET",
                    url:param.DataURL,
                    dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
                    success : function(data) {
                          var templateHtml = $(param.templateSelector).html();
                          param.stateProcessor(data);
                          $(param.targetSelector).append(_.template( templateHtml )(data));
                          if(param.afterEvent)
                          try{
                            param.afterEvent();
                          }catch(e){
                            console.log(e);
                          }
                    },
                    complete : function(data) {
                          // 통신이 실패했어도 완료가 되었을 때 이 함수를 타게 된다.
                          // TODO
                    },
                    error : function(xhr, status, error) {
                          alert("에러발생"+status+error);
                    }
              });
            })
          }
        }else{
          view.push(function(){
            var templateHtml = $(param.templateSelector).html();
            $(param.targetSelector).append(_.template( templateHtml )());
          })
        }
      },
      run : function(param){

          $(param.selector).children().remove();
          var templateHtml = $(param.selector).html();
          $(param.selector).append(_.template( param.template)(param.data));
      }
      ,
      start : function(){
        var renderer = backcontroller.render;
        for(var i=0;i<setting.length;i++){
          try{
            if($("#MainPage").length > 0){

                if(setting[i].Name == "LeftMenu"){
                  renderer.json(setting[i])
                }

                if(setting[i].Name == "Main")
                  renderer.json(setting[i])
            }else if($("#DetailPage").length > 0){

                if(setting[i].Name == "LeftMenu"){
                  renderer.json(setting[i])
                }

                if(setting[i].Name == "Detail")
                  renderer.json(setting[i])
            }else if($("#StorePage").length > 0){

                if(setting[i].Name == "LeftMenu"){
                  renderer.json(setting[i])
                }

                if(setting[i].Name == "Store"){
                  renderer.json(setting[i])
                }

            }else if($("#LoginPage").length > 0){

                if(setting[i].Name == "LeftMenu"){
                  renderer.json(setting[i])
                }

                if(setting[i].Name == "Login"){
                  renderer.json(setting[i])
                }
            }else if($("#JoinCheck").length > 0){

                if(setting[i].Name == "LeftMenu"){
                  renderer.json(setting[i])
                }

                if(setting[i].Name == "JoinCheck"){
                  renderer.json(setting[i])
                }
            }else if($("#JoinPage").length > 0){

                if(setting[i].Name == "LeftMenu"){
                  renderer.json(setting[i])
                }

                if(setting[i].Name == "JoinPage"){
                  renderer.json(setting[i])
                }
            }else if($("#MyPage").length > 0){

                if(setting[i].Name == "LeftMenu"){
                  renderer.json(setting[i])
                }

                if(setting[i].Name == "MyPage"){
                  renderer.json(setting[i])
                }

            }
          }catch(e){

          }

        }
      }

    }


  }

})()
