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
            // Email.send({
			// 	Host: "",
			// 	Port: ,
			// 	Username: "",
			// 	Password: "",
			// 	To: "",
			// 	From: "",
			// 	Subject: "",
			// 	Body: ""
            // });
            alert('We have Your Details');
            alert('We will contact you very soon');
        }
    });
});