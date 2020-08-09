import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export default function Nav() {
    return(
        <div className='NavBar'>
            <ul className='list'>
                {props.folders.map(folder => 
                <li key={folder.id}>
                    <NavLink to={`/folder/${folder.id}`}></NavLink>
                </li>
                )}
            </ul>
        </div>
    )
}

Nav.defaultProps = {
    folders: []
}