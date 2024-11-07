let screen = document.getElementById('screen');
function btnclick(value){
    screen.value += value;
}
function clearscreen(){
    screen.value= "";

}
function findresult(){
    var result = eval(screen.value)
    screen.value = result;
}
function percentageClick() {
    var text = document.getElementById("screen").value;
    if (text) {
        var result = eval(text) / 100; 
        document.getElementById("screen").value = result;
    }
}