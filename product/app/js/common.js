$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    $('input[name="phone"]').mask("+7 (999) 999-9999");

    $(".popup-submit").click(function () {
        $(".form-popup").hide();
    });

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
    });

    //E-mail Ajax Send
    $("#formModal").submit(function() { //Change
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
