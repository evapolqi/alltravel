let  change = ['picturestravel/photo\ \(1\).png', 'picturestravel/bg1.jpg', 'picturestravel/bg2.jpg', 'picturestravel/bg3.jpg']
function random(change) {
    let randome = Math.floor(Math.random() * change.length);
    return change[randome];
}
function get () {
    let find = document.getElementById('header_change');
    let img = random(change);
    find.style.backgroundImage = `url("${img}")`;
}
setInterval(get, 3000);