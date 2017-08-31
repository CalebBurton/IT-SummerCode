$(function() {
    
    $('.swiper-wrapper').children('.swiper-slide').shuffle();
    
    var e = [];
    $(".swiper-container").each(function(s) {
                var t = $(".swiper-button-next:eq(" + s + ")"),
                    i = $(".swiper-button-prev:eq(" + s + ")"),
                    n = $(this);
                e.push(new Swiper(this, {
                                slidesPerView: 1,
                                spaceBetween: 30,
                                keyboardControl: !0,
                                nextButton: t,
                                prevButton: i,
                                loop: !1,
                                a11y: !0,
                                pagination: '.swiper-pagination',
                                paginationClickable: true,
                                paginationType: 'bullets',
                                prevSlideMessage: "Previous slide",
                                nextSlideMessage: "Next slide",
                                firstSlideMessage: "This is the first slide",
                                lastSlideMessage: "This is the last slide",
                                onReachEnd:function(e){n.append('<div class="swiper-button-next refresh-button" aria-disabled="false" tabindex="0" role="button" aria-label="Return to first slide" style="background-color: rgb(78, 42, 132); background-image: url(\'//common.northwestern.edu/v8/css/images/icons/refresh.svg\');"></div>'),n.on("click",".refresh-button",function(){e.slideTo(0),$(this).remove()}),n.find(".swiper-button-prev").click(function(){$(".refresh-button").remove()})
                                }
                        })
                );
            }
        );
});