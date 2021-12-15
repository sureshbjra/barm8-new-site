console.log("Partner JS is working!")

$(document).ready(function(){
    $("#slide1").addClass('show')
    $("nav").css("background-color", "black");
    $("nav").css("height", "70px");
    $("nav").css("box-shadow", "2px 2px 10px 0px black");
    $(".nav-item a").css("color", "#e4992f");
    $(".nav-item a").css("font-weight", "bold");
})

$(document).on('click', '#option1', function() { 
    $("#option1").addClass('active')
    $("#option2").removeClass('active')
    $("#option3").removeClass('active')
    $("#option4").removeClass('active')
    $("#option5").removeClass('active')
    $("#option6").removeClass('active')

    $("#slide1").addClass('show')
    $("#slide2").removeClass('show')
    $("#slide3").removeClass('show')
    $("#slide4").removeClass('show')
    $("#slide5").removeClass('show')
    $("#slide6").removeClass('show')
});

$(document).on('click', '#option2', function() { 
    $("#option1").removeClass('active')
    $("#option2").addClass('active')
    $("#option3").removeClass('active')
    $("#option4").removeClass('active')
    $("#option5").removeClass('active')
    $("#option6").removeClass('active')

    $("#slide1").removeClass('show')
    $("#slide2").addClass('show')
    $("#slide3").removeClass('show')
    $("#slide4").removeClass('show')
    $("#slide5").removeClass('show')
    $("#slide6").removeClass('show')
});

$(document).on('click', '#option3', function() { 
    $("#option1").removeClass('active')
    $("#option2").removeClass('active')
    $("#option3").addClass('active')
    $("#option4").removeClass('active')
    $("#option5").removeClass('active')
    $("#option6").removeClass('active')

    $("#slide1").removeClass('show')
    $("#slide2").removeClass('show')
    $("#slide3").addClass('show')
    $("#slide4").removeClass('show')
    $("#slide5").removeClass('show')
    $("#slide6").removeClass('show')
});

$(document).on('click', '#option4', function() { 
    $("#option1").removeClass('active')
    $("#option2").removeClass('active')
    $("#option3").removeClass('active')
    $("#option4").addClass('active')
    $("#option5").removeClass('active')
    $("#option6").removeClass('active')

    $("#slide1").removeClass('show')
    $("#slide2").removeClass('show')
    $("#slide3").removeClass('show')
    $("#slide4").addClass('show')
    $("#slide5").removeClass('show')
    $("#slide6").removeClass('show')
});

$(document).on('click', '#option5', function() { 
    $("#option1").removeClass('active')
    $("#option2").removeClass('active')
    $("#option3").removeClass('active')
    $("#option4").removeClass('active')
    $("#option5").addClass('active')
    $("#option6").removeClass('active')

    $("#slide1").removeClass('show')
    $("#slide2").removeClass('show')
    $("#slide3").removeClass('show')
    $("#slide4").removeClass('show')
    $("#slide5").addClass('show')
    $("#slide6").removeClass('show')
});

$(document).on('click', '#option6', function() { 
    $("#option1").removeClass('active')
    $("#option2").removeClass('active')
    $("#option3").removeClass('active')
    $("#option4").removeClass('active')
    $("#option5").removeClass('active')
    $("#option6").addClass('active')

    $("#slide1").removeClass('show')
    $("#slide2").removeClass('show')
    $("#slide3").removeClass('show')
    $("#slide4").removeClass('show')
    $("#slide5").removeClass('show')
    $("#slide6").addClass('show')
});



