document.getElementById("submit").onclick = function () {
    let radius = document.getElementById("Radius").value;
    let pi = 3.142;
    area = 2 * pi * radius;
    document.getElementById("myH2").textContent = `Area is ${area}`;
}

document.getElementById("calculate").onclick = function () {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    let area = length * width;
    let perimeter = 2*(length + width);
    document.getElementById("area").textContent = `The area is ${area}`;
    document.getElementById("perimeter").textContent = `The perimeter is ${perimeter}`;
   
  
}