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
    // Head to EMPLOYER location
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
}
start();
var trail = [];
document.body.addEventListener("mousemove", function(event) {
    //console.log(event);
    var tail = document.createElement("div");
    trail.push(tail);
    tail.classList.add("trail");
    tail.style.left = (event.clientX) + "px";
    tail.style.top = (event.clientY + window.scrollY) + "px";
    document.getElementById("trail").appendChild(tail);
    setTimeout(function() {
        document.getElementById("trail").removeChild(trail[0]);
        trail.splice(0, 1);
    }, 500);
});