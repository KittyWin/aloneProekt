let loginAdmin = document.querySelector(".login #login"), passAdmin = document.querySelector(".login #pass"), adminBtn = document.querySelector(".login #admin-btn")

const login = "admin", password = "1234";

adminBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    if((loginAdmin.value.toLowerCase() === login.toLowerCase()) && (password === passAdmin.value.toLowerCase()) ){
       location.replace(`html/S.html`)
    }else{
        console.log(`error`)
    }
})

