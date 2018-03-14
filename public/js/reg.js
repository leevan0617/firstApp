
window.onload = function () {
    let phone = document.querySelector("#phone");
    let form = document.querySelector("form");
    let info = document.querySelectorAll(".info");
    let get_code = document.querySelector(".get_code");
    let code = document.querySelector(".code");
    let pasd = document.querySelector("input[type='password']");
    let confirm_pasd = document.querySelector("#confirm_pawd");
    let submit = document.querySelector("#submit");
    let changeStyle = function (ele1, ele2, content, reg) {
        if (reg.test(ele1.value)) {
            ele2.style.color = "green";
            ele2.innerHTML = "√";
        } else {
            ele2.style.color = "red";
            ele2.innerHTML = content;
        }
    }
    phone.onblur = function () {
        let nameInfo = document.querySelector(".nameInfo");
        changeStyle(phone, nameInfo, "请输入正确的11位手机号", /^1\d{10}$/);
        if (nameInfo.innerHTML == "√"){
            $.post("/usersinfo/checkedName",{"phone":phone.value},(data) => {
                if (data.length != 0){
                    nameInfo.style.color = "red";
                    nameInfo.innerHTML = "你的电话号码已被注册！"
                }
            })
        }
    }
    code.onblur = function () {
        let codeInfo = document.querySelector(".codeInfo")
        changeStyle(code, codeInfo, "你的验证码位数不对", /^[0-9]{6}$/)
    }
    let pasdValue;
    pasd.onfocus = function () {
        let password_strength = document.querySelector(".password_strength");
        password_strength.style.display = "block";
    }
    pasd.onblur = function () {
        pasdValue = this.value;
        let password_strength = document.querySelector(".password_strength");
        password_strength.style.display = "none";
        let pasdInfo = document.querySelector(".pasdInfo");
        changeStyle(pasd, pasdInfo, "你输入的密码格式不对！", /^.{6,}$/)
    }
    confirm_pasd.onblur = function () {
        let confirm_info = document.querySelector(".confirm_info");
        if (pasdValue == confirm_pasd.value && confirm_pasd.value != "") {
            confirm_info.style.color = "green";
            confirm_info.innerHTML = "√";
        } else {
            confirm_info.style.color = "red";
            confirm_info.innerHTML = "你两次输入的密码不一致！";
        }
    }
    //验证提交
    form.onsubmit = function (e) {
        for (let i = 0; i < info.length; i++) {
            if (info[i].style.color != "green") {
                e.preventDefault();
                return;
            }
        }
    }
    //密码强度的判断
    let state = document.querySelectorAll(".state");
    let info_fn = function (index, color) {
        for (let i = 0; i < state.length; i++) {
            state[i].style.backgroundColor = "";
            if (i <= index) {
                state[i].style.backgroundColor = color;
                state[i].style.width = "86px";
            } else {
                if (state[i].backgroundColor) {
                    state[i].style.backgroundColor = "";
                    state[i].style.width = "0px";
                }
                state[i].style.backgroundColor = "";
                state[i].style.width = "0px";
            }
        }
    }
    //获取每次输入后的密码进行判断，这里采用权重的方式
    pasd.onkeyup = function () {
        let weight = 0;
        if (this.value.length >= 6 && this.value.length < 10) {
            weight++;
        } else if (this.value.length >= 10 && this.value.length < 17) {
            weight += 2;
        } else if (this.value.length > 20) {
            weight += 3;
        }
        if (this.value.search(/\d/) >= 0) {
            weight++;
        }
        if (this.value.search(/[a-z]/) >= 0) {
            weight++;
        }
        if (this.value.search(/[A-Z]/) >= 0) {
            weight++;
        }
        if (this.value.search(/[^[0-9a-zA-Z]/) >= 0) {
            weight++;
        }
        if (weight == 2) {
            info_fn(0, "#F76120")
        } else if (weight > 2 && weight < 5) {
            info_fn(1, "#FF8902")
        } else if (weight >= 5) {
            info_fn(2, "#5BAB3C")
        }
    }
}