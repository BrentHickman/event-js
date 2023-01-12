// User Interface Logic
function handleSubmission(event) {
  event.preventDefault();
  
  const selected = document.querySelector("input[name='q01']:checked").value;
  console.log("result:",selected);
  
  let result = "";
  console.log("result:" , result);
  
  if('veryBad' === selected)
    result = "Do not work here!";

  else if('neutral' === selected)
    result = "Work neutral here!";
  else
    result = "It's Great!";

  document.getElementById("output").innerHTML = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("surveyform");
  form.addEventListener("submit", handleSubmission);
});

