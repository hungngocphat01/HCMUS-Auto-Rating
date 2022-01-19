const structureLyThuyet = [5, 0, 4, 11, 0, 8, 0, 3];
const structureThucHanh = [6, 0, 4, 11, 4, 0, 3];

function danhGia(lt, star) {
    const struct = lt ? structureLyThuyet : structureThucHanh;
    for (let page = 0; page < struct.length; page++) {
        for (let row = 1; row <= struct[page]; row++) {
            // Luôn luôn đánh giá internet 1* (thực hành thì rate internet nằm ở dòng số 4)
            let trueStar = (page == 0 && row == 3 + !lt) ? 1 : star;
            const radioPath = `#section-${page} > div.section-questions-ranking > table:nth-child(${row}) > tbody > tr > td:nth-child(3) > input[type=radio]:nth-child(${trueStar})`;
            const button = document.querySelector(radioPath);
            button.checked = true;
        }
        const nextBtnPath = `#formActions > input[type=button]:nth-child(3)`;
        const nextBtn = document.querySelector(nextBtnPath);
        nextBtn.click();
    }
}
