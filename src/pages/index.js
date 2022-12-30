import React from "react"
import Hero from "../components/Hero/Hero"
import Work from "../components/Work/Work"
import Project from "../components/Projects/Project"
import {Layout} from "../layout/Layout"
export default function Home() {
  return (
      <Layout>
        <Hero />
        <Work />
        <Project />
      </Layout>
  )
}
