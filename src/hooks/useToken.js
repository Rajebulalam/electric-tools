import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.displayName;
        const currentUser = {
            email,
            name
        };
        if (email) {
            fetch(`https://intense-garden-12250.herokuapp.com/admins/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user, token])
    return [token];
}

export default useToken;