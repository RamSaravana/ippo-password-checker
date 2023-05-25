export const savePassword = (password) => {
    const headers = generateHeaders("POST",JSON.stringify({
        password: password,
        username: "default",
    }))
    fetch("http://localhost:5000/auth", headers)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
}

const generateHeaders = (method,body) => {
    return {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body:body
    }
} 