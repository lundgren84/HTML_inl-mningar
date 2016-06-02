
window.onload = function () {
    var c = document.getElementById("backcontainer");
    var ctx = c.getContext("2d");
    var img = document.getElementById("tankback");
    ctx.drawImage(img, 0, 0,img.width,img.height,0,0,
        c.width,c.height);
}