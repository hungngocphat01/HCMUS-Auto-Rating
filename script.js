var updated_time = "ngày 30/12/2020 (HK1 2020-2021)";

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

// Hàm trả về radio button rating* của hàng row trong trang page
function getRadioBtn(page, row, rating) {
    var radio_xpath = '/html/body/form/div[3]/div[6]/div[4]/div/div[2]/div[2]/div[' + String(page + 2) + ']/div[3]/table[' + String(row) + ']/tbody/tr/td[3]/input[ ' + String(rating) + ']';
    return getElementByXpath(radio_xpath);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  

// Hàm auto đánh giá
function DanhGia() {
    var cont = confirm("Cảnh báo: script này đã được cập nhật lần cuối vào " + updated_time + ", không đảm bảo sẽ tiếp tục hoạt động vào học kì sau đó. Bạn có muốn tiếp tục?");
    if (!cont) {
        return;
    }

    var type = confirm("Bấm OK nếu là môn lý thuyết, Cancel nếu là môn thực hành.");

    var rating = 0;
    do {
        rating = prompt("Nhập điểm (1 - 5) mà bạn muốn đánh giá cho tất cả các ô. Nếu muốn random, hãy nhập 2 số phân cách bởi dấu phẩy.");
        if (rating.search(",") != -1) {
            rating = rating.split(",");
            if (rating.length > 2) {
                rating.length = 2;
            }
            for (var i = 0; i < rating.length; i++) {
                rating[i] = parseInt(rating[i], 10);
                if (rating[i] < 1 || rating[i] > 5) {
                    alert("Chỉ được đánh giá từ 1 - 5.");
                    return;
                }
            }
        }
        else if (rating < 1 || rating > 5) {
            alert("Chỉ được đánh giá từ 1 - 5.");
            return;
        }
    } while (rating < 1 || rating > 5);

    // Lặp qua 4 trang
    for (var page = 1; page <= 4; page++) {
        // Xét số lượng tiêu chí trong mỗi trang
        var criteria_numbers = 0;
        switch (type) {
            // Môn lý thuyết
            case true:
                switch (page) {
                    case 1: 
                    case 2:
                        criteria_numbers = 5;
                        break;
                    case 3:
                        criteria_numbers = 6;
                        break;
                    case 4: 
                        criteria_numbers = 3;
                }
                break;
            
            // Môn thực hành
            case false:
                switch (page) {
                    case 1: 
                        criteria_numbers = 8;
                        break;
                    case 2:
                        criteria_numbers = 4;
                        break;
                    case 3:
                        criteria_numbers = 6;
                        break;
                    case 4: 
                        criteria_numbers = 3;
                }
                break;
        }
        
        for (var row = 1; row <= criteria_numbers; row++) {
            if (Array.isArray(rating)) {
                r = getRandomInt(rating[0], rating[1]);
            }
            else {
                r = rating;
            }
            var radio_btn = getRadioBtn(page, row, r);
            radio_btn.checked = true;
            console.log("Đã đánh giá trang ", page, " hàng ", row, " ", r, " điểm.");
        }
    }
    alert("Hoàn tất!");
}
