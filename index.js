$(document).ready(function(){

    /* ======================================
            Start Display Area
    ====================================== */
    
    $('.collapse_plush').click(function(){
        $('.collapse_minus').css('display','block');
        $('.collapse_plush').css('display','none');
    });
    $('.collapse_minus').click(function(){
        $('.collapse_plush').css('display','block');
        $('.collapse_minus').css('display','none');
    });
    $('.menu_button').click(function(){
        $('.close_button').css('display','block');
        $('.menu_button').css('display','none');
    });
    $('.close_button').click(function(){
        $('.menu_button').css('display','block');
        $('.close_button').css('display','none');
    });
    $('#sedans').mouseover(function(){
        $('#sedans_sub').css('display','block');
        $('.manufacturing_front').css('display','none');
    });
    $('#sedans').mouseleave(function(){
        $('#sedans_sub').css('display','none');
        $('.manufacturing_front').css('display','block');
    });
    $('#crossovers').mouseover(function(){
        $('#crossovers_sub').css('display','block');
        $('.manufacturing_front').css('display','none');
    });
    $('#crossovers').mouseleave(function(){
        $('#crossovers_sub').css('display','none');
        $('.manufacturing_front').css('display','block');
    });
    $('#coupes').mouseover(function(){
        $('#coupes_sub').css('display','block');
        $('.manufacturing_front').css('display','none');
    });
    $('#coupes').mouseleave(function(){
        $('#coupes_sub').css('display','none');
        $('.manufacturing_front').css('display','block');
    });
    $('#convertible').mouseover(function(){
        $('#convertible_sub').css('display','block');
        $('.manufacturing_front').css('display','none');
    });
    $('#convertible').mouseleave(function(){
        $('#convertible_sub').css('display','none');
        $('.manufacturing_front').css('display','block');
    });
    $('#buses').mouseover(function(){
        $('#buses_sub').css('display','block');
        $('.manufacturing_front').css('display','none');
    });
    $('#buses').mouseleave(function(){
        $('#buses_sub').css('display','none');
        $('.manufacturing_front').css('display','block');
    });
    $('#trucks').mouseover(function(){
        $('#trucks_sub').css('display','block');
        $('.manufacturing_front').css('display','none');
    });
    $('#trucks').mouseleave(function(){
        $('#trucks_sub').css('display','none');
        $('.manufacturing_front').css('display','block');
    });
    $('#racing').mouseover(function(){
        $('#racing_sub').css('display','block');
        $('.manufacturing_front').css('display','none');
    });
    $('#racing').mouseleave(function(){
        $('#racing_sub').css('display','none');
        $('.manufacturing_front').css('display','block');
    });

    /* ======================================
            End Display Area
    ====================================== */

    /* ======================================
            Start Animation Area
    ====================================== */

    
    $('.inquiry2').waypoint(function(){
        $('.inquiry2').css({
            animation: "inquiry2 3s forwards"
        });
    },{offset :"100%"
    });
    $('.left_15').waypoint(function(){
        $('.left_15').css({
            animation: "left_15 3s forwards"
        });
    },{offset :"100%"
    });
    $('.right_15').waypoint(function(){
        $('.right_15').css({
            animation: "right_15 3s forwards"
        });
    },{offset :"100%"
    });
    $('.left_5').waypoint(function(){
        $('.left_5').css({
            animation: "left_5 3s forwards"
        });
    },{offset :"100%"
    });
    $('.right_5').waypoint(function(){
        $('.right_5').css({
            animation: "right_5 3s forwards"
        });
    },{offset :"100%"
    });
    $('.bottom_6').waypoint(function(){
        $('.bottom_6').css({
            animation: "bottom_6 3s forwards"
        });
    },{offset :"120%"
    });
    $('.left_37').waypoint(function(){
        $('.left_37').css({
            animation: "left_37 3s forwards"
        });
    },{offset :"100%"
    });
    $('.left_0').waypoint(function(){
        $('.left_0').css({
            animation: "left_0 3s forwards"
        });
    },{offset :"100%"
    });
    $('.information_contact').waypoint(function(){
        $('.information_contact').css({
            animation: "information_contact 3s forwards"
        });
    },{offset :"100%"
    });
    $('.address').waypoint(function(){
        $('.address').css({
            animation: "address 3s forwards"
        });
    },{offset :"100%"
    });
    $('.footer').waypoint(function(){
        $('.footer').css({
            animation: "footer 3s forwards"
        });
    },{offset :"100%"
    });

    /* ======================================
            End Animation Area
    ====================================== */
    
    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg !== value;
    });
    $('#form').validate({
        rules :{
            name : 'required',
            email : {
                required : true,
                email : true
            },
            selectInput : {
                required : true,
                valueNotEquals : 'none'
            }
        },
        messages :{
            name : 'Please Enter Your Name',
            email : {
                required : 'Please Enter Your Email Id',
                email : 'Please Enter Valid Email Address'
            },
            selectInput : {
                required : 'Please Select one option',
                valueNotEquals : 'Select one option'
            }
        },
        submitHandler : function(){
            var inq_email=document.getElementById("email").value;
            var work_for=document.getElementById("selectInput").value;
            var client_name=document.getElementById("name").value;
            Email.send({
				Host: "smtp.elasticemail.com",
				Port: 2525,
				Username: "abhayhingrajiya18@gmail.com",
				Password: "6A26DD6FFFD80DAE8311945FBD911AA3F0FE",
				To: inq_email,
				From: "abhayhingrajiya18@gmail.com",
				Subject: "From Mercedes",
				Body: "We will contact you vary soon "+client_name
            });
            Email.send({
				Host: "smtp.elasticemail.com",
				Port: 2525,
				Username: "abhayhingrajiya18@gmail.com",
				Password: "6A26DD6FFFD80DAE8311945FBD911AA3F0FE",
				To: "abhayhingrajiya18@gmail.com",
				From: "abhayhingrajiya18@gmail.com",
				Subject: work_for,
				Body: client_name+" want to discuss about "+work_for+" contact him by "+inq_email
            });
            alert('We have Your Details');
            alert('We will contact you very soon');
        }
    });
    let slideIndex=0;
    function showSlide(){
        let slides=document.getElementsByClassName("mySlides");
        if(slideIndex != 0){
            slides[slideIndex-1].style.animation="slideActive1 2s forwards";
        }
        if(slideIndex == 0){
            slides[slides.length-1].style.animation="slideActive1 2s forwards";
            slides[slides.length-2].style.animation="slideActive2 2s forwards";
            slides[slides.length-3].style.animation="slideActive3 0s forwards";
        }else if(slideIndex == 1){
            slides[0].style.animation="slideActive1 2s forwards";
            slides[slides.length-1].style.animation="slideActive2 2s forwards";
            slides[slides.length-2].style.animation="slideActive3 0s forwards";
        }else if(slideIndex == 2){
                slides[1].style.animation="slideActive1 2s forwards";
                slides[0].style.animation="slideActive2 2s forwards";
                slides[slides.length-1].style.animation="slideActive3 0s forwards";
        }else{
            slides[slideIndex-1].style.animation="slideActive1 2s forwards";
            slides[slideIndex-2].style.animation="slideActive2 2s forwards";
            slides[slideIndex-3].style.animation="slideActive3 0s forwards";
        }
        slideIndex++;
        if(slideIndex>slides.length){
            slideIndex=1;
        }
        slides[slideIndex-1].style.animation="slideActive 2s forwards";
        setTimeout(showSlide,10000);
    }
    showSlide();
});
function subscribeButton(){
    var input=document.getElementById("subscribeEmail").value;
    if(input!=""){
        Email.send({
            Host: "smtp.elasticemail.com",
            Port: 2525,
            Username: "abhayhingrajiya18@gmail.com",
            Password: "6A26DD6FFFD80DAE8311945FBD911AA3F0FE",
            To: "abhayhingrajiya18@gmail.com",
            From: "abhayhingrajiya18@gmail.com",
            Subject: "For Subscription",
            Body: "New Subscription is arrived, His Email address is: "+input
        });
    }else{
        alert("Enter Your Email address")
    }
}
