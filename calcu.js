// here buttons is not having defined content ,so we are passing argumen as unknown content
function display(content){
    // here input box is not having any content ,only value available ,thus
     input.value += content
}
// for all clear
function alclear(){
    input.value = " "
}
function calculate(){
    try
    {input.value = eval(input.value)}
    catch{
     alert('invalid')
    }
}
function del(){
    input.value=input.value.slice(0,-1)
}