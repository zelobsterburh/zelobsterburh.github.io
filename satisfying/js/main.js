const WIDTH = 30;
const HEIGHT = 15;
const DISPERSE = 1;
function buttonId(x, y) {
    return "b(" + x + "," + y + ")";
}
function buttonGetX(id) {
    return parseInt(id.substring(2, id.indexOf(",")));
}
function buttonGetY(id) {
    return parseInt(id.substring(id.indexOf(",") + 1, id.indexOf(")")));
}
function getRadius(r, value) {
    var out = [];
    for (let i = Math.floor(-1*r); i <= Math.ceil(r); i++) {
        for (let j = Math.floor(-1*r); j <= Math.ceil(r); j++) {
            if ((i != 0 || j != 0) && (i*i + j*j <= r*r)) {
                var power = 1/(i*i + j*j);
                var loc = [i, j, power*0.95*value];
                if (loc[2] > 0.1) {
                    out.push(loc);
                }
            }
        }
    }
    return out;
}
function wave(base) {
    var x = buttonGetX(base.id);
    var y = buttonGetY(base.id);
    var targets = getRadius(3, base.value);
    for (let i = 0; i < targets.length; i++) {
        targets[i][0] += x;
        targets[i][1] += y;
    }
    var pushList = [];
    for (let i = 0; i < targets.length; i++) {
        if (targets[i][0] >= 0 && targets[i][0] < HEIGHT && targets[i][1] >= 0 && targets[i][1] < WIDTH) {
            var item = document.getElementById(buttonId(targets[i][0], targets[i][1]));
            if (item.value < targets[i][2]) {
                item.value = targets[i][2];
                if (!pushList.includes(item)) {
                    pushList.push(item);
                }
            }
        }
    }
    for (let i = 0; i < pushList.length; i++) {
        pushList[i].click();
    }
}
function spread(id) {
    var meItem = document.getElementById(id);
    meItem.style.backgroundColor = "rgb(" + Math.floor(meItem.value*255) + ",0,0)";
    setTimeout(function() {
        wave(meItem);
    }, DISPERSE);
    setTimeout(function() {
        meItem.style.backgroundColor = "#000000";
    }, 100*DISPERSE);
    setTimeout(function() {
        meItem.value = 0;
    }, 100*DISPERSE);
}
function makeButtons() {
    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            var button = document.createElement("button");
            button.id = buttonId(i, j);
            button.value = 0;
            button.addEventListener("mousedown", function() {
                this.value = 1;
                spread(this.id);
            });
            button.addEventListener("click", function() {
                spread(this.id);
            });
            document.getElementById("buttonGrid").appendChild(button);
        }
    }
}
function start() {
    makeButtons();
}
start();