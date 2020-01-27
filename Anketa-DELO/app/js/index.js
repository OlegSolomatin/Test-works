$("#polzunok").css({
    background: "#462656",
    border: "none",
    width: "100%",
    height: "3px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 5px, rgba(0, 0, 0, 0.2) 0px 4px 6px",
});
$("#polzunok").slider({
    animate: "slow",
    min: 1,
    max: 4,
    range: "min",
    value: 2,
});
let opt = $("#polzunok").data().uiSlider.options,
    min = opt.min,
    raz = opt.max - min;
for (let i = 0; i <= raz; i++) {
    if (i!==3) {
        $(".polzunok").append($('<b class="cutouts">' + '</b>').css('left', (i / raz * 100) + '%'));
    } else {
        $(".polzunok").append($('<b class="cutouts">' + '</b>').css('left', '99.6%'));
    }
}
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
$(".ui-slider-horizontal .ui-slider-handle").css({
    top: "-1.3em",
    background: "transparent",
    border: "5px solid transparent",
    borderTop: "20px solid #4c204e",
    width: "auto",
    height: "auto",
    borderRadius: "0px",
    marginLeft: "-0.5%",
});