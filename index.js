$(document).ready(function(){
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
        massages :{
            name : 'This Field is required',
            email : {
                required : 'This Field is required',
                email : 'Enter Valid Email Address'
            },
            selectInput : {
                required : 'Select one option',
                valueNotEquals : 'Select one option'
            }
        },
        submitHandler : function(){
            alert('We have Your Details');
            alert('We will contact you very soon');
        }
    });
});