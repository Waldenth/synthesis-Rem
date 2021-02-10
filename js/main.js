// 随机block
var SUCCESS = [1, 2, 3, 4, 5, 6, 7, 8, 0];
var end = ['3', '0', '1', '2'];
var emptyPosition = 8; // 空格的位置
var step = 0;
var level = 0;
var test = [2, 1, 3, 4, 5, 6, 7, 8, 0];
var levelNum = 4;
var row = 2;
var column = 2;
var puzzleSize = 150;


function randomBlock() {
    step = 0;
    $(".step").html(step);
    var arr = $.extend([], SUCCESS);

    var needRandomTimes = Math.pow(Math.floor(row * column), 2);
    var blankBlockIndex = row * column - 1;
    var swapBlockIndex = -1;
    var lastDirection = -1;
    var curRandomTime = 0;
    while (true) {
        var direction = Math.floor((Math.random() * 5));
        switch (direction) {
            case 0:
                swapBlockIndex = blankBlockIndex - column;
                if (swapBlockIndex < (row * column) && swapBlockIndex >= 0 && direction != lastDirection) {
                    arr[blankBlockIndex] = arr[swapBlockIndex];
                    arr[swapBlockIndex] = 0;
                    lastDirection = direction;
                    blankBlockIndex = swapBlockIndex;
                    curRandomTime++;
                }
                break;
            case 1:
                swapBlockIndex = blankBlockIndex + 1;
                if (Math.floor(swapBlockIndex / column) != Math.floor(blankBlockIndex / column)) {
                    break;
                }
                if (swapBlockIndex < (row * column) && swapBlockIndex >= 0 && direction != lastDirection) {
                    arr[blankBlockIndex] = arr[swapBlockIndex];
                    arr[swapBlockIndex] = 0;
                    lastDirection = direction;
                    blankBlockIndex = swapBlockIndex;
                    curRandomTime++;
                }
                break;
            case 2:
                swapBlockIndex = blankBlockIndex + column;
                if (swapBlockIndex < (row * column) && swapBlockIndex >= 0 && direction != lastDirection) {
                    arr[blankBlockIndex] = arr[swapBlockIndex];
                    arr[swapBlockIndex] = 0;
                    lastDirection = direction;
                    blankBlockIndex = swapBlockIndex;
                    curRandomTime++;
                }
                break;
            case 3:
                swapBlockIndex = blankBlockIndex - 1;
                if (Math.floor(swapBlockIndex / column) != Math.floor(blankBlockIndex / column)) {
                    break;
                }
                if (swapBlockIndex < (row * column) && swapBlockIndex >= 0 && direction != lastDirection) {
                    arr[blankBlockIndex] = arr[swapBlockIndex];
                    arr[swapBlockIndex] = 0;
                    lastDirection = direction;
                    blankBlockIndex = swapBlockIndex;
                    curRandomTime++;
                }
                break;
            default:
                break;
        }
        if (curRandomTime >= needRandomTimes) {
            break;
        }
    }

    for (var i in arr) {
        if (arr[i] == 0) {
            emptyPosition = parseInt(i);
        }
        $("#main>div").eq(arr[i]).attr('data-index', i).css({
            left: puzzleSize * (i % column),
            top: puzzleSize * (Math.floor(i / column))
        })
    }
}



function changeAlbum() {
    switch (level) {
        case 0: //2x2
            SUCCESS = [1, 2, 3, 0];
            end = ['3', '0', '1', '2'];
            row = 2;
            column = 2;
            puzzleSize = 120;
            $("#main").append("<div id='block_0' class='emptyessential'></div>");
            $("#main").append("<div id='block_1' class='blockessential'><span>1</span></div>");
            $("#main").append("<div id='block_2' class='blockessential'><span>2</span></div>");
            $("#main").append("<div id='block_3' class='blockessential'><span>3</span></div>");

            $("#main").addClass("main22");
            $("block_0").addClass("empty22");
            $("div.blockessential").addClass("block22");

            $(".answer").css({
                "width":"90px",
                "height":"90px",
            });

            break;
        case 1://2x3
            SUCCESS = [1, 2, 3, 4, 5, 0];
            end = ['5', '0', '1', '2', '3', '4'];
            row = 3;
            column = 2;
            puzzleSize = 100;
            $("#main").append("<div id='block_4' class='blockessential'><span>4</span></div>");
            $("#main").append("<div id='block_5' class='blockessential'><span>5</span></div>");

            $("#main").removeClass("main22");
            $("block_0").removeClass("empty22");
            $("div.blockessential").removeClass("block22");
            
            $("#main").addClass("main23");
            $("block_0").addClass("empty23");
            $("div.blockessential").addClass("block23");

            $(".answer").css({
                "width":"80px",
                "height":"120px",
            });

            break;
        case 2: //3x3
            SUCCESS = [1, 2, 3, 4, 5, 6, 7, 8, 0];
            end = ['8', '0', '1', '2', '3', '4', '5', '6', '7'];
            row = 3;
            column = 3;
            puzzleSize = 100;
            $("#main").append("<div id='block_6' class='blockessential'><span>6</span></div>");
            $("#main").append("<div id='block_7' class='blockessential'><span>7</span></div>");
            $("#main").append("<div id='block_8' class='blockessential'><span>8</span></div>");

            $("#main").removeClass("main23");
            $("block_0").removeClass("empty23");
            $("div.blockessential").removeClass("block23");
            
            $("#main").addClass("main33");
            $("block_0").addClass("empty33");
            $("div.blockessential").addClass("block33");

            $(".answer").css({
                "width":"120px",
                "height":"120px",
            });

            break;
        case 3: //4x3
            SUCCESS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0];
            end = ['11', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
            row = 4;
            column = 3;
            puzzleSize = 110;
            $("#main").append("<div id='block_9' class='blockessential'><span>9</span></div>");
            $("#main").append("<div id='block_10' class='blockessential'><span>10</span></div>");
            $("#main").append("<div id='block_11' class='blockessential'><span>11</span></div>");

            $("#main").removeClass("main33");
            $("block_0").removeClass("empty33");
            $("div.blockessential").removeClass("block33");
            
            $("#main").addClass("main43");
            $("block_0").addClass("empty43");
            $("div.blockessential").addClass("block43");

            $(".answer").css({
                "width":"90px",
                "height":"120px",
            });
            
            break;
        default:
            location.reload();
            break;
    }

    $("div.blockessential > span").css({
        "display": "none",
        "text-shadow": "4px 4px 4px #fff",
    });

    $("div.blockessential").css(
        "background-image", 'url(img/bg_' + level + '.jpg)'
    );

    for (var i = 1; i < row * column; i++) {
        var left = ((i - 1) % column) * puzzleSize;
        var top = (Math.floor((i - 1) / column)) * puzzleSize;
        $("#block_" + i.toString()).css(
            "background-position", "-" + left.toString() + "px" + " " + "-" + top.toString() + "px"
        );
    }
}

function change() {
    changeAlbum();
    $('.answer').css('background-image', 'url(img/bg_' + level + '.jpg)');
    randomBlock();
}

function updatePosition(p1, p2) {
    var tmpl = [];
    emptyPosition = p2;
    step++;
    $(".step").html(step);
    $("#main>div").each(function () {
        tmpl.push($(this).attr('data-index'));
    });

    if (tmpl.toString() == end.toString()) {
        level = level + 1;
        if (level != levelNum) {
            $("#success").show();
        } else {
            $("#allSuccess").show();
        }
    }
}

function up() {
    if (emptyPosition < row * column - column) {
        var targetIndex = parseInt(emptyPosition) + column;
        $("#main>div[data-index='" + targetIndex + "']").animate({
            top: '-=' + puzzleSize.toString() + 'px'
        }, 100, function () {
            $(this).attr('data-index', targetIndex - column)
        });

        $("#main>div[data-index='" + emptyPosition + "']").animate({
            top: '+=' + puzzleSize.toString() + 'px'
        }, 100, function () {
            $(this).attr('data-index', targetIndex);
            updatePosition(emptyPosition, targetIndex);
        });

    }
}

function down() {
    if (emptyPosition > column - 1) {
        var targetIndex = parseInt(emptyPosition) - column;
        $("#main>div[data-index='" + targetIndex + "']").animate({
            top: '+=' + puzzleSize.toString() + 'px'
        }, 100, function () {
            $(this).attr('data-index', targetIndex + column)
        });

        $("#main>div[data-index='" + emptyPosition + "']").animate({
            top: '-=' + puzzleSize.toString() + 'px'
        }, 100, function () {
            $(this).attr('data-index', targetIndex);
            updatePosition(emptyPosition, targetIndex);

        });
    }
}

function left() {
    if (emptyPosition % column < column - 1) {
        var targetIndex = parseInt(emptyPosition) + 1;
        $("#main>div[data-index='" + targetIndex + "']").animate({
            left: '-=' + puzzleSize.toString() + 'px'
        }, 100, function () {
            $(this).attr('data-index', targetIndex - 1)
        });

        $("#main>div[data-index='" + emptyPosition + "']").animate({
            left: '+=' + puzzleSize.toString() + 'px'
        }, 100, function () {
            $(this).attr('data-index', targetIndex);
            updatePosition(emptyPosition, targetIndex);
        });

    }
}

function right() {
    if (emptyPosition % column > 0) {
        var targetIndex = parseInt(emptyPosition) - 1;
        $("#main>div[data-index='" + targetIndex + "']").animate({
            left: '+=' + puzzleSize.toString() + 'px'
        }, 100, function () {
            $(this).attr('data-index', targetIndex + 1)
        });

        $("#main>div[data-index='" + emptyPosition + "']").animate({
            left: '-=' + puzzleSize.toString() + 'px'
        }, 100, function () {
            $(this).attr('data-index', targetIndex);
            updatePosition(emptyPosition, targetIndex);
        });
    }
}

$(document).ready(function () {
    change();
}).on('keydown', function (e) {
    if (!$("#main>div").is(":animated")) {
        //alert(e.keyCode);
        switch (e.keyCode) {
            case 38: //上
                up();
                break;
            case 40: //下
                down();
                break;
            case 37: //左(开启输入法时无效)
                left()
                break;
            case 39: //右
                right();
                break;
            default:
                return;
        }
    }
}).on('click', '.reset', function () {
    //a=window.open('')
    //a.document.write(document.body.innerHTML)
    randomBlock();
    $("#allSuccess").hide();
    $("#success").hide();
}).on('click', '#showNum', function () {
    $("#main>div>span").toggle();
}).on('click', '#showAnswer', function () {
    $(".answer").toggle();
}).on('click', '.nextLevel', function () {
    if (level == levelNum) {
        level = 0;
        location.reload();
    } else {
        change();
        $("#allSuccess").hide();
        $("#success").hide();
    }
});


touch.on(document, 'swipeleft', left);
touch.on(document, 'swiperight', right);
touch.on(document, 'swipeup', up);
touch.on(document, 'swipedown', down);