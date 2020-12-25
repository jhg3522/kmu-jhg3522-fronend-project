$(function() {

    $("header a").click(function(e){

        e.preventDefault(); //현재 이벤트의 기본 동작을 중지 시킬 때 사용됨.

        var $target = $(this.hash); //클릭한 target의 위치를 알려줌
        //console.log($target)

        $("html, body").animate({scrollTop: $target.offset().top}, "slow");

    })

});