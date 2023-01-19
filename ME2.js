var move1 = document.getElementById("circle");

var svg = d3.select("#container").append("svg")
            .attr("width", 750).attr("height", 600)
            .append("g").attr("transform", "translate(-50,20)");
            
var data = [{"child":"Diosdada Lamoco", "parent":""},
            {"child":"Miguela Lamoco", "parent":"Diosdada Lamoco"},
            {"child":"Arlyn Lamoco", "parent":"Diosdada Lamoco"},
            {"child":"Sandra Lamoco", "parent":"Diosdada Lamoco"},
            {"child":"Sheyra Eamiguel", "parent":"Miguela Lamoco"},
            {"child":"Sheryl Herrera", "parent":"Miguela Lamoco"},
            {"child":"JK Herrera", "parent":"Sheryl Herrera"},
            {"child":"Noah Herrera", "parent":"Sheryl Herrera"},
            {"child":"Alexa Herrera", "parent":"Sheryl Herrera"},
           ]

var dataStructure = d3.stratify()
                      .id(function(d){return d.child;})
                      .parentId(function(d){return d.parent;})
                      (data);

var treeStructure = d3.tree().size([900, 500]);

var information = treeStructure(dataStructure);
console.log(information.descendants());
console.log(information.links());

var connections = svg.append("g").selectAll("path")
                     .data(information.links());
connections.enter().append("path")
           .attr("d", function(d){
                return "M" + d.source.x + "," + d.source.y + " C " + 
                d.source.x + "," + (d.source.y + d.target.y)/2 + " " + 
                d.target.x + "," + (d.source.y + d.target.y)/2 + " " + 
                d.target.x + "," + d.target.y;
           });

var rectangles = svg.append("g").selectAll("rect")
                    .data(information.descendants());
rectangles.enter().append("rect")
          .attr("x", function(d){return d.x-90;})
          .attr("y", function(d){return d.y;})
          .attr('id', function(d, i){ return "person" + i})
          .attr("rx","30")
          .attr("ry", "50")
          .on('mouseover', function(d,i) {
            switch(this.id) {
                case "person" + 0:
                    document.getElementById('circle').src = "./Images/pic0.png";  
                    animate();
                    break;
                case "person" + 1:
                    document.getElementById('circle').src = "./Images/pic1.png";  
                    animate();
                    break;
                case "person" + 2:
                    document.getElementById('circle').src = "./Images/pic2.png";  
                    animate();
                    break;
                case "person" + 3:
                    document.getElementById('circle').src = "./Images/pic3.png";  
                    animate();
                    break;
                case "person" + 4:
                    document.getElementById('circle').src = "./Images/pic4.png";  
                    animate();
                    break;       
                case "person" + 5:
                    document.getElementById('circle').src = "./Images/pic5.png";  
                    animate();
                    break;   
                case "person" + 6:
                    document.getElementById('circle').src = "./Images/pic6.png";  
                    animate();
                    break;     
                case "person" + 7:
                    document.getElementById('circle').src = "./Images/pic7.png";  
                    animate();
                    break; 
                case "person" + 8:
                    document.getElementById('circle').src = "./Images/pic8.png";  
                    animate();
                    break;                      
                default:
                  console.log("default");
                }
        })
          .on('mouseout', function(d, i) {
                reflow();
        })

          .on('click', function(d,i) {
            for(var i = 0; i < data.length; i++){
                if(this.id == "person" + i){
                    window.open("./Profiles/person" + i + ".html");
                }else{
                    continue;
                }
            }
        });

var names = svg.append("g").selectAll("text")
               .data(information.descendants());
names.enter().append("text")
     .text(function(d){return d.data.child;})
     .attr("x", function(d){return d.x;})
     .attr("y", function(d){return d.y+15;})
     .attr('id', function(d, i){ return "name" + i})
     .attr("dominant-baseline", "text-before-edge")
     .attr("color", "white")

function animate(){
    move1.style.animation = "moving 0.5s linear forwards";
}

function reflow(){
    move1.style.animation = 'none';
    move1.offsetHeight; /* trigger reflow */
    move1.style.animation = null; 
}

