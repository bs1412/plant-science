function reg()
{
	var username=document.getElementById("username").value;
	var pwd=document.getElementById("password").value;
	var repwd=document.getElementById("repassword").value;
	var phone=document.getElementById("telephone").value;
	var age=document.getElementById("age").value;
	
	if(username==""){
		alert("化名不能为空");
		return false;
	}
	if(pwd==""|| repwd==""){
		alert("密码不能为空");
		return false;
	}
	if(pwd!=repwd){
		alert("两次密码不一致");
		return false;
	}
	if(phone == ""){
        alert("手机号不能为空");
        return false;
    }
    if(!/^1[3-9]\d{9}$/.test(phone)){
        alert("请输入正确的手机号码");
        return false;
    }
	if(age == ""){
        alert("年龄不能为空");
        return false;
    }
	
	localStorage.setItem("uname",username);
	localStorage.setItem("pwd",pwd);
	localStorage.setItem("phone",phone);
	localStorage.setItem("age",age);
	alert("注册成功");
	window.location.href="log.html";
	
	
}