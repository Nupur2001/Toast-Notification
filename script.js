document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector("button");
  let toasts = document.querySelector(".toasts");

  btn.addEventListener('click',()=>{
    let mesgArr=["Message1","Message2","Message3"]

    let randomMessageArray=mesgArr[(Math.floor(Math.random()*mesgArr.length))]
    console.log(randomMessageArray)

    let toast=document.createElement("div")
    toast.classList.add('toast')

    toasts.appendChild(toast)
    
    function toastVanish(){
        toast.innerHTML=randomMessageArray

    }
    toastVanished()
    function toastVanished(){
        setTimeout((toastVanish()),100)
    }

    
    // toast.innerHTML=randomMessageArray
  })
});
