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
            tmp+="<td>"+"<input type=\"text\" value=\"1\"class=\"input_count\"/>"+"</td>";
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

    //функция удаления товара
    $(".delete_btn").on("click",function (e) {
        e.preventDefault();

        var id=($(this).attr("id"));
        productArray.splice(id,1);
        localStorage.setObj('product', productArray);
        location.reload();

    });
    //
    //функция подсчета итоговой суммы
    function resultPrice() {
        var res=0;
        $("tr:not(tr.table_head)").each(function() {
            var tmp=$(this).find("td:eq(2)").text();
            res+=parseInt(tmp);
        });
        $(".total span").text(res);
        return 0;
    }
    resultPrice();
    //
    //Подсчет цены при изменении количества
    $("tr:not(tr.table_head)").each(function() {
        var tmp_price=0;
        var tmp_2=$(this).find("td:eq(2)").text();
        $(this).find("td:eq(1) input").change(function () {
           //console.log($(this).val());
            var tmp_1=$(this).val();
            //console.log(tmp_2);
            tmp_price=parseInt(tmp_2)*parseInt(tmp_1);
            $("tr:not(tr.table_head)").find("td:eq(2)").text(tmp_price);
            resultPrice();
        });
       // $(this).find("td:eq(2)").text(tmp_price);

    });


});