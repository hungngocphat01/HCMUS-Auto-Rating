# HCMUS-Auto-Rating
Script JS đánh giá môn học tự động trên portal trường ĐH KHTN, ĐHQG-HCM.<br>
Script này được cập nhật lần cuối vào ngày 21/09/2021.
## Mục đích
- Lười. Kì nào cũng phải đánh giá gần chục môn, bấm hoài mỏi tay.
## Cách sử dụng
- Với mỗi môn, bấm vào phần `Đánh giá` sao cho hiện ra trang đánh giá đầu tiên.
- Copy nội dung file `script.js` vào console trình duyệt (F12 -> Console).
- Gọi hàm đánh giá: 
```js
danhGia(lt, star);
```
Trong đó `lt = true` nếu là môn lý thuyết, `false` nếu là môn thực hành.
Ví dụ: nếu môn muốn đánh giá là môn thực hành và muốn đánh giá tất cả là 5 sao, gọi hàm:
```js 
danhGia(false, 5);
```

## Note
Javascript selector của các button trong trang đánh giá
```
(page, row, button)
(p, r, b) #section-p > div.section-questions-ranking > table:nth-child(r) > tbody > tr > td:nth-child(3) > input[type=radio]:nth-child(b)
========================================================================================================================================
(1, 1, 3) #section-0 > div.section-questions-ranking > table:nth-child(1) > tbody > tr > td:nth-child(3) > input[type=radio]:nth-child(3)
(1, 1, 5) #section-0 > div.section-questions-ranking > table:nth-child(1) > tbody > tr > td:nth-child(3) > input[type=radio]:nth-child(5)
(1, 2, 5) #section-0 > div.section-questions-ranking > table:nth-child(2) > tbody > tr > td:nth-child(3) > input[type=radio]:nth-child(5)
(1, 3, 4) #section-0 > div.section-questions-ranking > table:nth-child(3) > tbody > tr > td:nth-child(3) > input[type=radio]:nth-child(4)
(3, 1, 5) #section-2 > div.section-questions-ranking > table:nth-child(1) > tbody > tr > td:nth-child(3) > input[type=radio]:nth-child(5)


Next btn: #formActions > input[type=button]:nth-child(3)
#formActions > input[type=button]:nth-child(3)

Năm 2021 mà wifi của trường như mạng dial-up
```
