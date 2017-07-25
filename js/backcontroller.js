

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
  var promise = [];
  var showViews = function(){
    console.log("total : "+view.length);
    if(promise.length > 0){
      var query = "";
      console.log(promise.length);
      for(var i=0;i<promise.length;i++){
        query += "window[\""+promise[i]+"\"],"
      }
      query = query.substr(0,query.length-1);

      eval("$.when("+query+").done(function(){for(var i=0;i<view.length;i++){try{view[i]();}catch(e){console.log('에러발생');}}})")
    }else{
      for(var i=0;i<view.length;i++){
        console.log(view[i]);
        console.log("current : "+i);
        try{
        view[i]();
        }catch(e){

        }
      }
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


  var setting = [];


  return {

    DB : {
      method : dataview,
      getItemList : function(){
        return dbprops.itemlist;
      },
      dataTotemplate : DataToTemplate
    },
    Component : {
      init : function(obj){
        setting.push(obj);
      }
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
        if(param.Data){

          var connect = backcontroller.DB.dataTotemplate;
          promise.push(param.Data.name);
          window[param.Data.name] = connect(param.Data.url)("get"+param.Data.name,function(_data){
            console.log("DONE : "+param.Data.name);
            var data = _data;
            view.push(function(){
              var templateHtml = $(param.templateSelector).html();
              $(param.targetSelector).append(_.template( templateHtml )(data));
            });
          });

          return;
        }

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
        console.log("setting");
        console.log(setting);
        for(var i=0;i<setting.length;i++){
          backcontroller.render.json(setting[i])
        }

        showViews();
      }

    }


  }

})()
