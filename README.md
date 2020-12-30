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
  - Có thể cho số "sao" đánh giá nằm ngẫu nhiên trong 1 khoảng bằng cách gõ vào 2 đầu mút của khoảng đó, phân cách nhau bởi dấu gạch ngang `-`. Tuy nhiên, phân phối của các "sao" này không phải là phân phối chuẩn (1 giá trị nào đó có thể sẽ chiếm đa số).
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
