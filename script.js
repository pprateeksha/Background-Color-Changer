const partent = document.getElementById("partent")

partent.addEventListener("click",(e)=>{
    const chlid = e.target;
    const body = document.querySelector("body");
    body.style.backgroundColor = chlid.id;
    chlid.textContent = "hello pp";
})