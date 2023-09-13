import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import Nav from '../components/nav'
import SocialBar from '../components/social-bar'
import './resume.css'

const Resume = (props) => {
  return (
    <div className="resume-container">
      <Helmet>
        <title>Resume - Andrew Casparius</title>
        <meta property="og:title" content="Resume - Andrew Casparius" />
      </Helmet>
      <header data-role="Accordion" className="resume-header">
        <img
          alt="image"
          src="/headshot%202-200w.jpg"
          className="resume-image"
        />
        <div className="resume-separator"></div>
        <div className="resume-container1">
          <NavigationLinks rootClassName="rootClassName19"></NavigationLinks>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/51aef82f-dd97-44bc-bdb8-044e7de525b3/aaba2be8-0353-4783-99b9-6b9ad475780c"
            target="_blank"
            rel="noreferrer noopener"
            className="resume-link"
          >
            <Nav
              rootClassName="nav-root-class-name"
              className="resume-resume"
            ></Nav>
          </a>
        </div>
        <div data-role="AccordionContent" className="resume-accordion-content">
          <div className="resume-nav">
            <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
          </div>
        </div>
      </header>
      <SocialBar rootClassName="social-bar-root-class-name"></SocialBar>
    </div>
  )
}

export default Resume
