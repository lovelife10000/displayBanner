//代码初始化
	var size=$(".img li").length;
	for(var j=1;j<=size;j++){
		var li="<li>"+j+"</li>";
		$(".out .num").append(li);
	}
	$(".out .num li").first().addClass("active");
	//手动控制轮播
	$(".img li").first().show();
	$(".num li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		i=index;
		$(".img li").eq(index).stop().fadeIn().siblings().stop().fadeOut();
	});

	//自动控制轮播
	var i=0;
	var t=setInterval(moveR,1000);
	//向右函数
	function moveR(){
		i++;
		if(i==size){
			i=0;
		}
		$(".num li").eq(i).addClass("active").siblings().removeClass("active");
		$(".img li").eq(i).fadeIn().siblings().fadeOut();
	}
	//向左函数
	function moveL(){
		i--;
		if(i==-1){
			i=size-1;
		}
		$(".num li").eq(i).addClass("active").siblings().removeClass("active");
		$(".img li").eq(i).fadeIn().siblings().fadeOut();
	}

	$(".out").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(moveR,1000);
	});

	//手动按钮控制
	$(".out .left").click(function(){
		moveL();
	});
	$(".out .right").click(function(){
		moveR();
	});

})