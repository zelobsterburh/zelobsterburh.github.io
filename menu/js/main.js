function makeSite(site) {
    var base = document.getElementById("siteList");
    var item = document.createElement("a");
    item.innerHTML = site.name;
    item.href = site.link;
    base.appendChild(item);
}
function addSites() {
    for (let i = 0; i < siteList.length; i++) {
        makeSite(siteList[i]);
    }
}
addSites();