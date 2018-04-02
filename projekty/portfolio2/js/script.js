$(document).ready(function(){
   addScrolled();
    napis();
    napis2();
    napis3();
    
});

$(document).scroll(function(){
    addScrolled();
    napis();
    napis2();
    napis3();
    
});

function addScrolled(){
    var height = $('#main-nav').height();
    var scroll =$(window).scrollTop();
    
    if(scroll > height){
        $('#main-nav').addClass('transparent');
       
    }
    else {
        $('#main-nav').removeClass('transparent');
         
    }
}

function napis(){
    var height = $('#imie').height();
//    var height2 = $('#content').height();
    var scroll =$(window).scrollTop();
    
    if(height > scroll){
        $('.napis').addClass('color');
       
    }      
    
    else {
        $('.napis').removeClass('color');
         
    }
}


function napis2(){
    var height = $('#imie').height();
//    var height2 = $('#content').height();
    var scroll =$(window).scrollTop();
    
    if(height <= scroll){
        $('.napis2').addClass('color');
       
    }      
    
    else {
        $('.napis2').removeClass('color');
         
    }
}

