var MODEL = (function(){

// let _hashTag = window.location.hash;
// let _pageId = _hashTag.replace("#", "");

var _updateView = function(pageName){
    // console.log(pageName);

    if(pageName != "") {
        $.get(`pages/${pageName}/${pageName}.html`, function(data){
            // console.log("data " + data);
            $("#app").html(data);
        });
    }else {
        $.get(`pages/home/home.html`, function(data){
            // console.log("data " + data);
            $("#app").html(data);
        });
    }
};

return {
    updateView: _updateView,
};
}) ();