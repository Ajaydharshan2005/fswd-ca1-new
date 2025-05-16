import React from 'react'
import ServiceCard from './components/ServiceCard.jsx'
import './App.css'


const data=[{Servicetitle:"Web Development"},{Servicedescription:"Web development is something everyone should know before attending an interview"},
  {Servicetitle:"Programming"},{Servicedescription:"If you have passionate about debugging or creative thinking programming is the best "}
];

function App() {
  return (
    <div className='app'>
      <h1>service-listing</h1>
      <div className='ServiceCard-container'>
        {data.map((item,index)=>{
          return(
            <ServiceCard key={index} Servicetitle={item.Servicetitle} Servicedescription={item.Servicedescription}/>
          )
        })}
      </div>
    </div>
  )
}

export default App



  