import React from 'react'

function Navbar() {
    return (
        <navbar>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#templates">Templates</a></li>
            <li><a href={'../../gabe-resume.pdf'} target="_blank">Resume</a></li>
          </ul>
        </navbar>
    )
}

export default Navbar
