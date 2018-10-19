$(document).ready(function(){
	
	$('#pro-all').click(()=>
	{
		$('#allpro').show();
		$('#veggies').hide();
		$('#fruits').hide();
		$('#grocery').hide();
	})

	$('#veggies').hide();
	$('#veg-sub').click(()=>
	{
		$('#veggies').show();
		$('#allpro').hide();
		$('#fruits').hide();
		$('#grocery').hide();
	})

	$('#fruits').hide();
	$('#sub-fru').click(()=>
	{
		$('#fruits').show();
		$('#veggies').hide();
		$("#allpro").hide();
		$('#grocery').hide();
	})

	$('#grocery').hide();
	$('#groc-sub').click(()=>
	{
		$('#grocery').show();
		$('#fruits').hide();
		$('#veggies').hide();
		$("#allpro").hide();
	})
})