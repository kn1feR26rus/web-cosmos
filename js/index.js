$(document).ready(function() {
    AOS.init();

    $(window).scroll(function(){
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var dh = $(document).height();  

        var title1_et = $('.title1_hr').offset().top;
        var title1_eh = $('.title1_hr').outerHeight(); 

        var title2_et = $('.title2_hr').offset().top;
        var title2_eh = $('.title2_hr').outerHeight(); 

        var title3_et = $('.title3_hr').offset().top;
        var title3_eh = $('.title3_hr').outerHeight(); 

        var title4_et = $('.title4_hr').offset().top;
        var title4_eh = $('.title4_hr').outerHeight(); 

        var title5_et = $('.title5_hr').offset().top;
        var title5_eh = $('.title5_hr').outerHeight(); 

        var title6_et = $('.title6_hr').offset().top;
        var title6_eh = $('.title6_hr').outerHeight();

        if (wt + wh >= title1_et || wh + wt == dh || title1_eh + title1_et < wh){
            $('.title1_hr').addClass('active')
        }
        if (wt + wh >= title2_et || wh + wt == dh || title2_eh + title2_et < wh){
            $('.title2_hr').addClass('active')
        }
        if (wt + wh >= title3_et || wh + wt == dh || title3_eh + title3_et < wh){
            $('.title3_hr').addClass('active')
        }
        if (wt + wh >= title4_et || wh + wt == dh || title4_eh + title4_et < wh){
            $('.title4_hr').addClass('active')
        }
        if (wt + wh >= title5_et || wh + wt == dh || title5_eh + title5_et < wh){
            $('.title5_hr').addClass('active')
        }
        if (wt + wh >= title6_et || wh + wt == dh || title6_eh + title6_et < wh){
            $('.title6_hr').addClass('active')
        }
    });
})