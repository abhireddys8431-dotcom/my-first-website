function doSearch(){

let q=document.getElementById("query").value

if(!q){
alert("Enter something to search")
return
}

window.open(
"https://www.google.com/search?q="+q+" tools"
)

}

function quickSearch(text){

window.open(
"https://www.google.com/search?q="+text
)

}
