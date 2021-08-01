import React from 'react'
import Emplois from "../a.emplois/index"
export default function Index() {
    const id= JSON.parse(localStorage.getItem("user"))._id
    return (
        <div>
            <Emplois id={id} />
            
        </div>
    )
}
