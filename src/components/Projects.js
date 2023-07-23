import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function Projects() {

  return (
      <section id="projects">
        <div className="container">
          <h1>Projects</h1>
          <div className="row">
            <div className="project">
                <i className="fas fa-music"></i>
                <h2>My Custom Playlist</h2>
                <div>
                  <StaticImage src="../images/playlist.jpg" alt="Product Page Wordpress Theme" />
                  <p>
                    Select your favorite artist, choose your musical preferences, and let Spotify create a
                    custom playlist made just for you!
                  </p>
                  <a class="btn-primary" href="https://github.com/GabeGil214/my-playlist" rel="noopener noreferrer" target="_blank">View on Github<i className="fab fa-github"></i></a>
                  <a class="btn-primary" href="https://mypersonalizedplaylist.com/">Live Site</a>
                </div>
              </div>

              <div className="project">
                <i className="fas fa-glasses"></i>
                <h2>Music Visualizer</h2>    
                <div>
                  <StaticImage src="../images/visualizer.webp" alt="Product Page Wordpress Theme" />
                  <p>
                    Visualizer that responds in real time to the sounds through your microphone or to a preset mp3 file.
                  </p>
                  <a class="btn-primary" href="https://github.com/GabeGil214/creative-coding/" rel="noopener noreferrer" target="_blank">View on Github<i className="fab fa-github"></i></a>
                  <a class="btn-primary" href="https://visualizer.gabegil.dev">Live Site</a>
                </div>
              </div>
          </div>
        </div>
      </section>
  )
}

export default Projects
