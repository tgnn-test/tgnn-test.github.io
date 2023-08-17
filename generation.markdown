---
layout: page
title: Topology Generation
permalink: /generation/
---

<link rel="stylesheet" href="{{ base.url | prepend: site.url }}/assets/css/style.css">

<script> var methodToUse = "bigg"; </script>
<script> var topoToUse = "geant2001"; </script>

<div id="wrapper">

<h1>Method:</h1>
<div class="custom-select" style="width:200px;" id="div1">
<select id="method" onchange="setMethod()">
  <option value="bigg">Select method</option>
  <option value="bigg">BiGG</option>
  <option value="netgan">Netgan</option>
  <option value="graphrnn">GraphRNN</option>
  <option value="gsm">GSM</option>
  <option value="graphgdp">GraphGDP</option>
</select>
</div>

<h1>Topology:</h1>
<div class="custom-select" style="width:200px;" id="div2">
<select id="topo" onchange="setTopo()">                                     
  <option value="geant2001">Select topology</option>                                   
  <option value="geant2001">Geant2001</option>                                            
  <option value="bren">BREN</option>                                        
  <option value="btnorthamerica">BtNorthAmerica</option>                                    
  <option value="gtsslovakia">GtsSlovakia</option>                                              
</select> 
</div>

</div>

<script src="{{ base.url | prepend: site.url }}/assets/js/options.js"></script>
<div class="slidecontainer">
  <img src="../plots/bigg_geant2001_0.png" alt="" id="img">
  <p>Move through different generated graphs here:</p>
  <input type="range" min="0" max="109" value="0" class="slider" id="myRange">
  <p>Place <span id="value"></span> in ordered list of best fits as measured by Kolmogorow-Smirnov distance</p>
</div>

<script src="{{ base.url | prepend: site.url }}/assets/js/some-script.js"></script>
