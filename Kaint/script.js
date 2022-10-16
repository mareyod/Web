
			let size;
			let paint_button = document.getElementById("paint-button");
			let clear_button = document.getElementById("clear-button");
			
			paint_button.addEventListener('click', function() {
				
				size = document.querySelector('#size').value;
				paint(size);
			});
			
			clear_button.addEventListener('click', function() {
				clear();
				paint(size);
			});
			
			let canvas = document.querySelector('.canvas');
			function clear() {
				canvas.innerHTML = '';	
			}
			
			let palette__pixel = document.querySelectorAll('.palette__pixel');
			let palette__pixel_color;
			palette__pixel.forEach((item) => {
				item.addEventListener('click', () => {
					palette__pixel_color = window.getComputedStyle(item).backgroundColor;
				});
			});
			
			let palette__pixel_tabindex = document.querySelectorAll('.palette__pixel');
			palette__pixel_tabindex.forEach((item) => {
				item.tabIndex = 50;
			});
			
			
			let draw = false;
			function paint(size, pixel_color){
				if(size<15) 
				{
					clear();
					for( let i = 0; i < size; i++)
					{
						let canvas__row  = document.createElement('div');
						canvas__row.className = "canvas__row";
						document.querySelector('.canvas').appendChild(canvas__row);
					
						for(let j = 0; j < size; j++)
						{
							let canvas__pixel = document.createElement('div');
							canvas__pixel.className = 'canvas__pixel';
							
							canvas__pixel.addEventListener('mouseover', function() {
								if(draw) {
								canvas__pixel.style.backgroundColor = palette__pixel_color;
								}
							});
						
							canvas__pixel.addEventListener('click', function() {
								canvas__pixel.style.backgroundColor = palette__pixel_color;
							});
							
							canvas__row.appendChild(canvas__pixel);
						}
					}
				}
			}
			window.addEventListener('mousedown', function() {
				draw = true;
			});
			window.addEventListener('mouseup', function() {
					draw = false;
			});
			