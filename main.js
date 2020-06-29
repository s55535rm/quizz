let que = document.getElementById("que");
let res = document.getElementById("res");
let logo = document.getElementById("logo");
let maru = document.getElementById("maru");
let batsu = document.getElementById("batsu");
let cnt = 20;
let sco = 0;
let flag = true;
let time = setInterval(() => {
    if (cnt > 0) {
        cnt--;
        res.textContent = "スコア : " + sco + " | 時間 : " + cnt + "秒";
    } else {
        res.style.color = "red";
        res.textContent = "スコア : " + sco + " | 終了";
        que.textContent = "時間切れ!";
        flag = false;
        clearInterval(time);
    }
}, 1000);
let num = 0;
let max = 10;
let name = new Array(max);
name = [
    "ベイちゃん",
    "きの山さん",
    "ハッピー王子",
    "マーチくん",
    "赤いくじら",
    "チップス坊や",
    "うまえもん",
    "キョロさん",
    "カールおじさん",
    "ペコちゃん",
];
let seikai = new Array(max);
seikai = ["○", "○", "×", "○", "×", "×", "○", "×", "○", "○"];
maru.addEventListener("click", () => {
    answer("○");
});
batsu.addEventListener("click", () => {
    answer("×");
});
let answer = (str) => {
    if (flag) {
        if (seikai[num] == str) {
            que.textContent = "問題" + (num + 1) + "正解";
            sco++;
            res.textContent = "スコア : " + sco + " | 時間 : " + cnt + "秒";
        } else {
            que.textContent = "問題" + (num + 1) + "不正解";
        }
        num++;
        if (num < max) {
            setTimeout(() => {
                que.textContent = "問題" + (num + 1) + " " + name[num];
                logo.src = "img/logo" + num + ".png";
            }, 500);
        } else {
            que.textContent = "問題の回答終了!";
            clearInterval(time);
            if (sco == max) {
                que.textContent = "全問正解! おめでとう!";
                logo.src = "img/clear.png";
            }
        }
    }
};