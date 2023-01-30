function Advert(name, image) {
    this.name = name;
    this.image = image;
}

const adlist = [
    new Advert("Target", "https://shop-eat-surf.com/wp-content/uploads/2020/11/target-logo-resized.jpg"),
    new Advert("Amazon", "https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png")
];

function show() {
    var ad = adlist[Math.floor(adlist.length*Math.random())];
    document.getElementById("img").src = ad.image;
    document.getElementById("name").innerHTML = ad.name;
    document.getElementById("section").classList.add(ad.name);
}
show();