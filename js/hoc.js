var cau_hoi_html = document
    .getElementById("cau_hoi")
    .getElementsByTagName("span")[0];
var cau_tra_loi_html = document
    .getElementById("cau_tra_loi")
    .getElementsByTagName("span");
var abcd_html = document
    .getElementById("cau_tra_loi")
    .getElementsByTagName("strong");
var abcd = ["A. ", "B. ", "C. ", "D. "];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

fetch("../json/200_cau_hoi.json")
    .then(function (response) {
        return response.text();
    })
    .then(function (data_result) {
        dataArray = JSON.parse(data_result).data;

        //xáo trộn câu hỏi
        dataArrayRand = shuffle(dataArray);

        //lấy câu hỏi và câu trả lời
        cau_hoi = dataArrayRand[0].cau_hoi;
        cau_tra_loi = dataArrayRand[0].cau_tra_loi;

        //đổ câu hỏi và các câu trả lời ra web
        cau_hoi_html.innerHTML = cau_hoi;
        for (i = 0; i < 4; i++) {
            abcd_html[i].innerHTML = abcd[i];
            cau_tra_loi_html[i].innerHTML = cau_tra_loi[i];
        }
    });
