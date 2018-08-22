$(function(){
	$("body").on("click",".submit", function (e) {
		e.stopPropagation();
		var exe = true;
		if($(this).data("confirm")){
			if(confirm($(this).data("confirm"))){
				exe = true;
			} else {
				exe = false;
			}
		}
		if(exe){
			var obj_form = $(this).closest('form');
			var action = $(this).attr('data-action') ? $(this).attr('data-action') : $(obj_form).attr('action');
			var method = $(this).attr('data-method') ? $(this).attr('data-method') : $(obj_form).attr('method');
			var target = $(this).attr('data-target') ? $(this).attr('data-target') : $(obj_form).attr('target');
			$(obj_form).attr({"action":action,"method":method,"target":target}).submit();
		}
	});
	$("body").on("click",".href", function (e) {
		e.stopPropagation();
		var exe = true;
		if($(this).data("confirm")){
			if(confirm($(this).data("confirm"))){
				exe = true;
			} else {
				exe = false;
			}
		}
		if(exe){
			if($(this).data("action")){
				location.href = $(this).data("action");
			}
		}
	});
});
