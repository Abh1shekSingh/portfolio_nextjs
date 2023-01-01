import React from "react"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Work from "../components/Work/Work"
import Project from "../components/Projects/Project"
import {Layout} from "../layout/Layout"
import Head from "next/head"
export default function Home() {
  return (
    <div className="bg-[#E1ECE8] h-screen overflow-scroll snap-y snap-mandatory z-0">
      <Head>
        <title>Craftingbugs | Developer</title>
      </Head>
      <Layout>
        <section id = 'hero' className="">
          <Hero />
        </section>
        <section id = 'about' className="">
          <About />
        </section>
        <section id= 'work'>
          <Work />
        </section>
        
        {/*<Project /> */}
      </Layout>
    </div>
  )
}
