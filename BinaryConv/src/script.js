function convert(){
    var dec = 0;
    var inpV = document.getElementById("inp")
    var bin = inpV.value;
    
    for(var i = 0; i < bin.length; i++){
        dec = dec + parseInt(bin[i]) * Math.pow(2,bin.length -1 -i)
    
    var result = document.getElementById("result")

    result.value = dec    
    }
    
}