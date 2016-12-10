/**
 * Created by Trinitiwowka on 10.12.2016.
 */
$(document).ready(function () {
    var productArray = [];
    //функции работы с хранилищем
    Storage.prototype.getObj = function (key) {
        var value = this.getItem(key);
        return value && JSON.parse(value);
    };
    Storage.prototype.setObj = function (key, value) {
        this.setItem(key, JSON.stringify(value));
    };
    if (localStorage.getObj('product') !== null) {
        productArray = localStorage.getObj('product');
        var count=productArray.length;
        $(".menu__list .cart-count").text(count);
    }
    else
        $(".menu__list .cart-count").text("");
});
//