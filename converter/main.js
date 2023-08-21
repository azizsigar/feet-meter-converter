let meterbtn= document.getElementById('meters');
let feetbtn= document.getElementById("feets");

meterbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value =input / 3.2+ "  meters";
})
feetbtn.addEventListener("click",function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 3.2+" "+ "feets";
    
})