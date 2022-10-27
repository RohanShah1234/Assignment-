// document.getElementById("passs").style.display="none";
// document.getElementById("conpasss").style.display="none";
function validation(){
            let pass = document.getElementById('pass').value;
            let conpass = document.getElementById('conpass').value;

                if(pass==""){
                    document.getElementById('passs').innerHTML="**Please Enter the Password**";
                    return false;
                }
                if(pass.length<6 || pass.length>12){
                    document.getElementById('passs').innerHTML="**Please Enter password more then 6 and less then 12 Caracters**";
                    return false;
                }
                if(pass.search(/[0-9]/)==-1){
                    document.getElementById('passs').innerHTML="**Please Enter atleast 1 No. in the password**";
                    return false;
                }
                if(pass.search(/[a-z]/)==-1){
                    document.getElementById('passs').innerHTML="**Please Enter atleast 1 Lowercase**";
                    return false;
                }
                if(pass.search(/[A-Z]/)==-1){
                    document.getElementById('passs').innerHTML="**Please Enter atleast 1 Uppercase**";
                    return false;
                }
                if(pass.search(/[!\@\#\$\%\^\&\*\(\)\<\>]/)==-1){
                    document.getElementById('passs').innerHTML="**Please Enter atleast 1 special ch in the password**";
                    return false;
                }
                //if(pass==" "){
                //    document.getElementById('passs').innerHTML="**Please don't enter space**";
                //    return false;
                //}
                if (/\s/.test(pass)){
                    document.getElementById('passs').innerHTML="**There should not space**";
                    return false;
                }

                else{
                    document.getElementById('passs').innerHTML="";
                }
                if(conpass != pass){
                    document.getElementById('conpasss').innerHTML="Password Not Mathched";
                    return false;
                }
                else{

                    alert("password matched");
                }
 }
 /*let pattern= /\s/g;
 function white(data){
    let isSpace = pattern.test(data);
    if(isSpace){
        document.getElementById('passs').innerHTML="**Space is not allowed**";
                    return false;
    }
    else{
        alert.innerText="";
    }

 }*/