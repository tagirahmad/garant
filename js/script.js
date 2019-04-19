$(document).ready(function() {
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
});

$(document).ready(function(){
    $('.sidenav').sidenav();
});
$('.gta').click(function(e) {
  e.preventDefault();
  var $id = $(this).data('anchor');
  // $('#mobile-demo').addClass('hide');
  $('html, body').animate({scrollTop: $('#' + $id).offset().top}, 400);
});

var delay_popup = 3000;
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);
