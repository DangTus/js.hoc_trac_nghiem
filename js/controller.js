const searchParams = new URLSearchParams(window.location.search);
const action = searchParams.get("act") ? searchParams.get("act") : "home";
const mMain = document.getElementsByTagName("main")[0];
const title = " | Top 1 Trắc Nghiệm";
var url;

switch (action) {
    case "home":
        url = "pages/home.html";
        document.title = "Trang chủ" + title;
        break;

    case "study":
        url = "pages/study.html";
        document.title = "Học trắc nghiệm" + title;
        break;
}

// set content in main
fetch(url)
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        mMain.innerHTML = data;
    });
