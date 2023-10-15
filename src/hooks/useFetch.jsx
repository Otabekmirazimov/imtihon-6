import { data } from "autoprefixer";
import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(null)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true)
            try {
                const req = await fetch(url)
                if (!req.ok) {
                    throw new Error(req.statusText)
                }
                const data = await req.json()
                setData(data)
                setIsPending(false)
            } catch (err) {
                console.log(err.message);
                setError(err.message)
                setIsPending(false)
            }
        }
        fetchData()
    }, [url])
    return { data, isPending, error}
}