function fetchAndDisplayUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was no ok" + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const uersContainer = document.getElementById("users-container");
        uersContainer.innerHTML = ""; 

        data.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email :</strong> ${user.email}</p>
            <p><strong>Phone :</strong> ${user.phone}</p>
            <p><strong>Website :</strong> ${user.website}</p>
            <p><strong>city :</strong> ${user.address.city}, <strong>Zipcode :</strong> ${user.address.zipcode}</p>
            `;

            uersContainer.appendChild(userDiv);
        })
    })
    .catch(error => {
        console.error("There was a problem with the fetch opration", error);
    }); 
}

fetchAndDisplayUsers();
