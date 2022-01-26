function convert(num){
    var number = parseInt(num)
    var binaryResult = number.toString(2)

    var result = document.getElementById("binary")

    result.value = binaryResult;
}