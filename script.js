function check() {
    let box = document.getElementById("incon");
    let inp = document.getElementById("input");


    if (!(/^\d*$/.test(inp.value))){
        box.style.animation = "error 0.3s linear";
        setTimeout(()=>{box.style.animation = ""}, 300)
    }
    else
        return inp.value;

    return false;
}

function enter(ele) {

    if(event.key === 'Enter') {
        if (check() === "126957")
            alert("good job")
        else
            alert("bad job")
    }
}