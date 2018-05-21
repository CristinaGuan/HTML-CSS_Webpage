window.$=HTMLElement.prototype.$=function(selector){
	return (this==window?document:this).querySelectorAll(selector);
}
window.onload=function(){
	//找到id为top_box下的类为app_jd的一个元素
	//再找到id为top_box下的类为service的一个元素
	//绑定onmouseover事件和onmouseout事件
	$("#top_box .app_jd")[0].onmouseover=$("#top_box .service")[0].onmouseover=showItems;
	$("#top_box .app_jd")[0].onmouseout=$("#top_box .service")[0].onmouseout=hideItems;
	//找到id为category的div,绑定onmouseover事件
	$("#category")[0].addEventListener("mouseover",showCate,false);
	$("#category")[0].addEventListener("mouseout",hideCate,false);

	//找到id为cate_box下的所有直接li,存为lis
	var lis=$("#cate_box>li");
	//遍历lis中每个li
	//	为当前li绑定onmouseover和onmouseout事件
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover=showSubCate;
		lis[i].onmouseout=hideSubCate;
	}
	pPhoto.init();
}
/*当鼠标进入一级分类时，显示当前li的.sub_cate_box*/
function showSubCate(){
	//如何保持h3的hover状态
	this.$("h3").className="hover";
	this.$(".sub_cate_box")[0].style.display="block";
}
/*当鼠标移出一级分类时，隐藏当前li的.sub_cate_box*/
function hideSubCate(){
	//如何去掉h3的hover状态
	this.$("h3").className="";
	this.$(".sub_cate_box")[0].style.display="none";
}
/*当鼠标进入全部商品分类时，显示id为cate_box的元素*/
function showCate(){
	this.$("#cate_box")[0].style.display="block";
}
/*当鼠标进入全部商品分类时，隐藏id为cate_box的元素*/
function hideCate(){
	this.$("#cate_box")[0].style.display="";
}
/*鼠标进入li时，显示下方的_items的元素*/
function showItems(){
	//在当前元素下找id以_items结尾的元素
	//直接修改该元素的style属性下的display为block
	this.$("[id$='_items']")[0].style.display="block";
	//找到当前li的第一个a，设置className属性为hover
	this.$("a")[0].className="hover";
}
/*鼠标移开li时，隐藏下方的_items的元素*/
function hideItems(){
	//在当前元素下找id以_items结尾的元素
	//直接修改该元素的style属性下的display为""
	this.$("[id$='_items']")[0].style.display="";
	this.$("a")[0].className="";
}
/*包含小图片的移动，中图片的更换，放大图*/
var pPhoto={
	LIWIDTH:62,
	moved:0,
	count:0,
	ul:null,
	btnL:null,
	btnR:null,
	superMask:null,
	SUPERWIDTH:350,
	SUPERHEIGTH:350,
	MASKWIDTH:175,
	MASKHEIGHT:175,
	init:function(){
		this.ul=$("#icon_list")[0];
		this.ul.onmouseover=this.changeMImg;//this-->ul
		this.btnL=this.ul.parentNode.$("a")[0];
		this.btnR=this.ul.parentNode.$("a")[1];
		this.btnL.onclick=this.btnR.onclick=function(){
			pPhoto.move(this);
		};
		this.count=this.ul.$("li").length;
		//找到id为superMask的div
		this.superMask=$("#superMask")[0];
		//为superMask绑定onmouseover和onmouseout事件
		this.superMask.onmouseover=this.superMask.onmouseout=this.showMask;
		this.superMask.onmousemove=function(){
			var e=window.event||arguments[0];
			pPhoto.zoom(e);
		}
	},
		/*当鼠标在superMask上移动时，同时移动mask
			同时改变largeDiv中背景图片位置
		*/
	zoom:function(e){//this-->pPhoto
		//获得鼠标相对于目标元素的坐标x,y
		var x=e.offsetX;
		var y=e.offsetY;
		//分别计算mTop=y-MASKHEIGHT/2
		//		  mLeft=x-MASKWIDTH/2
		var mTop=y-this.MASKHEIGHT/2;
		var mLeft=x-this.MASKWIDTH/2;
		//如果mTop<0,就mTop=0;
		mTop<0&&(mtop=0);
		//如果mTop>SUPPERHEIGHT-MASKHEIGHT
		//		就等于SUPPERHEIGHT-MASKHEIGHT
		mTop>this.SUPPERHEIGHT-this.MASKHEIGHT&&(mTop=this.SUPPERHEIGHT-this.MASKHEIGHT);
		//如果mLeft<0,就mLeft=0;
		mLeft<0&&(mLeft=0);
		//如果mLeft>SUPPERHEIGHT-MASKHEIGHT
		//		就等于SUPPERHEIGHT-MASKHEIGHT
		mLeft>this.SUPPERWIDTH-this.MASKWIDTH&&(mLeft=this.SUPPERWIDTH-this.MASKWIDTH);
		//找到mask元素，
		//设置它的top为mTop,left为mLeft
		$("#mask")[0].style.top=mTop+"px";
		$("#mask")[0].style.left=mLeft+"px";
		$("#largeDiv")[0].style.backgroundPosition=-mLeft*2+"px;"+-mTop*2+"px"; 
	},
	/*当鼠标进入superMask时，显示mask
	  当鼠标出superMask时，隐藏mask
	*/
	
	showMask:function(){
		var mask=$("#mask")[0];
		var style=getComputedStyle(mask);
		mask.style.display=style.display=="none"?"block":"none";
		var largeDiv=$("#largeDiv")[0];
		largeDiv.style.display=mask.style.display;
		if(largeDiv.style.display=="block"){
			var path=$("#mImg")[0].src;
			var i=path.lastIndexOf(".")
			$("#largeDiv")[0].style.backgroundImage="url('"+path.slice(0,i-1)+"l"+path.slice(i)+"')";
		}

	},
	move:function(btn){//this-->pPhoto
		//如果当前点击的右边按钮
		if(!btn.className.endsWith("_disabled")){
			if(btn==this.btnR){
			//==其实比较的是两变量中的地址
			//	moved加1
			//	修改ul的style的left属性为：-LWIDTH*moved+20
				this.ul.style.left=-(this.LIWIDTH*(++this.moved)-20)+"px";
			}else{
				this.ul.style.left=(this.LIWIDTH*(--this.moved)+20)+"px";
			}
		}
		this.btnEnable();
	},
	//根据count和moved两个值的关系
	//修改两按钮的状态
	btnEnable:function(){
		//如果moved==0
		if(this.moved==0){
		//左边按钮的className+="_disabled"
			this.btnL.className+="_disabled";
		}
		//否则，如果count-moved+=5
		else if(this.count-this.moved==5){
		//右边按钮的className+="_disabled"

			this.btnR.className+="_disabled";
		}
		//否则
		else{
		//	将两按钮的className属性中的_disabled
		//	替换为"",再放回className中
			this.btnL.className=this.btnL.className.replace("_disabled","");
			this.btnR.className=this.btnL.className.replace("_disabled","");
		}

	},
	/*当鼠标进入img元素时，
	  根据小img的src路径更改中图片的路径
	*/
	changeMImg:function(){
		//先获得事件对象e
		var e=window.event||arguments[0];
		//再获得目标元素src
		var src=e.srcElement||e.target;
		//判断如果*目标元素*时IMG
		if(src.nodeName=="IMG"){
		//	取出目标元素的src属性，存入path
			var path=src.src;
		//	path变量的.之前插入"-m",存回path中
		//	比如：
			var i=path.lastIndexOf(".");
		}
		//找到id为mImg的元素，设置其src属性为path
		$("#mImg")[0].src=path.slice(0,i)+"-m"+path.slice(i);
	}




}
