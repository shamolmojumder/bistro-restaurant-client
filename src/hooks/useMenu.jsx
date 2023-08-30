import { useEffect, useState } from "react"

const useMenu=()=>{
    const [menu, setmenu] = useState([])
    const [loading, setLoading] = useState(true)
    // console.log("menu",menu);
    useEffect(() => {
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            setmenu(data)
            setLoading(false)
        })
    }, [])

    return [menu,loading]
    
}

export default useMenu;