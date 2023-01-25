import React from 'react'
import "./Home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import NavBar from "../../components/navbar/Navbar"
import Widget from '../../components/widget/Widget'

const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <NavBar />
          <div className="widgets">
            <Widget type="user" />
            <Widget  type="order"/>
            <Widget  type="earning"/>
            <Widget  type="balance"/>
          </div>
        </div>
    </div>
  )
}

export default Home