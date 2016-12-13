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
    //

    // Генерация новых рядов в таблице
    if (localStorage.getObj('product') !== null) {
        productArray = localStorage.getObj('product');
        for(var i=0;i<productArray.length;i++)
        {
            var tmp="<tr><td>"+productArray[i]["name"]+"</td>";
            tmp+="<td>"+"<input type=\"text\" value="+productArray[i]["amount"]+" class=\"input_count\" disabled />"+"</td>";
            if(productArray[i]["price"]!==undefined)
                tmp+="<td>"+productArray[i]["price"]+"</td>";
            else
                tmp+="<td>"+0+"</td>";
            tmp+="<td>"+productArray[i]["size"]+"</td>";
            tmp+="<td>"+productArray[i]["color"]+"</td>";
            tmp+="<td>" + "<a class=\"delete_btn\" href=\"#\"id=" + i + ">удалить</a>"+"</td></tr>";
            $(".table").append(tmp);
        }
    }
    else {
        console.log("storage empty");
    }
    //
    //функция для обновления счетчика количества елементов в корзине
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
    //
    //функция удаления товара
    $(".delete_btn").on("click",function (e) {
        e.preventDefault();

        var id=($(this).attr("id"));
        productArray.splice(id,1);
        localStorage.setObj('product', productArray);
        location.reload();
        reset_count();
    });
    //
    //функция подсчета итоговой суммы
    function resultPrice() {
        var res = 0;
        $("tr:not(tr.table_head)").each(function() {
            var tmp = $(this).find("td:eq(2)").text();
            res += parseInt(tmp);
        });
        $(".total span").text(res);
        return 0;
    }
    resultPrice();//Дефолтный подсчет
    //
    //Подсчет цены при изменении количества
    $("tr:not(tr.table_head)").each(function() {


        var tmp_price = 0;
        var price = $(this).find("td:eq(2)");
        var tmp_2 = price.text();

        $(this).find("td:eq(1) input").each(function () {

            // $(this).change(function () {
            //     var tmp_1 = $(this).val();
            //
            //     if(tmp_1 != "NaN")
            //         tmp_price = parseInt(tmp_2)*parseInt(tmp_1);
            //     else
            //         tmp_price = 0;
            //
            //     price.text(tmp_price);
            // });

            var tmp_1 = $(this).val();

            if(tmp_1 != "NaN")
                tmp_price = parseInt(tmp_2)*parseInt(tmp_1);
            else
                tmp_price = 0;

            price.text(tmp_price);
            // console.log($(this).siblings("td"));
            resultPrice();
        });
    });
});