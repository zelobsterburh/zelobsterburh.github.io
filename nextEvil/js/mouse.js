var userx;
var usery;
var fakex;
var fakey;
var target = {clientX: 0, clientY: 0, active: false, clicked: true};
var SPEED = 3;
var updateInterval;

function updateUserPosition(event) {
    userx = event.clientX;
    usery = event.clientY + window.scrollY;
}
function updateMouse() {
    // Move mouse
    var mouse = document.getElementById("newMouse");
    if (mouse != null && mouse.style.display != "none") {
        if (target.active) {
            var direction = (fakey - target.clientY)/(fakex - target.clientX);
            var cx = Math.abs(Math.sqrt(SPEED*SPEED/(1 + (direction*direction))));
            var cy = Math.abs(direction*cx);
            var distance = Math.sqrt(Math.pow(fakex - target.clientX, 2) + Math.pow(fakey - target.clientY, 2));
            var tspeed = SPEED*(distance/50);
            if (fakex < target.clientX) {
                fakex += tspeed*cx;
            }
            if (fakex > target.clientX) {
                fakex -= tspeed*cx;
            }
            if (fakey < target.clientY) {
                fakey += tspeed*cy;
            }
            if (fakey > target.clientY) {
                fakey -= tspeed*cy;
            }
        }
        if (!target.clicked && Math.abs(fakex - target.clientX) < 3 && Math.abs(fakey - target.clientY) < 3) {
            target.clicked = true;
        }
        mouse.style.left = fakex + "px";
        mouse.style.top = fakey + "px";
    }
    if (mouse != null) {
        // Get hover info
        var fbut = document.getElementsByClassName("fakeButton");
        if (navigator.platform.toUpperCase().includes("WIN")) {
            newMouse.src = "images/winCursor.png";
        } else {
            newMouse.src = "images/macCursor.png";
        }
        for (let i = 0; i < fbut.length; i++) {
            var tob = fbut[i];
            var bor = tob.getBoundingClientRect();
            if (mouse.style.display != "none" && bor.left <= fakex && bor.right >= fakex && bor.top <= fakey && bor.bottom >= fakey) {
                tob.classList.add("fakeHover");
                if (navigator.platform.toUpperCase().includes("WIN")) {
                    newMouse.src = "images/winPointer.png";
                } else {
                    newMouse.src = "images/macCursor.png";
                }
            } else {
                tob.classList.remove("fakeHover");
            }
        }
    }
}
window.addEventListener("mousemove", updateUserPosition);
document.body.addEventListener("mouseleave", function(event) {
    var mouse = document.getElementById("newMouse");
    if (mouse != null) {
        mouse.style.display = "none";
    }
})
document.body.addEventListener("mouseenter", function(event) {
    var mouse = document.getElementById("newMouse");
    if (mouse != null) {
        updateUserPosition(event);
        fakex = userx;
        fakey = usery;
        updateMouse();
        setTimeout(function() {
            mouse.style.display = "block";
        }, 10);
    }
})
function turnOffCursor() {
    fakex = userx;
    fakey = usery;
    document.body.style.cursor = "none";
}

function getElementPosition(element) {
    var bound = element.getBoundingClientRect();
    var out = {clientX: 0, clientY: 0, active: false};
    out.clientX = (bound.left + bound.right)/2;
    out.clientY = 0.3*bound.top + 0.7*bound.bottom;
    return out;
}
function prepMouse() {
    turnOffCursor();
    updateInterval = setInterval(updateMouse, 1);
    var newMouse = document.createElement("img");
    newMouse.classList.add("newMouse");
    if (navigator.platform.toUpperCase().includes("WIN")) {
        newMouse.src = "images/winCursor.png";
    } else {
        newMouse.src = "images/macCursor.png";
    }
    newMouse.id = "newMouse";
    document.body.appendChild(newMouse);
}
function endMouse() {
    var base = document.getElementById("buttonBox");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    document.getElementById("prompt").innerHTML = "Thank you for completing the survey.";

    target.clientX = userx;
    target.clientY = usery;
    setTimeout(function() {
        clearInterval(updateInterval);
        
        document.body.removeChild(document.getElementById("newMouse"));
        document.body.style.cursor = "inherit";
    }, 100);
}

function beginTheFun() {
    prepMouse();

    var nextStep;
    function doQuestion(input) {
        clearInterval(nextStep);
        var pro = questionList[input];
        document.getElementById("prompt").innerHTML = pro.prompt;
        var base = document.getElementById("buttonBox");
        while (base.firstChild) {
            base.removeChild(base.firstChild);
        }
        for (let j = 0; j < pro.answers.length; j++) {
            var element = document.createElement("text");
            element.id = "fak" + j;
            element.classList.add("fakeButton");
            element.innerHTML = pro.answers[j];
            base.appendChild(element);
        }

        var step = 0;
        function getMS() {
            var time = new Date();
            return time.getMilliseconds() + 1000*time.getSeconds() + 1000*60*time.getMinutes();
        }
        var countdown = getMS();
        nextStep = setInterval(function() {
            if (target.clicked != true) {
                return;
            }
            if (step < pro.directions.length) {
                if (step == 0) {
                    target = getElementPosition(document.getElementById("delay"));
                    target.active = true;
                    target.clicked = false;
                    step = 0.1;
                } else {
                    if (getMS() - countdown >= 1000) {
                        if (step == 0.1) {
                            step = 0;
                        }
                        if (step == pro.directions.length - 2) {
                            setTimeout(function() {
                                var bas = document.getElementById("fak" + pro.directions[step])
                                if (bas != null) {
                                    bas.classList.add("fakeClick");
                                }
                            }, 800);
                        }
                        target = getElementPosition(document.getElementById("fak" + pro.directions[step]));
                        target.active = true;
                        target.clicked = false;
                        step++;
                        countdown = getMS();
                    } else {
                        countdown--;
                    }
                }
            } else {
                if (questionList.length > input + 1) {
                    doQuestion(input + 1);
                } else {
                    endMouse();
                    clearInterval(nextStep);
                }
            }
        }, 1);
    }
    doQuestion(0);
}