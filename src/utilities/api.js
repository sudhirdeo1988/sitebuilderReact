

export const fetchData = async () =>{
    const data = await fetch(`http://192.168.1.208:8080/auth/user`, {
        "method":"GET"
    }).then(respo => respo.json());
    return data;
}