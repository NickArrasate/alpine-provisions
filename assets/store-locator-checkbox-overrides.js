$(document).ready(function(){
    console.log('You are on the locator');
    var selector = $('.form-check-input');
    var page_location = null;
    for(i=0; i < selector.length; i++ ){
        if (selector[i].name.toLowerCase().indexOf("chasen")>=0){
            var page_location  = 'chasen';
            console.log(page_location );
        }else if(selector[i].name.toLowerCase().indexOf("alpine")>=0){
            var page_location  = 'alpine';
            console.log(page_location );
        }else if(selector[i].name.toLowerCase().indexOf("pangea")>=0){
            var page_location  = 'pangea';
            console.log(page_location );
        }
    }
    console.log(selector);
});