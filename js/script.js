$(document).ready(function () {
	$win = $(window);
	$bars = $('.fa-bars');
	$times = $('.fa-times');
	$sidebar = $('#side-navbar .sidebar');

	$bars.click(function () {
		$times.show();
		$sidebar.show();
		$bars.hide();
	})
	$times.click(function () {
		$times.hide();
		$sidebar.hide();
		$bars.show();
	})

	$win.resize(function () {
		if ($win.width() <= 768) {
			$times.hide();
			$sidebar.hide();
			$bars.show();
		}else{
			$times.hide();
			$sidebar.hide();
			$bars.hide();
		}
	})
	
	var nav = document.getElementById('navbar');
	if($win.width() > 768){
        nav.classList.add("sticky-top");	
	}
	else{
    	nav.classList.remove("sticky-top");
	}
});

