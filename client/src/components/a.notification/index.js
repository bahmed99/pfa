import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'react-big-calendar/lib/sass/styles.scss'
import './styles.scss'
import './prism.scss'
import Layout from 'react-tackle-box'
import 'react-big-calendar/lib/sass/styles.scss'
import Card from './Card'
// import ExampleControlSlot from './ExampleControlSlot'
import Basic from './notification'


export default function Index() {
    return (
        <div className="app">
        <div className="jumbotron">
          <div className="container">
            <h1>
              Big Calendar <i className="fa fa-calendar" />
            </h1>
            <p>such enterprise, very business.</p>
            
          </div>
        </div>
        <div className="examples">
          {/* <Card className="examples--header">
            
            <ExampleControlSlot.Outlet />
          </Card> */}
          <div className="example">
            <Basic  />
          </div>
        </div>
        
      </div>
    )
}
