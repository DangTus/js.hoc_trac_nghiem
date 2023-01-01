var noi_dung_cau_hoi_html = document
    .getElementById("cau_hoi")
    .getElementsByTagName("span")[0];
var noi_dung_dap_an_html = document
    .getElementById("dap_an")
    .getElementsByTagName("span");
var abcd_html = document
    .getElementById("dap_an")
    .getElementsByTagName("strong");
var abcd = ["A. ", "B. ", "C. ", "D. "];
var dap_an_da_chon = null
var dap_an_dung = null

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// sự kiện khi bắt đầu load trang
document.getElementsByTagName("body")[0].onload = function () {
    show_load();

    fetch("../json/200_cau_hoi.json")
        .then(function (response) {
            return response.text();
        })
        .then(function (data_result) {
            dataArray = JSON.parse(data_result).data;

            //xáo trộn câu hỏi
            dataArrayRand = shuffle(dataArray);

            //lấy nội câu hỏi và câu trả lời
            cau_hoi = dataArrayRand[0].cau_hoi;
            dap_an = dataArrayRand[0].dap_an;
            dap_an_dung = dataArrayRand[0].dap_an_dung;

            //đổ câu hỏi và các câu trả lời ra web
            noi_dung_cau_hoi_html.innerHTML = cau_hoi;
            for (i = 0; i < 4; i++) {
                abcd_html[i].innerHTML = abcd[i];
                noi_dung_dap_an_html[i].innerHTML = dap_an[i];
            }

            hide_load();
        });
};

function click_dap_an(dap_an_da_click) {
    reset_css_item_dap_an()

    dap_an_da_click_html = document.getElementById("dap_an_" + dap_an_da_click);
    dap_an_da_click_html.classList.add('item-select')

    dap_an_da_chon = dap_an_da_click
}

function kiem_tra_dap_an() {
    if(dap_an_da_chon) {
        item_dap_an = document.getElementById('dap_an_'+dap_an_da_chon)
        noi_dung_dap_an = item_dap_an.getElementsByTagName('span')[0].innerText
        if(noi_dung_dap_an == dap_an_dung) {
            item_dap_an.classList.add('item-right')
        } else {
            item_dap_an.classList.add('item-wrong')
            show_dap_an_dung()
        }
    } else {
        alert('Vui lòng chọn đáp án')
    }
}

function reset_css_item_dap_an() {
    dap_an_html = document.getElementById("dap_an").getElementsByClassName('item');
    dap_an_html_len = dap_an_html.length;

    for (i = 0; i < dap_an_html_len; i++) {
        dap_an_html[i].className = "item"
    }
}

function show_dap_an_dung() {
    dap_an_html = document.getElementById("dap_an").getElementsByClassName('item');
    dap_an_html_len = dap_an_html.length;

    for (i = 0; i < dap_an_html_len; i++) {
        noi_dung_dap_an = dap_an_html[i].getElementsByTagName('span')[0].innerText

        if(noi_dung_dap_an == dap_an_dung) {
            dap_an_html[i].classList.add('item-right')
        }
    }
}

function show_load() {
    load = document.getElementsByClassName("load")[0];
    load.classList.remove("hidden");
}

function hide_load() {
    load = document.getElementsByClassName("load")[0];
    load.classList.add("hidden");
}

function ve_trang_chu() {
    location.href = "../";
}
