var tplIndex=require('../templates/index.string');

SPA.defineView('index',{
	html: tplIndex,
	plugins: ['delegated'],
	modules:[{
		name: 'content',
		views: ['home','search','cook','club','more'],
		defaultTag: 'home',
		container: '.l-container'
	}],
	bindActions: {
		'switch.tabs': function(e,data){
//			console.log(e);
			//视图高亮
			$(e.el).addClass('active').siblings().removeClass('active');
			//子视图切换
//			console.log(this);
console.log(data);
			this.modules.content.launch(data.tag);
		}
	},
	//页面加载完再执行，相当于window.onload，视图生命周期时间绑定;
	//
	bindEvents: {
		beforeShow: function(){
			console.log(0);
			
		},
		show: function(){
//			var myScroll=new IScroll('#home-scroll');
			
//			var myswipper = new Swiper("");
//			console.log(myswipper);
		}
	}
	
	
});
//console.log(IScroll);












