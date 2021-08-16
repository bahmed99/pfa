import React, { useState } from 'react'
import './sidebar.css'
import { Image } from 'react-bootstrap'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Chat from "../chatEmploye/chat"


export default function Sidebar(props) {
    const detect = JSON.parse(localStorage.getItem("detect"))
    return (

        <div style={{ display: 'flex', height: '150vh', overflow: 'scroll initial' }}>

            <CDBSidebar textColor="#fff" backgroundColor="#3d3e42">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a
                        href="/"
                        className="text-decoration-none"
                        style={{ color: 'inherit' }}>
                        iDrive Gears
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        {detect!==3?<NavLink exact to="/utilisateurs" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Utilisateurs</CDBSidebarMenuItem>
                        </NavLink>:<></>}
                        {detect === 3 ? <NavLink exact to="/ressources-humaine" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Resources Humaine</CDBSidebarMenuItem>
                        </NavLink> : <></>}
                        <NavLink exact to="/cars" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="car">Voitures</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/emplois" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Emplois</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/courses" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="book">Cours</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/exercices" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="pencil">Exercices</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/notifications" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="bell">
                                Notifications
                            </CDBSidebarMenuItem>
                        </NavLink>


                    </CDBSidebarMenu>
                   { detect!==3?<Chat />:""}
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                    </div>
                    <Image className="apropos" src={require("../../assets/images/logoBlanc.png").default} />
                </CDBSidebarFooter>
            </CDBSidebar>

          
        </div>

    )
}
