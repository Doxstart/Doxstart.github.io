function createTree(){treeJSON=d3.json("flare.json",function(u){console.log(u),u={name:"I miei interessi",children:[{name:"Musicali",children:[{name:"Rock"},{name:"Metal"}]},{name:"Sportivi",children:[{name:"Mountain Biking"},{name:"Snowboarding"}]},{name:"Gastronomici",children:[{name:"Cucina Ecuadoriana"},{name:"Cucina Italiana"},{name:"Cucina Cinese"}]}]},console.log(u),console.log("running");var o,g=0,L=0,f=750,v=$(window).width(),m=$(window).height();$(window).resize(function(){v=$(window).width(),m=$(window).height(),console.log("doc height is "+$(window).height())});var s=d3.layout.tree(),p=d3.svg.diagonal().projection(function(e){return[e.y,e.x]});(function k(e,n,r){if(e){n(e);var c=r(e);if(c)for(var d=c.length,h=0;h<d;h++)k(c[h],n,r)}})(u,function(e){g=Math.max(e.name.length,g)},function(e){return e.children&&e.children.length>0?e.children:null}),console.log(g);var a=d3.behavior.zoom().scaleExtent([.1,3]).on("zoom",function Y(){l.attr("transform","translate("+d3.event.translate+")scale("+d3.event.scale+")")}),D=d3.select("#tree-container").append("svg").attr("width","100%").attr("height","100%").attr("class","overlay").call(a);function _(e){e.children&&(e._children=e.children,e._children.forEach(_),e.children=null)}var N=function(){var e=[];null!==draggingNode&&null!==selectedNode&&(e=[{source:{x:selectedNode.y0,y:selectedNode.x0},target:{x:draggingNode.y0,y:draggingNode.x0}}]);var n=l.selectAll(".templink").data(e);n.enter().append("path").attr("class","templink").attr("d",d3.svg.diagonal()).attr("pointer-events","none"),n.attr("d",d3.svg.diagonal()),n.exit().remove()};function E(e){scale=a.scale(),x=-e.y0,y=-e.x0,x=x*scale+v/2,y=y*scale+m/2,d3.select("g").transition().duration(f).attr("transform","translate("+x+","+y+")scale("+scale+")"),a.scale(scale),a.translate([x,y])}function G(e){A(e=function B(e){return e.children?(e._children=e.children,e.children=null):e._children&&(e.children=e._children,e._children=null),e}(e)),E(e)}function A(e){var n=[1],r=function(t,i){i.children&&i.children.length>0&&(n.length<=t+1&&n.push(0),n[t+1]+=i.children.length,i.children.forEach(function(I){r(t+1,I)}))};r(0,o);var c=25*d3.max(n),d=(s=s.size([c,v])).nodes(o).reverse(),h=s.links(d);d.forEach(function(t){t.y=t.depth*(10*g)}),node=l.selectAll("g.node").data(d,function(t){return t.id||(t.id=++L)});var C=node.enter().append("g").attr("class","node").attr("transform",function(t){return"translate("+e.y0+","+e.x0+")"}).on("click",G);C.append("circle").attr("class","nodeCircle").attr("r",5).style("fill",function(t){return t._children?"lightsteelblue":""}),C.append("text").attr("x",function(t){return t.children||t._children?-10:10}).attr("dy",".35em").attr("class","nodeText").attr("text-anchor",function(t){return t.children||t._children?"end":"start"}).text(function(t){return t.name}).style("fill-opacity",0),C.append("circle").attr("class","ghostCircle").attr("r",30).attr("opacity",.2).style("fill","red").attr("pointer-events","mouseover").on("mouseover",function(t){!function(e){selectedNode=e,N()}(t)}).on("mouseout",function(t){selectedNode=null,N()}),node.select("text").attr("x",function(t){return t.children||t._children?-10:10}).attr("text-anchor",function(t){return t.children||t._children?"end":"start"}).text(function(t){return t.name}),node.select("circle.nodeCircle").attr("r",2).style("fill",function(t){return t._children?"lightsteelblue":"#fff"}),node.transition().duration(f).attr("transform",function(t){return"translate("+t.y+","+t.x+")"}).select("text").style("fill-opacity",1);var T=node.exit().transition().duration(f).attr("transform",function(t){return"translate("+e.y+","+e.x+")"}).remove();T.select("circle").attr("r",0),T.select("text").style("fill-opacity",0);var w=l.selectAll("path.link").data(h,function(t){return t.target.id});w.enter().insert("path","g").attr("class","link").attr("d",function(t){var i={x:e.x0,y:e.y0};return p({source:i,target:i})}),w.transition().duration(f).attr("d",p),w.exit().transition().duration(f).attr("d",function(t){var i={x:e.x,y:e.y};return p({source:i,target:i})}).remove(),d.forEach(function(t){t.x0=t.x,t.y0=t.y})}var l=D.append("g");a.scale(1.7),console.log(a.scale()+"SDFDSFDSF"),(o=u).x0=m/2,o.y0=0,function S(e){e.children&&(e.children.forEach(S),_(e))}(o),A(o),E(o)})}