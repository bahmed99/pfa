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
export default function Sidebar(props) {

    return (
      
        <div  style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>

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
                        <NavLink exact to="/utilisateurs" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Utilisateurs</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/cars" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="car">Voitures</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/emplois" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Emplois</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/courses" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="book">Cours</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/analytics" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">
                                Analytics
                            </CDBSidebarMenuItem>
                        </NavLink>


                    </CDBSidebarMenu>
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
