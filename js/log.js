function log(){
	var username=document.getElementById("username").value;
	var pwd=document.getElementById("password").value;
	
	if(username==""){
		alert("不能为空");
		return false;
	}
	if(pwd==""){
		alert("不能为空");
		return false;
	}
	
	if(localStorage.getItem("uname"))
	{
		var uname=localStorage.getItem("uname").toString();
		var pass=localStorage.getItem("pwd").toString();
		if(username==uname){
			if(pwd==pass){
				sessionStorage.setItem("username",uname);
				alert("登录成功");
				window.location.href="index.html"
			}
			else{
				alert("密码有误!");
				return false;
			}
		}
		else{
			alert("用户名不存在");
			return false;
		}
		
	}
	else{
		alert("请先注册");
		return false;
	}
	
}