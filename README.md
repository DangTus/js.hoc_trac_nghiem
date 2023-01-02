# Web học trắc nghiệm
- Mô tả dự án
Đây là web giúp bạn học trắc nghiệm

- Cách sử dụng
Bước 1: Thay đổi bộ câu hỏi trong file json/cau_hoi.json theo mẫu dưới
```
{
    "data": [
        {
            "cau_hoi": "Câu nào sau đây không là mệnh đề?",
            "dap_an": [
                "x > 2",
                "3 < 1",
                "4 – 5 = 1",
                "Tam giác đều là tam giác có ba cạnh bằng nhau."
            ],
            "dap_an_dung": "x > 2"
        },
        {
            "cau_hoi": "Trong các câu sau, câu nào không phải là mệnh đề?",
            "dap_an": [
                "Buồn ngủ quá!",
                "Hình thoi có hai đường chéo vuông góc với nhau.",
                "8 là số chính phương.",
                "Băng Cốc là thủ đô của Mianma."
            ],
            "dap_an_dung": "Buồn ngủ quá!"
        }
    ]
}
```
Bước 2: Chạy app

- Link mẫu
https://dangtus.github.io/js.hoc_trac_nghiem/
