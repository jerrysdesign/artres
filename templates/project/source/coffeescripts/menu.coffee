$ ->
	$("ul.dropdown li").hover (->
		$(this).addClass "hover"
		$("ul:first", this).css "visibility", "visible"
		return
	), ->
		$(this).removeClass "hover"
		$("ul:first", this).css "visibility", "hidden"
		return

	$("ul.dropdown li ul li:has(ul)").find("a:first").append " &raquo; "
	return