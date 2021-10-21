function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    // console.log(hashTag + " " + pageID);

MODEL.updateView(pageID)
// ====add this set of code to model===//

// add the above to the model and then pass over the page id
}



function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}


$(document).ready(function() {
    initURLListener();
    // console.log(MODEL.pageID);
});