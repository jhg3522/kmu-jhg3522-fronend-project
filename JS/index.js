$(function() {

    $("header a").click(function(e){

        e.preventDefault(); //현재 이벤트의 기본 동작을 중지 시킬 때 사용됨.

        var $target = $(this.hash); //클릭한 target의 위치를 알려줌
        //console.log($target)

        $("html, body").animate({scrollTop: $target.offset().top}, "slow");

    })

});

$(function() {
    var $slider = $("#slider");
    var $slides = $slider.find('.slides');
    var $slide = $slides.find('.slide');

    var currentSlide = 1;

    setInterval(function(){

        $slides.animate({'margin-left': "-=" + 1024},1000,function(){
            currentSlide++;
            if(currentSlide === $slide.length){
                currentSlide=1;
                $slides.css("margin-left",0);
            }
        }) //1024 이미지의 크기 의미
        //animation 움직이는 시간 1초
    }, 3000) //3초

});