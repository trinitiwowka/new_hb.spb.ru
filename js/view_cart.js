$(document).ready(function () {
    var productArray = [];

    Storage.prototype.getObj = function (key) {
        var value = this.getItem(key);
        return value && JSON.parse(value);
    };


    if (localStorage.getObj('product') !== null) {
        productArray = localStorage.getObj('product');
        for(var i=0;i<productArray.length;i++)
        {
            var tmp="<tr><td>"+productArray[i]["name"]+"</td>";
            tmp+="<td>"+"<input type=\"text\" class=\"input_count\"/>"+"</td>";
            tmp+="<td>"+productArray[i]["price"]+"</td>";
            tmp+="<td>"+productArray[i]["size"]+"</td>";
            tmp+="<td>"+productArray[i]["color"]+"</td></tr>";
            $(".table").append(tmp);
        }
    }
    else {
        console.log("storage empty");
    }
});