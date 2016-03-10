var color = ["red","blue","pink","green","orange"]
var colorIndex = 0

$(document).ready(function(){
    for(var i=0; i<color.length; i= i+ 1) {
        console.log(color[i]);
        $("#colorlist").append("<li>"+ color[i] +"</li>");
    }
    $("#button1").click(function(){
        $("body").css("background-color", color[colorIndex]);
        colorIndex = colorIndex + 1
       if  (colorIndex>=color.length) {
           colorIndex= 0
       }
      
    });
});