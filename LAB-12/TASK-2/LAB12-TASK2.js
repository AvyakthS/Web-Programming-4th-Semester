const success=()=>{
    var hideCheckbox = document.querySelector("input[name='hide-it']");
    if(hideCheckbox.checked){
        document.getElementById("para").style.display = 'none';
    } else{
        document.getElementById('para').style.display = 'block';
    }
}