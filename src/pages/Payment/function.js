var flag = 0;
var flag1 = 0;
export function setColorYes() {
    var property = document.getElementById("btYes");
    var noproperty = document.getElementById("btNo");
    if (flag === 0) {
        property.style.backgroundColor = "#77ACC7";
        property.style.color = "white";
        flag = 1;
    } else if (flag === 1) {
        property.style.backgroundColor = "white";
        property.style.color = "black";
        flag = 0;
    } else if (flag === 2) {
        noproperty.style.backgroundColor = "white";
        property.style.backgroundColor = "#77ACC7";
        property.style.color = "white";
        noproperty.style.color = "black";
        flag = 1;
    };
};
export function setColorNo() {
    var property = document.getElementById("btYes");
    var noproperty = document.getElementById("btNo");
    if (flag === 0) {
        noproperty.style.backgroundColor = "#77ACC7";
        noproperty.style.color = "white";
        flag = 2;
    } else if (flag === 1) {
        property.style.backgroundColor = "white";
        noproperty.style.backgroundColor = "#77ACC7";
        property.style.color = "black";
        noproperty.style.color = "white";
        flag = 2
    } else {
        noproperty.style.backgroundColor = "white";
        noproperty.style.color = "black";
        flag = 0;
    }
}
export function setColorPay1() {
    var property = document.getElementById("btPay1");
    var noproperty = document.getElementById("btPay2");
    if (flag1 === 0) {
        property.style.backgroundColor = "#77ACC7";
        property.style.color = "white";
        flag1 = 1;
    } else if (flag1 === 1) {
        property.style.backgroundColor = "white";
        property.style.color = "black";
        flag1 = 0;
    } else if (flag1 === 2) {
        noproperty.style.backgroundColor = "white";
        property.style.backgroundColor = "#77ACC7";
        property.style.color = "white";
        noproperty.style.color = "black";
        flag1 = 1;
    };
}
export function setColorPay2() {
    var property = document.getElementById("btPay1");
    var noproperty = document.getElementById("btPay2");
    if (flag1 === 0) {
        noproperty.style.backgroundColor = "#77ACC7";
        noproperty.style.color = "white";
        flag1 = 2;
    } else if (flag1 === 1) {
        property.style.backgroundColor = "white";
        noproperty.style.backgroundColor = "#77ACC7";
        property.style.color = "black";
        noproperty.style.color = "white";
        flag1 = 2
    } else {
        noproperty.style.backgroundColor = "white";
        noproperty.style.color = "black";
        flag1 = 0;
    }
}
