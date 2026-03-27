let a = document.getElementById("animal");
a.addEventListener("mouseover",function(){
    a.innerHTML="King of Jungle";
});
a.addEventListener("mousedown",function(){
    a.innerHTML="Lion";
});

setTimeout(function(){
    alert("Welcome To Animal Page");
},2000);
