import {useState , createContext} from 'react'

export const    Courses = createContext();

export default function ProviderCourses({children}) {
    const [datas, setDatas] = useState([]);
    const [reponse, setReponse] = useState([]);
  
    return (
        <Courses.Provider value={{datas,setDatas,reponse,setReponse}}>
        {children}
        </Courses.Provider>
    )
}
