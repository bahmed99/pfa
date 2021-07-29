import { useParams } from 'react-router-dom'

import data from "../../data/cours.json"
import PDFreader from "./PDFreader/index"
export default function Cour() {

    const { id } = useParams();
    return (
        <div>
            <PDFreader file ={data[parseInt(id-1)].file}/>
        </div>
    )
}
