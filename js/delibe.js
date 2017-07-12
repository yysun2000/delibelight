var delibe = (function(){
  var lists = {
    topmenu : [],
    filterlist : [],
    itemlist : []
  } // private


  var setting = [
      {
        DataURL : "./admin/json/topmenu.json",
        templateSelector : '#TopMenuTemplate',
        stateProcessor : function(data){
          delibe.state.TopMenu.setList(data);
        },
        targetSelector : "#topmenu",
        afterEvent : function(){
        }
      },
      {
        DataURL : "./admin/json/itemlist.json",
        templateSelector : '#itemlist',
        stateProcessor : function(data){
          delibe.state.ItemList.setList(data);
        },
        targetSelector : ".itemlist",
        afterEvent : function(){
        }
      },
      {
        DataURL : "./admin/json/filter.json",
        templateSelector : '#filterMenu',
        stateProcessor : function(data){
          delibe.state.FilterList.setList(data);
        },
        targetSelector : ".filterMainMenu",
        afterEvent : function(){
        },
        },
        {
          DataURL : "./admin/json/filter.json",
          templateSelector : '#MainInfo',
          stateProcessor : function(data){
            //delibe.state.FilterList.setList(data);
          },
          targetSelector : ".mainInfo",
          afterEvent : function(){
          }
        },

          // 좌측 메뉴
          {
            DataURL : "./admin/json/filter.json",
            templateSelector : '#LeftMenu',
            stateProcessor : function(data){
              //delibe.state.FilterList.setList(data);
            },
            targetSelector : ".leftMenu",
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
          if(param.targetSelector == ".MainInfo"){
            debugger;
          }
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
