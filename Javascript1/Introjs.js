function validate()
{
   var flag=validateName();
   console.log("flag: ",flag)

   var flag1=validatePass();
   console.log("flag1: ",flag1)

   
   return flag && flag1;
}
function validateName()
{
   var uname= document.getElementById("uname").value;
   if(uname.trim().length>=3)
   {
    document.getElementById("errmsg").innerHTML="";
    return true;
   }
   else
   {
    var erruname=document.getElementById("erruname").innerHTML="Username can't be space ";
    return false;
   }
}
function validatePass()
{
    var pass=document.getElementById("pass").value;
    var pass1=document.getElementById("cpass").value;

    if(pass.trim().length>=3 && pass===pass1)
    {
       
        return true;
    }
    else{
        document.getElementById("errmsgpass").innerHTML="Password is not matching and length of password should be greater than 3";
        return false;
    }
}