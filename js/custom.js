jQuery(function(){
			
			jQuery('#camera_wrap_1').camera({
				thumbnails: false,
				autoAdvance: true,
				barDirection: 'rightToLeft',
                  overlayer: false,
                  pagination: false,
                  playPause: false,
                barPosition: 'bottom',
				loader: 'bar',
				loaderColor: 'red',
               loaderBgColor: 'black'

			});

					});










		   $("#fakeloader").fakeLoader({

timeToHide:2000, //Time in milliseconds for fakeLoader disappear
spinner:"spinner5",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'

bgColor:"#86509C" //Hex, RGB or RGBA colors


});