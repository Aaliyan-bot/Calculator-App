const h11 = document.getElementById("myH1").textContent = "Enter the Radius of the circle:"
const PI = 3.14159
let radius;
let circumference;
document.getElementById("mySubmit").onclick = function(){
   radius = document.getElementById("myInput").value
   radius = Number(radius)
   circumference = 2 * PI * radius;
   document.getElementById("myh3").textContent = circumference + " cm";
   console.log(radius)
   console.log(circumference)

}



  
