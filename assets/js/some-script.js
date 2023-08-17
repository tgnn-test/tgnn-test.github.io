var slider = document.getElementById("myRange");                                
var output = document.getElementById("value");                                  
                                                                                
output.innerHTML = slider.value;                                                
                                                                                
slider.oninput = function() {                                                   
  output.innerHTML = this.value;                                                
  
  var opt = document.getElementById("method");                                     
  var opt2 = document.getElementById("topo");

  var img = document.getElementById("img");                                     
  img.setAttribute("src", "../plots/" + opt.value + "_" + opt2.value + "_" + this.value + ".png");     
}
