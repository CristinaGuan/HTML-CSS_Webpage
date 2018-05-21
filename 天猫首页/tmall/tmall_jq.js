/****************jquery方式实现顶层菜单栏*******************/

$("#top .items_one").hover(function(){
	if($("#top .items_one_box").is(":hidden")){
		$("#top .items_one_box").show();
		$("#top .items_one>a>i").addClass("xia");
	}else{
		$("#top .items_one_box").hide();
		$("#top .items_one>a>i").removeClass("xia");
	}
});
$("#top .items_two").hover(function(){
	if($("#top .items_two_box").is(":hidden")){
		$("#top .items_two_box").show();
		$("#top .items_two>a>i").addClass("xia");
	}else{
		$("#top .items_two_box").hide();
		$("#top .items_two>a>i").removeClass("xia");
	}
});
$("#top .partner").hover(function(){
	if($("#top .partner_box").is(":hidden")){
		$("#top .partner_box").show();
		$("#top .partner>a>i").addClass("xia");
	}else{
		$("#top .partner_box").hide();
		$("#top .partner>a>i").removeClass("xia");
	}
});

$("#top .Web").hover(function(){
	if($("#top .web_box").is(":hidden")){
		$("#top .web_box").show();
		$("#top .Web>a>i").addClass("xia");
	}else{
		$("#top .web_box").hide();
		$("#top .Web>a>i").removeClass("xia");
	}
});


$("#banner_items li.one_a").hover(function(){
		$("#banner_items ul.child_items").animate({"width":"71px"},200);
		$("#banner_items ul.main_items li.one_a>b").addClass("sanjiao");
},function(){
	$("#banner_items ul.child_items").animate({"width":"0px"},100);
	$("#banner_items ul.main_items li.one_a>b").removeClass("sanjiao");
});

$("#banner_items li.one_b").hover(function(){
		$("#child_sub_items").animate({"width":"779px"},200);
		$("#banner_items ul.main_items li.one_b>b").addClass("sanjiao");
},function(){
	$("#child_sub_items").animate({"width":"0px"},100);
	$("#banner_items ul.main_items li.one_b>b").removeClass("sanjiao");
});

$("#banner_items li.one_c").hover(function(){
		$("#child_sub_items_two").animate({"width":"779px"},200);
		$("#banner_items ul.main_items li.one_c>b").addClass("sanjiao");
},function(){
	$("#child_sub_items_two").animate({"width":"0px"},100);
	$("#banner_items ul.main_items li.one_c>b").removeClass("sanjiao");
});

$("#banner_items li.one_d").hover(function(){
		$("#child_sub_items_three").animate({"width":"779px"},200);
		$("#banner_items ul.main_items li.one_d>b").addClass("sanjiao");
},function(){
	$("#child_sub_items_three").animate({"width":"0px"},100);
	$("#banner_items ul.main_items li.one_d>b").removeClass("sanjiao");
});

var $td=$("div.brand_mains>table.brand_sub_box td");
$td.each(function(i){
	if(i<24){
		$(this).hover(function(){
			$(this).append($("<b></b>"));
		},function(){
			$("div.brand_mains>table.brand_sub_box td>b").remove();
		});
		i++;
	}
});
/**************轮播样式*********************/


	var bg=[{"background-color":"#FFF21A"},{"background-color":"#9003DD"},{"background-color":"#080808"},{"background-color":"#4535F0"},{"background-color":"#FF2F35"}];
	var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focus ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	//添加数字按钮和按钮后的半透明条
	var btn = "<div class='btn'>";
	for(var i=0; i<len; i++){
		btn += "<span></span>";
	}
	btn += "</div>";
	$("#focus").append(btn);
	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$("#focus div.btn span").css("opacity",0.4).mouseover(function() {
		index = $("#focus div.btn span").index(this);
		showPics(index);
	});
	//左右滚动，即所有li元素都是在同一排向左浮动，计算出外围ul元素的宽度
	$("#focus ul").css("width",sWidth * (len+1));
			  
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#focus").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			if(index == len) { //如果索引值等于li元素个数，最后一张图播放完毕，接下来要显示第一张图，即调用showFirPic()，然后将索引值清零
				index = 0;
				showFirstPic();
			} else { //如果索引值不等于li元素个数，按普通状态切换，调用showPics()
				showPics(index);
			}
			index++;
		},2000); //2000代表自动播放的间隔，单位：毫秒
	});
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focus ul").stop(true,false).animate({"left":nowLeft},500); //通过animate()调整ul元素滚动到计算出的position
		$("#banner").css(bg[index]);
		$("#focus div.btn span").animate({"opacity":"0.4"},300).eq(index).animate({"opacity":"1"},100);
		//为当前的按钮切换到选中的效果
	}
	function showFirstPic() { //最后一张图自动切换到第一张图时专用
		$("#focus ul").append($("#focus ul li:first").clone());//为了达到从最右边到最左边还是往左移动效果，而不是往右移动
		var nowLeft = -len*sWidth; //通过li元素个数计算ul元素的left值，也就是最后一个li元素的右边
		$("#focus ul").stop(true,false).animate({"left":nowLeft},500,function() {
			//通过callback，在动画结束后把ul元素重新定位到起点，然后删除最后一个复制过去的元素
			$("#focus ul").css("left","0");
			$("#focus ul li:last").remove();
		});
		$("#banner").css(bg[index]);
		$("#focus div.btn span").animate({"opacity":"0.4"},300).eq(index).animate({"opacity":"1"},100);
		//为当前的按钮切换到选中的效果
	}

var linormal=["<li class='normal'><a href='#'><img src='images/louc_26.jpg'></a></li>"
			,"<li class='normal'><a href='#'><img src='images/louc_29.jpg'></a></li>"
			,"<li class='normal'><a href='#'><img src='images/louc_32.jpg'></a></li>"
			,"<li class='normal'><a href='#'><img src='images/louc_35.jpg'></a></li>"
			,"<li class='normal'><a href='#'><img src='images/louc_37.jpg'></a></li>"
			,"<li class='normal'><a href='#'><img src='images/louc_42.jpg'></a></li>"
			,"<li class='normal'><a href='#'><img src='images/louc_45.jpg'></a></li>"
			,"<li class='normal'><a href='#'><img src='images/louc_57.jpg'></a></li>"
];
/*var hover=["<li class='hover'><a href='#'>包包</a></li>"
		,"<li class='hover'><a href='#'>美靴</a></li>"
		,"<li class='hover'><a href='#'>手机</a></li>"
		,"<li class='hover'><a href='#'>电器</a></li>"
		,"<li class='hover'><a href='#'>母婴</a></li>"
		,"<li class='hover'><a href='#'>美食</a></li>"
		,"<li class='hover'><a href='#'>音乐</a></li>"
		,"<li class='hover'><a href='#'>图书</a></li>"
];*/

/*****************使用replaceWith hover会失效***********************/
var $li=$("#product_F1 ul.smallpic li.normal");
$li.each(function(i){
	if(i<80){
		$(this).hover(function(){
		$(this).find("i").addClass("product_F2");
			/*alert($(this).find("i").text());*/
		},function(){
			$(this).find("i").removeClass("product_F2");
		});
		i++;
	}
});
/****************楼层效果******************/
$(function(){
	$(window).scroll(function(){
		$("#product_F1 div.floor_top div.floor1").each(function(i){
			var win_h=$(window).height();
			var win_t=$(window).scrollTop();
			var div_t=$(this).offset().top;
			if(win_h/2+win_t>=div_t){
				$(this).css(
						"background-color","#FD2532"
				);
			}else{
				$(this).css(
						"background-color","#873B66"
				);
			}
			i++;
		})
	})
});
/**********浮动窗口**************/

$(function(){
	$(window).scroll(function(){
		var win_t=$(window).scrollTop();
		if(win_t>200){
			$("#logo_float").css("display","block");
		}else{
			$("#logo_float").css("display","none");
		}
	})
});
















