window.$=HTMLElement.prototype.$=function(selector){
	return (this==window?document:this).querySelectorAll(selector);
}
/*********************原生DOM实现顶层菜单栏*********************/
window.onload=function(){
	$("#top .items_one")[0].onmouseover=$("#top .items_two")[0].onmouseover=
	$("#top .partner")[0].onmouseover=$("#top .Web")[0].onmouseover=showItems;
	$("#top .items_one")[0].onmouseout=$("#top .items_two")[0].onmouseout=
	$("#top .partner")[0].onmouseout=$("#top .Web")[0].onmouseout=hideItems;

}
//鼠标进入li时，显示下方的元素
function showItems(){
	//在当前元素下找class
	this.$("[class$='_box']")[0].style.display="block";	
}
function hideItems(){
	this.$("[class$='_box']")[0].style.display="none";
}


$("#banner_items li.one_a").hover(function(){
	$("#banner_items ul.child_items").animate({"width":"71px"},2000);
})






