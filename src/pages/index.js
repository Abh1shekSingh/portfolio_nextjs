import React from "react"
import Hero from "../components/Hero/Hero"
import Work from "../components/Work/Work"
import Project from "../components/Projects/Project"
import {Layout} from "../layout/Layout"
import Head from "next/head"
export default function Home() {
  return (
    <>
      <Head>
        <title>CRAFTINGBUGS</title>
      </Head>
      <Layout>
        {/* <Hero /> */}
        {/* <Work />
        <Project /> */}
      </Layout>
    </>
  )
}
