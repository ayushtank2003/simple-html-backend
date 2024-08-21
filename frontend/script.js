function submitform() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    // Log values to make sure they are captured correctly
    console.log({ name, email, phone, password });

    fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  // Ensure correct spelling here
        },
        body: JSON.stringify({
            name,
            email,
            phone,
            password,
        })
    }).then((response) => response.json())
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error("Error during fetch:", error);
    });
}

