var type=new Typed("#type",
{
	strings:["","Lorem ipsum dolor sit amet consectetur adipisicing elit. impedit debitis necessitatibus veniam porro ducimus eligendi? Ex consequuntur enim expedita!"],
	typeSpeed:80
	}
)

var bnt=document.getElementsByClassName("navbar-toggler")[0],
    slid=document.getElementsByClassName("slid")[0]
bnt.onclick=function(){
    slid.style.opacity=0.2

}

var all=document.getElementById("all"),
    paris=document.getElementById("paris"),
    cairo=document.getElementById("cairo"),
    milano=document.getElementById("milano"),
    mosco=document.getElementById("mosco"),
	london=document.getElementById("london"),
	p1=document.getElementById("p1"),
	p2=document.getElementById("p2"),
	p3=document.getElementById("p3"),
	p4=document.getElementById("p4"),
	p5=document.getElementById("p5"),
	p6=document.getElementById("p6"),
	p7=document.getElementById("p7"),
	p8=document.getElementById("p8");
	


all.onclick=function(){
p1.style.opacity=1
p2.style.opacity=1
p3.style.opacity=1
p4.style.opacity=1
p5.style.opacity=1
p6.style.opacity=1
p7.style.opacity=1
p8.style.opacity=1
}
paris.onclick=function(){
p1.style.opacity=1
p4.style.opacity=1

p2.style.opacity=0.2
p3.style.opacity=0.2
p5.style.opacity=0.2
p6.style.opacity=0.2
p7.style.opacity=0.2
p8.style.opacity=0.2
}
cairo.onclick=function(){
	p2.style.opacity=1
	p5.style.opacity=1
	
	p1.style.opacity=0.2
	p3.style.opacity=0.2
	p4.style.opacity=0.2
	p6.style.opacity=0.2
	p7.style.opacity=0.2
	p8.style.opacity=0.2
	}
milano.onclick=function(){
	p3.style.opacity=1
	p6.style.opacity=1
	
	p2.style.opacity=0.2
	p1.style.opacity=0.2
	p5.style.opacity=0.2
	p4.style.opacity=0.2
	p7.style.opacity=0.2
	p8.style.opacity=0.2
	}
mosco.onclick=function(){
	p4.style.opacity=1
	p8.style.opacity=1
	
	p2.style.opacity=0.2
	p1.style.opacity=0.2
	p5.style.opacity=0.2
	p3.style.opacity=0.2
	p7.style.opacity=0.2
	p6.style.opacity=0.2
}
london.onclick=function(){
	p1.style.opacity=1
	p7.style.opacity=1
	
	p2.style.opacity=0.2
	p3.style.opacity=0.2
	p5.style.opacity=0.2
	p4.style.opacity=0.2
	p6.style.opacity=0.2
	p8.style.opacity=0.2}

AOS.init({
		offset: 120,
		duration: 400});

var x=document.getElementById("x");
x.onclick=function(){
	swal({
		title:" Great Choic  ",
		text: " Our Service Will Conect With you in near Time",
		icon: "success",
		buttons: {
			confirm : {text:'Ok Im Wait',className:'sweet-warning'},			
	}}
)}



setInterval(function(){
	var x= parseInt($("#p_one").text());
	 $("#p_one").text((x+52+" k"))
	 
	 var z= parseInt($("#p_two").text());
	 $("#p_two").text((z+3))

	 var z= parseInt($("#p_three").text());
	 $("#p_three").text((z+11)+" K")
	 
	 var z= parseInt($("#p_four").text());

	 if(z===1){
		 return
	 }
	 else{
		$("#p_four").text((z-1))
	 }
	},4000)



 
 