//Add Javascript//

$(".jumper").on("click", function(event) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 360);
    
});
