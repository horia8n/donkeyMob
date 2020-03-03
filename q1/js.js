function wait60s() {
    setTimeout(function () {
        showBanner()
    }, 100) // 60*1000
}

function showBanner() {
    document.getElementById('banner').style.display = 'block';
}

function closeBanner() {
    document.getElementById('banner').style.display = 'none';
}