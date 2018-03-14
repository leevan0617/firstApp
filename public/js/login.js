$(() => {
    $("form")[0].onsubmit=(e)=>{
        e.preventDefault();
    }
    $("#submit").click(function(){
        $.post("/usersinfo/login", { "phone": $("#phone").val(), "pwd": $("#pawd").val() }, (data) => {
           console.log(data)
            if (data.length >0){
              window.location.href="index.html"
            }else{
                $(".error_info").show()
            }
        })
    })
})