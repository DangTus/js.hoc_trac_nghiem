const noi_dung_cau_hoi_html = document
    .getElementById("cau_hoi")
    .getElementsByTagName("span")[0];
const noi_dung_dap_an_html = document
    .getElementById("dap_an")
    .getElementsByTagName("span");
const abcd_html = document
    .getElementById("dap_an")
    .getElementsByTagName("strong");
const abcd = ["A. ", "B. ", "C. ", "D. "];

var dap_an_da_chon = null;
var dap_an_dung = null;
var bo_cau_hoi = null;
var cau_hoi_hien_tai = -1;

// sự kiện khi bắt đầu load trang
document.getElementsByTagName("body")[0].onload = function () {
    show_load();

    fetch("../json/bo_cau_hoi.json")
        .then(function (response) {
            return response.text();
        })
        .then(function (data_result) {
            dataArray = JSON.parse(data_result).data;

            //xáo trộn câu hỏi
            bo_cau_hoi = shuffle(dataArray);

            show_cau_hoi();
        });
};

function show_cau_hoi() {
    show_load();
    reset_css_item_dap_an();
    show_btn_tra_loi();

    cau_hoi_hien_tai += 1;

    //kiểm tra xem còn câu hỏi hay không, nếu không còn thì về trang chủ
    if (cau_hoi_hien_tai < bo_cau_hoi.length) {
        //lấy nội câu hỏi, câu trả lời và đáp án
        cau_hoi = bo_cau_hoi[cau_hoi_hien_tai].cau_hoi;
        dap_an = bo_cau_hoi[cau_hoi_hien_tai].dap_an;
        dap_an_dung = bo_cau_hoi[cau_hoi_hien_tai].dap_an_dung;

        //đổ câu hỏi và các câu trả lời ra web
        noi_dung_cau_hoi_html.innerHTML = cau_hoi;
        for (i = 0; i < 4; i++) {
            abcd_html[i].innerHTML = abcd[i];
            noi_dung_dap_an_html[i].innerText = dap_an[i];
        }
    } else {
        alert("Hết câu hỏi rồi");
        ve_trang_chu();
    }

    hide_load();
}

function click_dap_an(dap_an_da_click) {
    reset_css_item_dap_an();

    dap_an_da_click_html = document.getElementById("dap_an_" + dap_an_da_click);
    dap_an_da_click_html.classList.add("item-select");

    dap_an_da_chon = dap_an_da_click;
}

function kiem_tra_dap_an() {
    if (dap_an_da_chon) {
        item_dap_an = document.getElementById("dap_an_" + dap_an_da_chon);
        noi_dung_dap_an = item_dap_an.getElementsByTagName("span")[0].innerText;

        if (noi_dung_dap_an == dap_an_dung) {
            item_dap_an.classList.add("item-right");

            play_correct_audio();
        } else {
            item_dap_an.classList.add("item-wrong");
            show_dap_an_dung();

            play_wrong_audio();
        }

        show_btn_cau_tiep_theo();
    } else {
        alert("Vui lòng chọn đáp án");
    }
}

function reset_css_item_dap_an() {
    dap_an_html = document
        .getElementById("dap_an")
        .getElementsByClassName("item");

    dap_an_html_len = dap_an_html.length;
    for (i = 0; i < dap_an_html_len; i++) {
        dap_an_html[i].className = "item";
    }
}

function show_dap_an_dung() {
    dap_an_html = document
        .getElementById("dap_an")
        .getElementsByClassName("item");

    dap_an_html_len = dap_an_html.length;
    for (i = 0; i < dap_an_html_len; i++) {
        noi_dung_dap_an =
            dap_an_html[i].getElementsByTagName("span")[0].innerText;

        if (noi_dung_dap_an == dap_an_dung) {
            dap_an_html[i].classList.add("item-right");
            return;
        }
    }
}

function show_btn_cau_tiep_theo() {
    btn_tra_loi = document.getElementById("btn_tra_loi");
    btn_cau_tiep_theo = document.getElementById("btn_cau_tiep_theo");

    btn_tra_loi.classList.add("hidden");
    btn_cau_tiep_theo.classList.remove("hidden");
}

function show_btn_tra_loi() {
    btn_tra_loi = document.getElementById("btn_tra_loi");
    btn_cau_tiep_theo = document.getElementById("btn_cau_tiep_theo");

    btn_tra_loi.classList.remove("hidden");
    btn_cau_tiep_theo.classList.add("hidden");
}

// đây là hàm dùng để xáo trộn các phần tử trong mảng
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function show_load() {
    load = document.getElementsByClassName("load")[0];
    load.classList.remove("hidden");
}

function hide_load() {
    load = document.getElementsByClassName("load")[0];
    load.classList.add("hidden");
}

function play_correct_audio() {
    audio_correct = document.getElementById("audio_correct");
    audio_correct.play();
}

function play_wrong_audio() {
    audio_wrong = document.getElementById("audio_wrong");
    audio_wrong.play();
}

function ve_trang_chu() {
    location.href = "../";
}
