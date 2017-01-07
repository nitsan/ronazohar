/**
	bodyMind.js main controller
**/
(function(){

    // on dom ready
    $(document).ready(function(){
        // load footer.html on ready
        $.get('footer.html',function(footerContent){
            $('#footer').html(footerContent);
        });
    //    $.get('toolbar.html',function(footerContent){
    //        $('#toolbar').html(footerContent);
    //    });
        
    });


})();