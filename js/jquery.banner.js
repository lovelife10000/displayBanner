(function($){
	$.fn.banner=function(parameter){

		//传入参数
		parameter=parameter || {};

		//默认参数
		var defaults={
			isBtn:true,     //是否有左右按钮
         isAutoMove:true, 	//是否自动滑动
         autoMoveTime:2000,	//自动轮播速度         
         numStyle:true,  //num是否需要数字 
		};

		//真正参数
		var options=$.extend({},defaults,parameter);

		//插件主体
		return this.each(function(){

			//全局变量
			var $this=$(this);

			//获取图片数量
			var size=$this.find(".img li").length;


			//初始化.btn
			if(options.isBtn){				
				$this.append("<div class='btn btn_l'>&lt;</div><div class='btn btn_r'>&gt;</div>");
			}

			//初始化.num
			var $num=$("<ul class='num'></ul>");
			$this.append($num);
			for(var j=1;j<=size;j++){	
				if(options.numStyle){
					$this.find(".num").append("<li>"+j+"</li>");
				}else{
					$this.find(".num").append("<li></li>");
				}			
				
			}
			$this.find(".num li").first().addClass("active");



			//手动控制轮播
			$this.find(".img li").first().show();
			$this.find(".num li").mouseover(function(){
				$(this).addClass("active").siblings().removeClass("active");
				var index=$(this).index();
				i=index;
				$this.find(".img li").eq(index).stop().fadeIn().siblings().stop().fadeOut();
			});

			//自动控制轮播
			var i=0;
			if(options.isAutoMove){
				var t=setInterval(moveR,options.autoMoveTime);
			}
			//向右函数
			function moveR(){
				i++;
				if(i==size){
					i=0;
				}
				$this.find(".num li").eq(i).addClass("active").siblings().removeClass("active");
				$this.find(".img li").eq(i).fadeIn().siblings().fadeOut();
			}

			//向左函数
			function moveL(){
				i--;
				if(i==-1){
					i=size-1;
				}
				$this.find(".num li").eq(i).addClass("active").siblings().removeClass("active");
				$this.find(".img li").eq(i).fadeIn().siblings().fadeOut();
			}

			$this.hover(function(){
				clearInterval(t);
			},function(){
				t=setInterval(moveR,options.autoMoveTime);
			});

			//手动按钮控制
			$this.find(".btn_l").click(function(){
				moveL();
			});
			$this.find(".btn_r").click(function(){
				moveR();
			});


		});
	};
})(jQuery);