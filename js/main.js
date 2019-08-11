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

var rule = CSSRulePlugin.getRule(".FirstMain::before");

var rule2 = CSSRulePlugin.getRule(".sec1::before");

var blurtween = new TweenMax.to(rule, 3, {
    opacity: "0",
    delay: "4"
});
var imgtween = new TweenMax.to(".altlog", 2, {
    opacity: "1",
    delay: "1"
});
var bordtween = new TweenMax.to(".bord", 2, {
    opacity: "1",
    delay: "2"
});
var bordtween = new TweenMax.to(".back", .5, {
    opacity: "1",
    delay: "3",
    transform: "translateY(0)"
});
var dashtween = new TweenMax.to(".dash", .5, {
    opacity: "1",
    delay: "3",
    transform: "translateY(0)"
});

var blurtween2 = new TweenMax.to(rule, 3, {
    opacity: "1"
});

var blurcontroller = new ScrollMagic.Controller();
var blurscene = new ScrollMagic.Scene({
        triggerElement: '.FirstMain',
        duration: "400px",
        offset: "500px"

    })
    .addIndicators({
        name: "startblur"
    })
    .setTween(blurtween2)
    .addTo(blurcontroller)



var blurtween3 = new TweenMax.to(rule2, 3, {
    opacity: "1"
});

var blurcontroller2 = new ScrollMagic.Controller();
var blurscene = new ScrollMagic.Scene({
        triggerElement: '.FirstMain',
        duration: "400px",
        offset: "500px"

    })
    .addIndicators({
        name: "startblur"
    })
    .setTween(blurtween3)
    .addTo(blurcontroller2)



var numbercontroller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
        triggerElement: "#sec1",
        triggerHook: '1',
        duration: "550px"
    })
    .on('progress', function() {
        $('#number').text(Math.floor((Math.random() * 15) + 1));
    })
    .on("leave", function(event) {
        $('#number').text("15");
    })
    .addTo(numbercontroller)
    .addIndicators({ name: "number" });



var testimonaltween = new TweenMax.to('.testimonal', .8, {
    css: {
        transform: "translateX(40%)",
        opacity: "1"
    }
});
var testcontroller = new ScrollMagic.Controller();
var secondScene = new ScrollMagic.Scene({
        triggerElement: '.content',
        offset: "50px"
    })
    .addIndicators()
    .setTween(testimonaltween)
    .addTo(testcontroller);