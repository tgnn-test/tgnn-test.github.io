var dictionaries = {
  "bigg": {
	  "geant2001": 109,
	  "bren": 526,
	  "btnorthamerica": 287,
	  "gtsslovakia": 128,
  },
 "netgan": {                                                                     
          "geant2001": 284,                                                     
          "bren": 400,                                                            
          "btnorthamerica": 396,                                                
          "gtsslovakia": 56,                                                   
  },
  "graphrnn": {                                                                     
          "geant2001": 1024,                                                     
          "bren": 337,                                                            
          "btnorthamerica": 1024,                                                
          "gtsslovakia": 124,                                                   
  },
  "gsm": {                                                                     
          "geant2001": 1024,                                                     
          "bren": 473,                                                            
          "btnorthamerica": 1024,                                                
          "gtsslovakia": 550,                                                   
  },
  "graphgdp": {                                                                     
          "geant2001": 1024,                                                     
          "bren": 526,                                                            
          "btnorthamerica": 1004,                                                
          "gtsslovakia": 408,                                                   
  },
};

function setMethod() {
  var opt = document.getElementById("method");                                     
  var opt2 = document.getElementById("topo");                                     
  methodToUse = opt.value;
  console.log(opt.value);
  console.log(opt.options[opt.selectedIndex].text);
  var img = document.getElementById("img");                                     
  img.setAttribute("src", "../plots/" + opt.value + "_" + opt2.value + "_0.png");
  console.log('setting max to ' + dictionaries[opt.value][opt2.value])
  var range = document.getElementById("myRange");
  range.setAttribute("max", dictionaries[opt.value][opt2.value]);
}

function setTopo() {
  var opt = document.getElementById("topo");
  var opt2 = document.getElementById("method");
  topoToUse = opt.value;
  console.log(opt.value);
  console.log(opt.options[opt.selectedIndex].text);
  var img = document.getElementById("img");
  img.setAttribute("src", "../plots/" + opt2.value + "_" + opt.value + "_0.png");
  var range = document.getElementById("myRange");
  range.setAttribute("max", dictionaries[opt2.value][opt.value]);
}

/*
var method = document.getElementById("method");                                
                                                                                
method.oninput = function() {                                                   
  var img = document.getElementById("img");                                     
  img.setAttribute("src", "../plots/" + method.value  + "_geant2001_0.png");
} */    
