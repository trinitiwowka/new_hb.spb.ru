// localStorage.setItem('key', string)
// localStorage.getItem('key')
//
// object = JSON.parse(string)
// string = JSON.stringify(object)

$(document).ready(function () {

    var tempCart = {};

    Storage.prototype.getObj = function (key) {
        var value = this.getItem(key);
        return value && JSON.parse(value);
    };
    Storage.prototype.setObj = function (key, value) {
        this.setItem(key, JSON.stringify(value));
    };
    // window.onbeforeunload = function(e) {
    //     window.localStorage.removeItem("product");
    // };

    $(".color__btn").on('click', (function (e) {
        e.preventDefault();

        $(this).addClass("active").siblings().removeClass("active");



    }));

    var productArray = [];
    //console.log($(".menu__list .cart-count", parent.document.body).text());
    //функции работы с хранилищем
    function reset_count() {
        var productArray_tmp=[];
        if (localStorage.getObj('product') !== null) {
            productArray_tmp = localStorage.getObj('product');
            var count=productArray_tmp.length;
            $(".menu__list .cart-count", parent.document.body).text(count);
        }
        else
            $(".menu__list .cart-count", parent.document.body).text(0);
    }


    $(".size__btn").on("click", (function (e) {
        e.preventDefault();

        var temp_product_name = $(".tabs__controls-item.active .tabs__control-link").attr("data-name");
        tempCart["data-name"] = temp_product_name;

        var temp_product_size = $(".tabs__item.active .content__item__size input[name=\"size\"]:checked").val();
        if (temp_product_size != undefined) {
            tempCart["data-size"] = temp_product_size;
        }

        var temp_product_color = $(".color__btn.active").attr("data-color");
        if (temp_product_color != undefined) {
            tempCart["data-color"] = temp_product_color;
        }

        var temp_product_price = $(".tabs__item.active .price span").attr("data-price");
        if (temp_product_price != undefined) {
            tempCart["data-price"] = temp_product_price;
        }

        var temp_product_amount = $(".tabs__item.active .content__item__count").val();
        if (temp_product_price != undefined) {
            tempCart["data-amount"] = temp_product_amount;
        }

        if (tempCart["data-size"] == undefined || tempCart["data-color"] == undefined || tempCart["data-amount"] == 0) {
            alert("выберите цвет/размер");
        }
        else {

            console.log(tempCart["data-amount"]);
            var cart = tempCart;
            tempCart = {};

            $(".tabs__item.active .content__item__size input[name=\"size\"]:checked").each(function () {
                $(this).prop('checked', false);
            });
            $(".color__btn").removeClass("active");

            $(".size__btn").text("Добавлено!").mouseleave(function () {
                $(this).text("В корзину");

            });
            console.log(cart);
            var productJSON = {
                "name":     temp_product_name,
                "size":     temp_product_size,
                "color":    temp_product_color,
                "price":    temp_product_price,
                "amount":   temp_product_amount
            };

            if (localStorage.getObj('product') !== null) {
                productArray = localStorage.getObj('product');
                productArray.push(productJSON);
                localStorage.setObj('product', productArray);
            }
            else {
                productArray.push(productJSON);
                localStorage.setObj('product', productArray);
            }
            reset_count();
        }
    }));


});

