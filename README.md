# HCMUS-Auto-Rating
Script JS đánh giá môn học tự động trên portal trường ĐH KHTN, ĐHQG-HCM.<br>
Script này được cập nhật lần cuối vào ngày 30/12/2020.
## Mục đích
- Lười. Kì nào cũng phải đánh giá gần chục môn, bấm hoài mỏi tay.
## Cách sử dụng
- Copy nội dung file `script.js` paste vào console của trình duyệt.
- Với mỗi môn, bấm vào phần `Đánh giá`, sau đó gọi hàm `DanhGia()`(gõ thủ công vào console trình duyệt).
- Làm theo hướng dẫn trên màn hình.
  - Chọn loại môn (lý thuyết hay thực hành).
  - Muốn đánh giá môn đó bao nhiêu "sao" (tất cả các mục).
  - Có thể cho số "sao" đánh giá nằm ngẫu nhiên trong 1 khoảng bằng cách gõ vào 2 đầu mút của khoảng đó, phân cách nhau bởi dấu gạch ngang `-`. Các "sao" được tạo ngẫu nhiên theo phân phối đều.
## Cách sử dụng nâng cao
- Có thể truyền trực tiếp 2 tham số là loại môn (`"lt"`, `"th"`) và điểm đánh giá vào hàm theo thứ tự đã nêu để tiết kiệm thời gian.
- Ví dụ: đánh giá môn lý thuyết tất cả đều 5 điểm:
  ```js
  DanhGia("lt", 5)
  ```
- Ví dụ: đánh giá môn thực hành random từ 3 tới 5 điểm:
  ```js
  DanhGia("th", "3-5");
  ```
## Tham khảo
Cấu trúc các trang đánh giá lý thuyết và thực hành (HK1, 2020-2021)
- Trang 1: 5 hoặc 8 tiêu chí
- Trang 2: 5 hoặc 4 tiêu chí
- Trang 3: 6 hoặc 6 tiêu chí
- Trang 4: 3 hoặc 3 tiêu chí
- Trang 5: câu hỏi tự trả lời

Một số mẫu xpath để tham chiếu get radio button
```js
Trang 1
/html/body/form/div[3]/div[6]/div[4]/div/div[2]/div[2]/div[3]/div[3]/table[1]/tbody/tr/td[3]/input[5]

Trang 2
// /html/body/form/div[3]/div[6]/div[4]/div/div[2]/div[2]/div[4]/div[3]/table[1]/tbody/tr/td[3]/input[5]

Trang 3
// /html/body/form/div[3]/div[6]/div[4]/div/div[2]/div[2]/div[5]/div[3]/table[1]/tbody/tr/td[3]/input[5]

Nút 4 trang 3
// /html/body/form/div[3]/div[6]/div[4]/div/div[2]/div[2]/div[5]/div[3]/table[4]/tbody/tr/td[3]/input[5]
```
