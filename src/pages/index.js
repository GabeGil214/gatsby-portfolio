import * as React from "react"
import Hero from '@components/Hero';
import About from '@components/About';
import Projects from '@components/Projects';
import Templates from '@components/Templates';
import Seo from '@components/Seo';
import Layout from '@components/Layout';

const IndexPage = () => {

  return (
    <Layout>
      <div>
        <Hero />
        <About index={1} />
        <Projects index={2} />
        <Templates index={2} />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Gabe Gil | Web Developer" />

export default IndexPage
