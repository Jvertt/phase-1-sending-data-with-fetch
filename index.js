function submitData(name, email){

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: name,
        email: email,
    })
}

return fetch("http://localhost:3000/users", configurationObject)
.then(response => response.json())
  .then(data => {
    // Retrieve the new id value
    const newId = data.id;
    // Append the new id value to the DOM
    const newElement = document.createElement('div');
    newElement.innerHTML = newId;
    document.body.appendChild(newElement);
  })
  .catch(error => {
    alert("bad things!");
    document.body.append(error.message);
});
}


  