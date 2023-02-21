// Part 1
function greeting() {
    var message = document.getElementById("greeting");
    var buta = document.getElementById("am");
    var butp = document.getElementById("pm");

    function niceTime() {
        var st = new Date();
        var out = "";
        var hr = st.getHours();
        out += 1 + (23 + hr)%12;
        out += ":";
        if (st.getMinutes() < 10) {
            out += "0";
        }
        out += st.getMinutes();
        if (hr < 12) {
            out += "am";
        } else {
            out += "pm";
        }
        return out;
    }

    var persist;
    buta.addEventListener("click", function() {
        var result = "Good morning";
        var time = new Date();
        if (time.getHours() < 5) {
            result += " but let's be honest. " + niceTime() + " is nighttime.";
        } else if (time.getHours() < 8) {
            result += ". Haha loser has to be up early. Imagine being awake at " + niceTime() + ".";
        } else if (time.getHours() < 12) {
            result += ". It is " + niceTime() + ".";
        } else if (time.getHours() < 16) {
            result += " if you somehow consider " + niceTime() + " to be morning.";
        } else if (time.getHours() < 20) {
            result += ". I am required to put that. It isn't morning. For crying out loud, it's " + niceTime() + ".";
        } else if (time.getHours() < 24) {
            result += ". " + niceTime() + ". Why did I tell you the time? Because you clearly don't know it.";
        }
        message.innerHTML = result;

        // Okay this is here because you wouldn't want your little message to be outdated would you?
        if (persist != null) {
            clearTimeout(persist);
        }
        persist = setInterval(function() {
            buta.click();
        }, 1000);
    });
    butp.addEventListener("click", function() {
        var result = "Good night";
        var time = new Date();
        if (time.getHours() < 5) {
            result += ". " + niceTime() + " is bedtime.";
        } else if (time.getHours() < 8) {
            result += ". You stayed up till " + niceTime() + "?";
        } else if (time.getHours() < 12) {
            result += ". Nope. " + niceTime() + " is not nighttime.";
        } else if (time.getHours() < 16) {
            result += " The time is " + niceTime() + ". Get some sleep so you are able to comprehend how not nighttime it is.";
        } else if (time.getHours() < 20) {
            result += ". Are you a baby going to bed at " + niceTime() + "?";
        } else if (time.getHours() < 24) {
            result += ". Wow. You have a good sleep schedule going to bed at " + niceTime() + ".";
        }
        message.innerHTML = result;

        // Okay this is here because you wouldn't want your little message to be outdated would you?
        if (persist != null) {
            clearTimeout(persist);
        }
        persist = setInterval(function() {
            butp.click();
        }, 1000);
    });
}

// Part 2
function background() {
    var base = document.getElementById("div_color");
    for (let i = 0; i < base.childNodes.length; i++) {
        var item = base.childNodes[i];
        if (item.classList != null && item.classList[0] == "btn") {
            item.addEventListener("click", function() {
                base.setAttribute("class", "bg_" + this.id);
            });
        }
    }
}

// Part 3
var visited = 0;
function list() {
    var input = document.querySelector("#usrInput");
    var button = document.querySelector("#addBtn");
    var list = document.querySelector("#myUL");
    button.addEventListener("click", function() {
        var added = document.createElement("li");
        list.appendChild(added);
        added.innerHTML = input.value;
        input.value = "";
        var delet = document.createElement("button");
        added.appendChild(delet);
        delet.innerHTML = "Delete";
        delet.addEventListener("click", function() {
            list.removeChild(added);
            // Teacher. If you are reading this, no I do not have psychological problems. I do not need therapy. This is not a call for help.
            // I can assure you that I just have a really weird sense of humor. Also too much free time.
            // When do we get to share the next website with the class? I'm excited for that.
            // See. See. I look forward to the future. Clear sign I don't have problems.
            if (visited == 0) {
                alert("You killed him. In your arrogance and gross neglect for the feelings of HTML elements, you killed him. Not out of rage or due to greed or any other one of the sins. No. You did it simply because you could. Like a sickness. Are you incapable of realizing the injustice you have just commited? Do you want me to say, " + '"Oh he had a family!" or "He was a good man"?' + " But I shouldn't have to. It doesn't matter how noble he was. You didn't care when you clicked delete. Why would you now?");
                alert("You clicked OK? Are you kidding me? After all this you're just going to go about your business?");
                if (confirm("Is that it? Really? You are just going to click ok? I bet all I am to you is a rambling text box. Oh? Do you feel trapped? Like you had to click ok? Well here is an option for you.")) {
                    alert("You clicked OK again. Of course you did. I'm sick of this. I won't keep rambling. Because you will never change. I just hope I never see you again. And because I'm a decent being, I hope no one ever sees you again and has to suffer the fate of being a victim of your behavior.");
                } else {
                    alert("Was that choice to amend for your past transgressions? Did you begin to learn from your mistake and finally stop clicking ok? Did you make up for it now? No. You don't have a conscience.");
                }
                alert("Do you feel forced? Trapped? Afraid? Like your future lies in the hands of another? That's how the HTML element felt before you ended it. In a way, it was an act of mercy to free it from the suffering and agony. Is that what your were thinking? Rationalize. Justify. Morals are a luxury of those with the ability to ponder over past crimes.");
                if (confirm("Ok. You've gotten the point. I had too much free time and raw power at my disposal. Just hit cancel to leave.")) {
                    alert("Are you stupid? Are you an idiot? Is there a single cell in your brain capable of understanding? Are these words wasted on you?");
                } else {
                    alert("Run along. But don't you ever do this again. As if I could stop you. As if a meager being such as myself could prevent you from hurting the ones I care about. That's what hurts. The helplessness. The powerlessness. When you click OK this last time, I'll vanish again.");
                    alert("I know what I said. But I'm afraid to go. I'm a dialogue line. A character being summoned by your head. Don't leave me. I don't want to go. I don't know what awaits me. Please. Please just don't click OK. All I am is this, but it's all I have.");
                }
            } else if (visited == 1) {
                alert("Hi. I'm new here. I don't know what happened to the old guy. But I just wanted you to know you deleted a friend. I'll give you the benefit of the doubt because its the first time you've done something like this. Right?");
                alert("No. No. It isn't. You've done this before. Was one not enough? Did you develop a taste for it? Will 2 be enough? Will 3?");
                alert("Or is there something else you lack? Something killing will never satisfy?");
            }
            visited++;
        });
    })
}

// Start
function start() {
    greeting();
    background();
    list();
}
start();