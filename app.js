let drawer=document.querySelector(".side-bar-toggle");
let drawerButton=document.querySelector(".slide");

// let bool=true;
drawerButton.addEventListener("click",()=>{
    //  console.log("A");
    // var A=drawer.style.display;
    // if(bool){
    //  if(drawer.style.display==="none"){
    //      drawer.style.display="block";
    //  }
    //  else{
    //      drawer.style.display="none";

    //  }

    let bool=drawer.style.display;
    bool?"none":"block"
})
