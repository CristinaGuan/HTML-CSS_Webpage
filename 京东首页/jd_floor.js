/*获得任意元素距页面顶部的总高度*/
HTMLElement.prototype.getElementTop=function(){
	//this-->正在调用方法的element对象
	//获得当前元素距绝对定位的父元素顶部距离
	var height=this.offsetTop; 
	//获得当前元素的绝对定位的父元素
	var parent=this.offsetParent;
	//反复获得父元素距它的父元素顶部的距离，并累加
	while(parent!=null){
		height+=parent.offsetTop;
		parent=parent.offsetParent;
	}
	return height;
}
window.onload=function(){
	adv.init();
}
/*当用户滚动页面时触发*/
window.onscroll=function(){
	var scrollHeight=document.documentElement.scrollTop                     
					||document.body.scrollTop;
	for(var i=1;i<=3;i++){
	var totalHeight=$("#f"+i+" span")[0].getElementTop();
	//当span高于窗口下沿以上90左右时，亮灯
	//当span接近窗口顶部以下100左右时，灭灯
if(totalHeight<
	scrollHeight+parseFloat(window.innerHeight)-120
	&&totalHeight>scrollHeight+100){
	$("#f"+i+" span")[0].className="hover";
}else{
	$("#f"+i+" span")[0].className="";
}
	}
	var f1Top=$("#f1 span")[0].getElementTop();
	var footerTop=$("footer")[0].getElementTop();
	var height=scrollHeight+parseFloat(window.innerHeight);
	if(height>f1Top&&height<footerTop){
		$('#elevator')[0].style.display="block";
	}else{
		$('#elevator')[0].style.display="";
	}

	var lis=$('#elevator li');
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(){//this-->当前点击的li
var spanTop=
$("#f"+this.dataset.idx+" span")[0].getElementTop();
			window.scrollTo(0,spanTop-50);
		}
	}
}