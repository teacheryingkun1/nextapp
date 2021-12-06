import React, { Component } from 'react'
import App from 'next/app'
import Head from 'next/head'
import Nav from '../components/Nav'
import Foot from '../components/Foot'
import "../styles/index.css"

export default class _app extends App {
  render() {
    // Navigation
    const { Component } = this.props

    return (
      <div>
        <Head>
          <title>My-app</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </Head>
        <Nav />
        <div className="index-content">
          <Component />
        </div>
        <Foot />
      </div>
    )
  }
}
