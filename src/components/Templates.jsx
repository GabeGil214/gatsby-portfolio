import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Template from './Template'

function Templates(){
  const data = useStaticQuery(graphql`
  query TemplateQuery {
    templates: allFile(
      filter: {relativeDirectory: {eq: "templates"}}
      sort: {fields: base, order: ASC}
    ) {
      edges {
        node {
          relativePath
          base
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  `)

  return (
      <section id="templates">
        <div className="container">
          <h1>WordPress Templates</h1>
          <div className="row">
            {data.templates.edges.map(({node}) => (
              <Template 
                title={node.base.split('-').join(' ').split('.')[0]}
                image={node.childImageSharp.gatsbyImageData}
              />
            ))}
          </div>
        </div>
      </section>
  )
}

export default Templates;