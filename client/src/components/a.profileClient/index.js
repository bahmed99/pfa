import "./style.css"
import { useState, useEffect } from "react"
import axios from "axios"
import ModalModifierProfile from "./ModalModifierProfile"
export default function Index() {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [clients, setClients] = useState([])

    const [modifierProfileModalOpen, setModifierProfileModalOpen] = useState(true)
    const [selectInfoData, setSelectInfoData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/client/client", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }}).then(res => {
            setData(res.data)
            setLoading(false)
        })
    }, [])
    if (loading) {
        return "Loading..."
    }



    return (
        <>
            <ModalModifierProfile
                setModal={setModifierProfileModalOpen}
                fetchData={data}
                setData={setData}
                isOpen={modifierProfileModalOpen}
            />
        </>

    )
}



