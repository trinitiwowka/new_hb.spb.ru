var phone_format;
$("input[name=source]").attr("value", $(location).attr("href"));
function getCookie(name) {
	var cookie_name = name + "=";
	var cookie_length = document.cookie.length;
	var cookie_begin = 0;
	while (cookie_begin < cookie_length) {
		var value_begin = cookie_begin + cookie_name.length;
		if (document.cookie.substring(cookie_begin, value_begin) == cookie_name) {
			var value_end = document.cookie.indexOf (";", value_begin);
			if (value_end == -1) {
				value_end = cookie_length;
			}
			return unescape(document.cookie.substring(value_begin, value_end));
		}
		cookie_begin = document.cookie.indexOf(" ", cookie_begin) + 1;
		if (cookie_begin == 0) break;

	}
	return null;
}

$(window).load(function() {
	$('.roistat').val(getCookie('roistat_visit'));
});

$(document).ready(function() {
	timer();
	//$("a.fancybox").fancybox();
	var prefix = $('.prefix').val();
	var url = "send.php";
	phone_format = $('.phone_format').val();
	var mobile = navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i);
	if(mobile != null) {
		// $('html').css('width', window.innerWidth + 'px');
	} else {
		// $(".scroll").each(function() {
		// 	var block = $(this);
		// 	$(window).scroll(function() {
		// 		var top = block.offset().top;
		// 		var bottom = block.height()+top;
		// 		top = top - $(window).height();
		// 		var scroll_top = $(this).scrollTop();
		// 		var block_center = block.offset().top + (block.height() / 2);
		// 		var screen_center = scroll_top + ($(window).height() / 2);
		// 		if(block.height() < $(window).height()) {
		// 			if ((scroll_top > (top-(block.height()/2))) && ((scroll_top < bottom+(block.height()/2))) && (scroll_top + $(window).height() > (bottom-(block.height()/2))) && (scroll_top < (block.offset().top+(block.height()/2)))) {
		// 				if (!block.hasClass("animated")) {
		// 					block.addClass("animated");
		// 				}
		// 			} else {
		// 				if((block.offset().top + block.height() < scroll_top) || (block.offset().top > (scroll_top + $(window).height()))) {
		// 					block.removeClass("animated");
		// 				}
		// 			}
		// 		} else {
		// 			if ((scroll_top > top) && (scroll_top < bottom) && (Math.abs(screen_center - block_center) < (block.height() / 4))) {
		// 				if (!block.hasClass("animated")) {
		// 					block.addClass("animated");
		// 				}
		// 			} else {
		// 				if((block.offset().top + block.height() < scroll_top) || (block.offset().top > (scroll_top + $(window).height()))) {
		// 					block.removeClass("animated");
		// 				}
		// 			}
		// 		}
		// 	});
		// });
		$('head').append('<link rel="stylesheet" href="css/animation.css" />');
	}
	$('.button').click(function() {
		$('body').find('form:not(this)').children('label').removeClass('red');
		var request_url = '<br>'+$('input[name="ref_url"]').val().toString().replace(/&/g, '<br>');
		var answer = checkForm($(this).parent().get(0));
		if(answer != false)
		{
			var $form = $(this).parent();
			var name = $('input[name="name"]', $form).val();
			if(phone_format == 'one') {
				var phone = $('input[name="phone"]', $form).val();
			} else if(phone_format == 'three') {
				var phone = $('input[name="phone1"]', $form).val()+' '+$('input[name="phone2"]', $form).val()+' '+$('input[name="phone3"]', $form).val();
			}
			var email = $('input[name="email"]', $form).val();
			var ques = $('textarea[name="ques"]', $form).val();
			var sbt = $('.button', $form).attr("data-name");
			var submit = $('.button', $form).text();
			var ref = $('input[name="referer"]').val();
			var formname = $('input[name="formname"]').val();
			var sitename = $('.sitename').val();
			var emailsarr = $('.emailsarr').val();
			if($.isEmptyObject(name)){
				name = '';
			}
			if($.isEmptyObject(phone)){
				phone = '';
			}
			if($.isEmptyObject(email)){
				email = '';
			}
			if($(this).data('id')=='callback'){
				formname = 'Зарегистрироваться';
				submit = 'тел';
			}
			if($(this).data('id')=='delivery'){
				formname = '|email рассылка';
				submit = 'email delivery';
			}

			if($(this).data('name')=='price') {

				$.ajax({
					type: "POST",
					url: "mail.php",
					// dataType: "json",
					data: sbt+"="+submit+"&email="+email+"&formname="+formname+"&ref="+ref+"&utm="+request_url+"&sitename="+sitename+"&emailsarr="+emailsarr,
					success: function (data) {
						console.log(data);

					}
				});

				console.log('price');

				thxPrice();

			} else if($(this).data('name')=='price-phone') {

				console.log('price-phone');

                // сдесь код для кнопки на смс
				var apiUrl= "https://gate.smsaero.ru/send/?user=trinitiwowka@gmail.com&password=uftSUR8fDhWOl0RiqvLxOrh2jMiQ&to=";
				var temp1=$("#sms_phone").val();
				var temp2="";
				for(var i=0;i<temp1.length;++i)
				{
					if(temp1[i]>='0'&&temp1[i]<='9')
					temp2+=temp1[i];
				}
				apiUrl+=temp2;
				apiUrl+="&text=123hb.spb.ru&from=news";

				$.ajax({
					type: "POST",
					url: apiUrl,
					// dataType: "json",
					data: "name="+name+"&phone="+phone+"&"+sbt+"="+submit+"&email="+email+"&ques="+ques+"&formname="+formname+"&ref="+ref+"&utm="+request_url+"&sitename="+sitename+"&emailsarr="+emailsarr,
					success: function (data) {
						console.log(data);

					}
				});
				//

				thxPrice();
			} else {

				$.ajax({
					type: "POST",
					url: "send.php",
					// dataType: "json",
					data: "name="+name+"&phone="+phone+"&"+sbt+"="+submit+"&email="+email+"&ques="+ques+"&formname="+formname+"&ref="+ref+"&utm="+request_url+"&sitename="+sitename+"&emailsarr="+emailsarr,
					success: function (data) {
						console.log(data);

					}
				});

				thx();
			}
            //
			// console.log("TEST name="+name+"&phone="+phone+"&"+sbt+"="+submit+"&email="+email+"&ques="+ques+"&formname="+formname+"&ref="+ref+"&utm="+request_url+"&sitename="+sitename+"&emailsarr="+emailsarr);
			// $.ajax({
			// 	type: "POST",
			// 	url: "send.php",
			// 	// dataType: "json",
			// 	data: "name="+name+"&phone="+phone+"&"+sbt+"="+submit+"&email="+email+"&ques="+ques+"&formname="+formname+"&ref="+ref+"&utm="+request_url+"&sitename="+sitename+"&emailsarr="+emailsarr,
			// 	success: function (data) {
			// 		console.log(data);
			//
			// 	}
			// }).always(function() {
			// 	//thx();
			// 	//метрики
			// 	//setTimeout(function(){ga('send', 'event', ''+sbt, ''+sbt);}, 30);
			// 	//setTimeout(function(){yaCounterXXXXXXXXX.reachGoal(''+sbt);}, 30); // меняем XXXXXXXXX на номер счетчика
			// });
		}
	});




	/* Youtube fix */
	$("iframe").each(function() {
		var ifr_source=$(this).attr('src');
		var wmode="wmode=transparent";
		if(ifr_source.indexOf('?')!=-1) {
			var getQString=ifr_source.split('?');
			var oldString=getQString[1];
			var newString=getQString[0];
			$(this).attr('src',newString+'?'+wmode+'&'+oldString)
		} else $(this).attr('src',ifr_source+'?'+wmode)
	});

	if(phone_format == 'three') {
		$('input[name="phone2"]').focus(function() {
			$(this).keydown(function(event){
				if(event.keyCode != 8) {
					if($(this).val().length >= 3 && event.keyCode != 8)
						$(this).parent().siblings().find('input[name="phone3"]').focus();
				}
			});
		});
		$('input[name="phone3"]').focus(function() {
			$(this).keydown(function(event){
				if(event.keyCode == 8 && $(this).val().length == 0) {
					$(this).parent().siblings().find('input[name="phone2"]').focus();
				}
			});
		});
	}
});

function timer() {
	var now = new Date();
	var newDate = new Date((now.getMonth()+1)+"/"+now.getDate()+"/"+now.getFullYear()+" 23:59:59"); //var newDate = new Date("Feb,29,2014 23:59:00");
	var totalRemains = (newDate.getTime()-now.getTime());
	if (totalRemains>1) {
		var Days = (parseInt(parseInt(totalRemains/1000)/(24*3600)));
		var Hours = (parseInt((parseInt(totalRemains/1000) - Days*24*3600)/3600));
		var Min = (parseInt(parseInt((parseInt(totalRemains/1000) - Days*24*3600) - Hours*3600)/60));
		var Sec = parseInt((parseInt(totalRemains/1000) - Days*24*3600) - Hours*3600) - Min*60;
		if (Days<10){Days="0"+Days}
		if (Hours<10){Hours="0"+Hours}
		if (Min<10){Min="0"+Min}
		if (Sec<10){Sec="0"+Sec}
		$(".day").each(function() { $(this).text(Days); });
		$(".hour").each(function() { $(this).text(Hours); });
		$(".min").each(function() { $(this).text(Min); });
		$(".sec").each(function() { $(this).text(Sec); });
		setTimeout(timer, 1000);
	}
}

function popup(id, form, h1, h2, btn) { //onClick="popup('callback', '');"
	$('.popup_overlay').show();
	$('#'+id).addClass('activePopup');
	if(id == 'request') {
		var def_h1 = 'Оставить заявку';
		var def_h2 = 'Заполните форму,<br>и&nbsp;мы&nbsp;обязательно свяжемся с&nbsp;вами!';
		var def_btn = 'Оставить заявку';
	}
	if(h1 != '') {$('#'+id).find('.popup_h1').html(h1);} else {$('#'+id).find('.popup_h1').html(def_h1);}
	if(h2 != '') {$('#'+id).find('.popup_h2').html(h2);} else {$('#'+id).find('.popup_h2').html(def_h2);}
	if(btn != '') {$('#'+id).find('.button').html(btn);} else {$('#'+id).find('.button').html(def_btn);}
	$('.activePopup').show();
	$('.formname').attr("value", form);
}

function popup_out() {
	$('.popup_overlay').hide();
	$('.popup').hide();
	$('.popup').removeClass('activePopup');
	$('body').find('label').removeClass('red');
}

function formname(name) { //onClick="formname('text');"
	$('.formname').attr("value", name);
}

function thx() {
	$('.popup').hide();
	$('.popup').removeClass('activePopup');
	popup('thx', '');

	if(phone_format == 'one') {
		$('input[type="text"]').each(function(){
			$(this).val('');
		});
	} else if(phone_format == 'three') {
		$('input[type="text"]:not(input[name="phone1"])').each(function(){
			$(this).val('');
		});
	}
	$('textarea').val('');
}

function thxPrice() {
	$('.popup').hide();
	$('.popup').removeClass('activePopup');
	popup('thx-price', '');
}

function checkForm(form1) {

	var $form = $(form1);
	var checker = true;
	var name = $("input[name='name']", $form).val();
	if(phone_format == 'one') {
		var phone = $("input[name='phone']", $form).val();
		console.log()
	} else if(phone_format == 'three') {
		var phone1 = $("input[name='phone1']", $form).val();
		var phone2 = $("input[name='phone2']", $form).val();
		var phone3 = $("input[name='phone3']", $form).val();
	}
	var email = $("input[name='email']", $form).val();

	if($form.find(".name").hasClass("required")) {
		if(!name) {
			$form.find(".name").addClass("red");
			checker = false;
		} else {
			$form.find(".name").removeClass('red');
		}
	}

	if(phone_format == 'one') {
		if($form.find(".phone").hasClass("required")) {
			if(!phone) {
				$form.find(".phone").addClass("red");
				checker = false;
			} else if(/[^0-9\+ ()\-]/.test(phone)) {
				$form.find(".phone").addClass("red");
				checker = false;
			} else {
				$form.find(".phone").removeClass("red");
			}
		}
	} else if(phone_format == 'three') {
		if($form.find(".phone").hasClass("required")) {
			if(!phone1) {
				$form.find(".phone").children('input[name="phone1"]').parent().addClass("red");
				checker = false;
			} else if(/[^0-9+]/.test(phone1)) {
				$form.find(".phone").children('input[name="phone1"]').parent().addClass("red");
				checker = false;
			} else {
				$form.find(".phone").children('input[name="phone1"]').parent().removeClass("red");
			}

			if(!phone2) {
				$form.find(".phone").children('input[name="phone2"]').parent().addClass("red");
				checker = false;
			} else if(/[^0-9]/.test(phone2)) {
				$form.find(".phone").children('input[name="phone2"]').parent().addClass("red");
				checker = false;
			} else {
				$form.find(".phone").children('input[name="phone2"]').parent().removeClass("red");
			}

			if(!phone3) {
				$form.find(".phone").children('input[name="phone3"]').parent().addClass("red");
				checker = false;
			} else if(/[^0-9 -]/.test(phone3) || phone3.length < 4) {
				$form.find(".phone").children('input[name="phone3"]').parent().addClass("red");
				checker = false;
			} else {
				$form.find(".phone").children('input[name="phone3"]').parent().removeClass("red");
			}
		}
	}

	if($form.find(".email").hasClass("required")) {
		if(!email) {
			$form.find(".email").addClass("red");
			checker = false;
		} else if(!/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/.test(email)) {
			$form.find(".email").addClass("red");
			checker = false;
		} else {
			$form.find(".email").removeClass("red");
		}
	}

	if(checker != true) { return false; }
}

$(document).ready(function() {

    $('input[name="phone"]').mask("+7 (999) 999-9999");

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
                 
});