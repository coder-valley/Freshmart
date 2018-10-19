$(document).ready(function(){
	let number = $('#increment').val();
	let currentVal = parseInt($('#increment').val());
	if (number > 0)
	{
        $('#add-btn').on('click', () =>{
        	let newval = ++currentVal;
        	let preVal= parseInt($('#increment').val(newval));
        	console.log(newval);
        	console.log(preVal);
        })

    } 
    else 
    {
        // Otherwise put a 0 there
        $('#increment').val(0);
    }
	// console.log(currentVal);
})