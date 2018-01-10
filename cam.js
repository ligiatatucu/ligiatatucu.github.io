var d= new Date();

document.getElementById("id_bussines_level_version").innerHTML=
"Business level version:" 
+ d.getFullYear() +"."+ d.getMonth() + "." + d.getDate() + ".0";

var constraints={audio:true, video:{facingMode:"download"}};
	

navigator.mediaDevices.getUserMedia(constraints).then(on_succes).catch(on_error);

var video=document.getElementById("id_video");
video.addEventListener("touchstart", snap);
//-----------------------
function on_succes(stream)
{
	video.srcObject==stream;
}

//----------------------


function on_error(error) 
{
	alert("Sorry!Not working");
}

//-----------------------

function snap() 
{
	var canvas=document.getElementById("id_canvas");
	var context=canvas.getContext("2d");
	context.draw.Image(video, 0, 0,640,480);
}

//-----------------------
function  download()
{
	var image=canvas.toDataURL("image/png");
	window.location.href=my_image;
}