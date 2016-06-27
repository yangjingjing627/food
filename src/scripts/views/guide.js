var tplGuide=require('../templates/guide.string');
SPA.defineView('guide',{
	html: tplGuide,
	
	bindEvent: {
		show: function(){
			var mySwiper = new Swiper('#guide-swiper',{
				loop: false
				
			});
			
		}
	}
	
	
	
})
