var slider = document.getElementById("myRange");                                
var output = document.getElementById("value");                                  
                                                                                
output.innerHTML = slider.value;                                                
                                                                                
slider.oninput = function() {                                                   
  output.innerHTML = this.value;                                                
                                                                                
  var img = document.getElementById("img");                                     
  img.setAttribute("src", "../plots/bigg_geant2001_" + this.value + ".png");     
} 
