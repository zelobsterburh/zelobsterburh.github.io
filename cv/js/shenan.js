function triggerAlerts() {
    var counter = 0;
    function alertEm() {
        alert("Are you still there?");
    }
    function confirmEm() {
        confirm("Are you still there?");
    }
    function askEm() {
        prompt("Are you still there? Type 'yes' to confirm.");
    }
    setInterval(function() {
        counter++;
        if (counter % 6 == 0) {
            askEm();
        } else if (counter % 2 == 0) {
            confirmEm();
        } else {
            alertEm();
        }
    }, 10000);
}

function jumpScare() {
    document.getElementById("jump").style.display = "block";
    setTimeout(function() {
        document.getElementById("jump").style.display = "none";
    }, 500);
}

function triggerShenanigans() {
    jumpScare();
    triggerAlerts();
}