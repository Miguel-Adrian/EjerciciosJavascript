let btnV = document.getElementById("btnVal");




btnV.addEventListener("click", function(e){
    e.preventDefault();
let n1 = parseFloat(document.getElementById("n1").value);
let n2 = parseFloat(document.getElementById("n2").value);
let n3 = parseFloat(document.getElementById("n3").value);
let arreglo = [n1,n2,n3];
let res = document.getElementById("alertRes");


    let max=0
    for (let i = 0; i < arreglo.length; i++) {
        if (max < arreglo[i]){
            max = arreglo[i];
        } 
        res.innerHTML = ("El número es:" + max);  
    }
   
})