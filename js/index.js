$(document).ready(function(){
// $.ajax({url:"hrel/12.md",success:function(result){
// $(".po").html(result);
// }});

// $.ajax({
//     		type : 'get',
//     		dataType : 'json',
//      	url : 'hrel/as.json',
//       data: 'address',
//     		success : function(data) {
//              alert(data.name);
//     		},
//     error:function(msg){
//         alert("失败");
//     }
// });
$('.left').on('click',function(){
$('.wht').css('display',"inline-block");
$(".po,.pa").text("");

})
$('.wht').on('click','li',function(){
var x=$(this).text();


$.ajax({


	url:"hrel/"+x+".html",
	data:{num:$(".po").val()},
	success:function(data){
		if(x= '*.html'){
$(".po").append(data)
 $('.wht').css('display',"none");
		}
		// else  if(x ='*.json'){
		// 			 for(var i=0; i<data.address.length; i++)  
  // {  
		// $(".po").append("<li>你输入的<b> "+data.address[i].name+"</b>是<a> "+data.address[i].url+"</a></li>");
  //       $('.wht').css('display',"none");
  // } 
		
		// }


	}

})
})
// $.get("hrel/as.json",function(){alert(1)})

});


