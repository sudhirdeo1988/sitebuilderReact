
export const checkLogin = async (loginInfo) =>{
    console.log(loginInfo);
    const data = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo)
    }).then(response => response.json());
    return data;
}