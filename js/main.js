var scrollduration = $("#second").width();
console.log(scrollduration);
var scrolltotaldur = scrollduration * 3 + "px";
console.log(scrolltotaldur);
var mytween1 = new TweenMax.to('#second', 1, {
    css: {
        transform: "translateX(-66.66%)"
    }
});
var controller = new ScrollMagic.Controller();
var secondScene = new ScrollMagic.Scene({
        triggerElement: '.secondmain',
        triggerHook: 0,
        duration: scrolltotaldur
    })
    .setPin("#second")
    .addIndicators()
    .setTween(mytween1)
    .addTo(controller);



var scrollduration2 = $("#third").width();
console.log(scrollduration2);
var scrolltotaldur2 = scrollduration2 * 3 + "px";
console.log(scrolltotaldur2);
var mytween2 = new TweenMax.to('#third', 1, {
    css: {
        transform: "translateX(-66.66%)"
    }
});
var controller2 = new ScrollMagic.Controller();
var secondScene2 = new ScrollMagic.Scene({
        triggerElement: '.thirdmain',
        triggerHook: 0,
        duration: scrolltotaldur2
    })
    .setPin("#third")
    .addIndicators()
    .setTween(mytween2)
    .addTo(controller2);


var blurtween = new TweenMax.to('body::before', 1, {
    css: {
        opacity: "1"
    }
});

var blurcontroller = new ScrollMagic.Controller();
var blurscene = new ScrollMagic.Scene({
        triggerElement: '.FirstMain',
        triggerHook: "0",
        duration: "400px"
    })
    .addIndicators({
        name: "startblur"
    })
    .setTween(blurtween)
    .addTo(blurcontroller);