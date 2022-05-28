import { useEffect, useState } from "react"

const useHooks = () => {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://intense-garden-12250.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);

    return [tools, setTools];
}

export default useHooks;