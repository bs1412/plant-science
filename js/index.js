var i=1;
function lunbo(){
	var obj=document.getElementById("hx");
	i++;
	if(i>4)
	{
		i=1;
		obj.src="./img/plant1.jpg";
	}
	else{
		obj.src="./img/plant"+i+".jpg";
	}
}
function chk()
{
	if(sessionStorage.getItem("username"))
	{
		alert("欢迎你,"+sessionStorage.getItem("username").toString());
	}
	else
	{
		alert("请先登录");
		window.location.href="log.html";
	}
}
window.onload = function() {
	chk();
    setInterval(lunbo, 2000);
};
