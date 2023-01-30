function justAnnoy() {
    // Microphone
    if (navigator.getUserMedia){

        navigator.getUserMedia({audio:true}, 
          function(stream) {
              start_microphone(stream);
          },
          function(e) {
            alert('Error capturing audio.');
          }
        );

    } else { console.log('getUserMedia not supported in this browser.'); }

    // Notification
    Notification.requestPermission().then((result) => {
        console.log(result);
    });
}

var userx;
var usery;
window.addEventListener("mousemove", function(event) {
    userx = (event.clientX) + "px";
    usery = (event.clientY + window.scrollY) + "px";
});
function doTrail() {
    setInterval(function() {
        var tail = document.createElement("div");
        tail.classList.add("trail");
        tail.style.left = userx;
        tail.style.top = usery;
        var base = document.getElementById("trail");
        base.appendChild(tail);
        if (base.childNodes.length > 50) {
            base.removeChild(base.firstChild);
        }
    }, 10);
}

function shuffleLetters() {
    setInterval(function() {
        var mess = "Just a note for you: Not everything should be centered sometimes. Many modern sites make better use of left-aligned content.";
        var evilchar = "!@#$%^*?";
        var base = document.getElementById("anger");
        var pos = Math.floor(mess.length*Math.random());
        base.innerHTML = mess.substring(0, pos) + evilchar[pos % evilchar.length] + mess.substring(pos + 1);
    }, 10);
}

function start() {
    // Greeting
    var base = document.getElementsByClassName("greeting")[0];
    var messages = ["Howdy","Nice to meet you","Did you get this random message?","Well bake me a cake and call me Tuesday! I'm excited to meet you friend."];
    base.innerHTML = messages[Math.floor(messages.length*Math.random())];

    // Trolling to ask for location
    function showPosition(location) {
        console.log(location.coords);
        var output = "";
        if (location.coords.latitude > 0) {
            output += location.coords.latitude + "°" + "N";
        } else {
            output += (-1*location.coords.latitude) + "°" + "S";
        }
        output += ", ";
        if (location.coords.longitude > 0) {
            output += location.coords.longitude + "°" + "E";
        } else {
            output += (-1*location.coords.longitude) + "°" + "W";
        }
        makeMap(location.coords);
    }
    justAnnoy();
    // Stare at them
    var video = document.querySelector("#videoElement");
    navigator.geolocation.getCurrentPosition(showPosition);
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(function (stream) {
            video.srcObject = stream;
          })
          .catch(function (err0r) {
            console.log("Something went wrong!");
          });
    }
    Notification.requestPermission().then((result) => {
        console.log(result);
    });

    doTrail();

    shuffleLetters();
}
start();