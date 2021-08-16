import React, { useEffect, useState } from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'  // new
import image1 from './../../../pages/o.Signin/o.images/0004.gif'
import { PictureAsPdf } from '@material-ui/icons'
import Modifier from "../Modifier"
// import SignUp from '../SignUp'
// import './index.style.css'




function Index() {
  const [ajoutSeanceModalOpen,setAjoutSeanceModalOpen]=useState(false)
  const [data1,setData1]= useState([])
  useEffect(()=>{
  fetch("http://localhost:3001/car/all",{
    headers:{
      "Content-Type":"application/json" ,
  }
  }).then(res=>res.json())
  .then(result=>{
   
    setData1(result)
  })
 
},[])

  const columns = React.useMemo(() => [
    { Header: "Photo",
      Cell: AvatarCell,
      imgAccessor: 'pic',
      
    },
    {
      Header: "Model",
      accessor: 'model',
    },
    
    {
      Header: "Numéro de Série",
      accessor: 'serie',
    },
    {
      Header: "Age",
      accessor: 'age',
    },
    {
      Header: "Kilométrage",
      accessor: 'mileage',
    },
    {
      Header: "Date Assurance",
      accessor: 'assuranceDate',
    },
    {
      Header: "Date Visite Technique",
      accessor: 'technicVisitDate',
    },

    {
      Header: "État",
      accessor: 'service',
      Filter: SelectColumnFilter,  // new
      Cell: StatusPill,
      filter: 'includes',
    },
  ], [])
  
  return (
    <div className="min-h-screen">
      <div className="firstdiv" style={{
            backgroundImage: 'url('+image1+')',
            backgroundSize: "cover",
            height: "100vh",
            marginTop:"70px" ,
            backgroundPosition: "center!important" ,
          }}>
            
            
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            
              <div className="mt-6">
                <Table columns={columns} data={data1} setData1={setData1} />
              </div>
            </main>   
      </div>
    </div>
  );
}

export default Index;