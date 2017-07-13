var delibe = (function(){
  var lists = {
    topmenu : [],
    filterlist : [],
    itemlist : []
  } // private






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
      DataURL : "./admin/json/topmenu.json",
      templateSelector : '#MainTopMenu',
      stateProcessor : function(data){
        delibe.state.TopMenu.setList(data);
      },
      targetSelector : ".MainTopMenu",
      afterEvent : function(){
      }
    },
    {
      DataURL : "./admin/json/topmenu.json",
      templateSelector : '#MainTopSubMenu',
      stateProcessor : function(data){
        delibe.state.TopMenu.setList(data);
      },
      targetSelector : ".MainTopSubMenu",
      afterEvent : function(){
      }
    },
    {
      DataURL : "./admin/json/topmenu.json",
      templateSelector : '#MainTopFollowList',
      stateProcessor : function(data){
        delibe.state.TopMenu.setList(data);
      },
      targetSelector : ".MainTopFollowList",
      afterEvent : function(){
      }
    },
    {
      DataURL : "./admin/json/topmenu.json",
      templateSelector : '#MainTopSlider',
      stateProcessor : function(data){
        delibe.state.TopMenu.setList(data);
      },
      targetSelector : ".MainTopSlider",
      afterEvent : function(){
      }
    },
    {
      DataURL : "./admin/json/topmenu.json",
      templateSelector : '#MainMiddleListSlider',
      stateProcessor : function(data){
        delibe.state.TopMenu.setList(data);
      },
      targetSelector : ".MainMiddleListSlider",
      afterEvent : function(){
      }
    },
    {
      DataURL : "./admin/json/topmenu.json",
      templateSelector : '#MainFocusOn',
      stateProcessor : function(data){
        delibe.state.TopMenu.setList(data);
      },
      targetSelector : ".MainFocusOn",
      afterEvent : function(){
      }
    },
    {
      DataURL : "./admin/json/topmenu.json",
      templateSelector : '#MainNewItem',
      stateProcessor : function(data){
        delibe.state.TopMenu.setList(data);
      },
      targetSelector : ".MainNewItem",
      afterEvent : function(){
      }
    },
    {
      DataURL : "./admin/json/topmenu.json",
      templateSelector : '#MainMiddleBanner',
      stateProcessor : function(data){
        delibe.state.TopMenu.setList(data);
      },
      targetSelector : ".MainMiddleBanner",
      afterEvent : function(){
      }
    },
    {
      DataURL : "./admin/json/topmenu.json",
      templateSelector : '#MainBestItem',
      stateProcessor : function(data){
        delibe.state.TopMenu.setList(data);
      },
      targetSelector : ".MainBestItem",
      afterEvent : function(){
      }
    },
    {
      DataURL : "./admin/json/topmenu.json",
      templateSelector : '#MainCategory',
      stateProcessor : function(data){
        delibe.state.TopMenu.setList(data);
      },
      targetSelector : ".MainCategory",
      afterEvent : function(){
      }
    },
    {
      DataURL : "./admin/json/topmenu.json",
      templateSelector : '#MainInstagram',
      stateProcessor : function(data){
        delibe.state.TopMenu.setList(data);
      },
      targetSelector : ".MainInstagram",
      afterEvent : function(){
      }
    },
    {
      DataURL : "./admin/json/topmenu.json",
      templateSelector : '#MainFooter',
      stateProcessor : function(data){
        delibe.state.TopMenu.setList(data);
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
        DataURL : "./admin/json/topmenu.json",
        templateSelector : '#StoreTopMenuInfo',
        stateProcessor : function(data){
          delibe.state.TopMenu.setList(data);
        },
        targetSelector : ".StoreTopMenuInfo",
        afterEvent : function(){
        }
      },
      {
        DataURL : "./admin/json/topmenu.json",
        templateSelector : '#StoreSubInfo',
        stateProcessor : function(data){
        },
        targetSelector : ".StoreSubInfo",
        afterEvent : function(){
        }
      },
      {
        DataURL : "./admin/json/filter.json",
        templateSelector : '#StoreFilterMenu',
        stateProcessor : function(data){
          delibe.state.FilterList.setList(data);
        },
        targetSelector : ".StoreFilterMenu",
        afterEvent : function(){
        },
        },
        {
          DataURL : "./admin/json/itemlist.json",
          templateSelector : '#StoreItemList',
          stateProcessor : function(data){
            delibe.state.ItemList.setList(data);
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
            DataURL : "./admin/json/filter.json",
            templateSelector : '#LeftMenuTopMenuInfo',
            stateProcessor : function(data){
              //delibe.state.FilterList.setList(data);
            },
            targetSelector : ".LeftMenuTopMenuInfo",
            afterEvent : function(){
            }
          },
          {
            DataURL : "./admin/json/filter.json",
            templateSelector : '#LeftMenuFollowList',
            stateProcessor : function(data){
              //delibe.state.FilterList.setList(data);
            },
            targetSelector : ".LeftMenuFollowList",
            afterEvent : function(){
            }
          },
          {
            DataURL : "./admin/json/filter.json",
            templateSelector : '#LeftMenuMenuList',
            stateProcessor : function(data){
              //delibe.state.FilterList.setList(data);
            },
            targetSelector : ".LeftMenuMenuList",
            afterEvent : function(){
            }
          },
          {
            DataURL : "./admin/json/filter.json",
            templateSelector : '#LeftMenuLatestList',
            stateProcessor : function(data){
              //delibe.state.FilterList.setList(data);
            },
            targetSelector : ".LeftMenuLatestList",
            afterEvent : function(){
            }
          },
          {
            DataURL : "./admin/json/filter.json",
            templateSelector : '#LeftMenuFooter',
            stateProcessor : function(data){
              //delibe.state.FilterList.setList(data);
            },
            targetSelector : ".LeftMenuFooter",
            afterEvent : function(){
            }
          },

          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // 디테일 페이지 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          {
            DataURL : "./admin/json/filter.json",
            templateSelector : '#DetailTopMenu',
            stateProcessor : function(data){
              //delibe.state.FilterList.setList(data);
            },
            targetSelector : ".DetailTopMenu",
            afterEvent : function(){
            }
          },
          {
            DataURL : "./admin/json/filter.json",
            templateSelector : '#DetailSlider',
            stateProcessor : function(data){
              //delibe.state.FilterList.setList(data);
            },
            targetSelector : ".DetailSlider",
            afterEvent : function(){
            }
          },
          {
            DataURL : "./admin/json/filter.json",
            templateSelector : '#DetailPriceInfo',
            stateProcessor : function(data){
              //delibe.state.FilterList.setList(data);
            },
            targetSelector : ".DetailPriceInfo",
            afterEvent : function(){
            }
          },
          {
            DataURL : "./admin/json/filter.json",
            templateSelector : '#DetailContents',
            stateProcessor : function(data){
              //delibe.state.FilterList.setList(data);
            },
            targetSelector : ".DetailContents",
            afterEvent : function(){
            }
          },
          {
            DataURL : "./admin/json/filter.json",
            templateSelector : '#DetailBottomMenu',
            stateProcessor : function(data){
              //delibe.state.FilterList.setList(data);
            },
            targetSelector : ".DetailBottomMenu",
            afterEvent : function(){
            }
          },
          {
            DataURL : "./admin/json/filter.json",
            templateSelector : '#DetailBottomItems',
            stateProcessor : function(data){
              //delibe.state.FilterList.setList(data);
            },
            targetSelector : ".DetailBottomItems",
            afterEvent : function(){
            }
          }




    ];


  return {

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

      json : function(param){

        /*
        DataURL : "url",
        templateSelector : "#template",
        stateProcessor : function(data){

        },
        targetSelector : "#output"
        */
        if(param.DataURL){

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
        }else{
          var templateHtml = $(param.templateSelector).html();
          $(param.targetSelector).append(_.template( templateHtml )(data));
        }
      },
      run : function(param){

          $(param.selector).children().remove();
          var templateHtml = $(param.selector).html();
          $(param.selector).append(_.template( param.template)(param.data));
      }
      ,
      start : function(){
        for(var i=0;i<setting.length;i++){
          delibe.render.json(setting[i])
        }
      }

    }


  }

})()
