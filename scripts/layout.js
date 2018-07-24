	var index=0;
	mycarousel();

	function mycarousel()
	{
		var i;
		var x=document.getElementsbyClassName("carousel");

		for(i=0; i<x.length; i++)
		{
			x[i].style.display="none";
		}
		index++;
		if (index>x.length)
			{ index=1; }
		x[index-1].style.display="block";
		setTimeout(mycarousel, 3000);
	}
