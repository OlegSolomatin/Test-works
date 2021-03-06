function stylegen (i) {
    $(".polzunok").css({
        background: "#462656",
        border: "none",
        width: "100%",
        height: "3px",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 5px, rgba(0, 0, 0, 0.2) 0px 4px 6px",
    });
    $(".cutouts").css({
        top: "3px",
        position: "absolute",
        textAlign: "center",
        width: "3px",
        height: "20px",
        cursor: "pointer",
        background: "inherit",
        zIndex: "2",
        color: "#000",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2)",
    });
    $(".cutouts_title"+i).css({
        fontSize: "15px",
        padding: "25px 0 0 0",
        width: "min-content",
        display: "block",
        position: "absolute",
        fontWeight: "bold",
    });
    let smechenie = $('.cutouts_title'+i).width();
    $('.cutouts_title'+i).css({
        left: -smechenie/2,
    });
    $('.cutouts_title'+i).hover(function () {
        $('.cutouts_title'+i).css({
            webkitTransition: "1.2s",
            transition: "1.2s",
            webkitTransform: "scale(1.2)",
            transform: "scale(1.2)",
            color: "lightslategray",
        })
    }, function () {
        $('.cutouts_title'+i).css({
            webkitTransform: "scale(1)",
            transform: "scale(1)",
            color: "black"
        })
    });
}
$("#polzunok").slider({
    animate: "slow",
    min: 1,
    max: 4,
    range: "min",
    value: 2,
});
const cutouts_title = ['Не владею', 'Использую готовые решения', 'Использую готовые рещения и умею их изменять', 'Пишу с 0 сложный структурированный код'];
let opt = $("#polzunok").data().uiSlider.options,
    min = opt.min,
    raz = opt.max - min;
for (let i = 0; i <= raz; i++) {
    if (i!==3) {
        $(".polzunok").append($('<b class="cutouts" id="#cutouts">' + '<span class="cutouts_title'+[i]+'"' + 'id="#cutouts_title">' + cutouts_title[i] + '</span>' + '</b>').css('left', (i / raz * 100) + '%'));
        stylegen(i);
    } else {
        $(".polzunok").append($('<b class="cutouts" id="#cutouts">' + '<span class="cutouts_title'+[i]+'"' + 'id="#cutouts_title">' + cutouts_title[i] + '</span>' + '</b>').css('left', '99.6%'));
        stylegen(i);
    }
}
$(".ui-slider-horizontal .ui-slider-handle").css({
    top: "-1.3em",
    background: "transparent",
    border: "5px solid transparent",
    borderTop: "20px solid #4c204e",
    width: "auto",
    height: "auto",
    borderRadius: "10px",
    marginLeft: "-0.5%",
});
