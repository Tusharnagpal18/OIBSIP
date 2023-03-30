
// fetching the input value
let inputData = document.querySelector('input')

//Result span 
let Result = document.querySelector('form > span')

//Label Heading 
let label = document.querySelector('form > label')

//Button Trigger event set.
let btn = document.querySelector('form > button')
btn.addEventListener("click", (e) => {
  let Option1 = document.getElementById("difftemp1").value;
  e.preventDefault()
  if (inputData.value == "") {
    alert("!please enter Some input Value")
  }
  else {
    // here we check the condition for Celsius convertion.
    if (Option1 == "cel") {
      console.log("in the celsius");
      Result.innerHTML = `<br>  ${(inputData.value *1.8) +32}`;
      label.innerHTML = "Celsius to Fahrenheit"
      
    }
    // here we check the condition for Fahrenheit convertion.
    else if (Option1 =="fah"){
      console.log("in the fah");
      Result.innerHTML = `<br>  ${(inputData.value - 32) * 5/9}`;
      label.innerHTML = "Fahrenheit to Celsius"
     
    }
    else{
      alert("please select temperature!");
    }
  }
})
