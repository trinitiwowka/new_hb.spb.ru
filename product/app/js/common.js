$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    $('input[name="phone"]').mask("+7 (999) 999-9999");

    $(".popup-submit").click(function () {
        $(".form-popup").hide();
    });

    // tabs
    $('.tabs__control-link').on('click', function (e) {
        e.preventDefault();

        var item = $(this).closest('.tabs__controls-item'),
            contentItem = $('.tabs__item'),
            itemPosition = item.index();

        contentItem.eq(itemPosition)
            .add(item)
            .addClass('active')
            .siblings()
            .removeClass('active');

        moreColors();

    });

    function moreColors() {

        var colorBtn = $(".tabs__item.active .color__btn:nth-child(6)"),
            firstBtn = $(".tabs__item.active .color__btn:nth-child(2)"),
            moreBtn = $("<a href='#' class='more_btn'>▼</a>"),
            colorArr = [],
            arrItem = $(".tabs__item.active .content__color").find("a.color__btn");

        colorArr.push(arrItem);

        if ( colorArr[0].length > 5 ) {

            console.log("tt");

            firstBtn.before(moreBtn);

            colorBtn.nextAll().hide();

            moreBtn.on("click", function (e) {
                e.preventDefault();

                $(colorBtn).nextAll("a").toggle();

                $(this).text(function (i, text) {
                    return text === "▼" ? "▲" : "▼";
                });

            });
        }

    }

    moreColors();



    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "send.php", //Change
            data: th.serialize()
        }).done(function() {

            $(".form-popup").show();

            $('input[type="text"]').val('');

            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });
});
