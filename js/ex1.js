let myDiv=document.getElementById("mydiv");
myDiv.addEventListener("mouseover",click)
myDiv.addEventListener("mouseout",unClick)


function unClick(){
    myDiv.innerHTML="Hello world"
}
function click(){
    myDiv.innerHTML="Can I help You?"
}
































// let myDiv=document.getElementById('mydiv'), 
// OrginalText=myDiv.innerHTML;
//  myDiv.addEventListener("mouseover",()=>myDiv.innerHTML='Can I help you?');
//  myDiv.addEventListener("mouseleave",()=> myDiv.innerHTML= OrginalText );