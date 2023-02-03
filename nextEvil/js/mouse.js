var userx;
var usery;
var fakex;
var fakey;
var target = {clientX: 0, clientY: 0, active: false};
var SPEED = 3;

function updateUserPosition(event) {
    userx = event.clientX;
    usery = event.clientY + window.scrollY;
}
function updateMouse() {
    var mouse = document.getElementById("newMouse");
    if (mouse != null) {
        if (target.active) {
            var direction = (fakey - target.clientY)/(fakex - target.clientX);
            var cx = Math.abs(Math.sqrt(SPEED*SPEED/(1 + (direction*direction))));
            var cy = Math.abs(direction*cx);
            if (fakex < target.clientX) {
                fakex += SPEED*cx;
            }
            if (fakex > target.clientX) {
                fakex -= SPEED*cx;
            }
            if (fakey < target.clientY) {
                fakey += SPEED*cy;
            }
            if (fakey > target.clientY) {
                fakey -= SPEED*cy;
            }
        }
        mouse.style.left = fakex + "px";
        mouse.style.top = fakey + "px";
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
    out.clientY = (bound.top + bound.bottom)/2;
    return out;
}
function beginTheFun() {
    turnOffCursor();
    setInterval(updateMouse, 1);
    var newMouse = document.createElement("img");
    newMouse.classList.add("newMouse");
    if (navigator.platform.toUpperCase().includes("WIN")) {
        newMouse.src = "images/winCursor.png";
    } else {
        newMouse.src = "images/macCursor.png";
    }
    newMouse.id = "newMouse";
    document.body.appendChild(newMouse);
    
    target = getElementPosition(document.getElementById("target"));
    target.active = true;
}