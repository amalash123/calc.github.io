function ButtonClick(val){
    document.getElementById("screen").value+=val
    console.log(val)
}
function clearscreen(){
    document.getElementById("screen").value=""
    
}
function EqualClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}