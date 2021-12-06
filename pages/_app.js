import React, { Component } from 'react'
import App from 'next/app'
import Link from 'next/link'

export default class _app extends App {
  render() {
    // Navigation
    const { Component } = this.props

    return (
      <div>
        <nav>
          <Link href="/"><a>Home</a></Link>
          {" / "}
          <Link href="/reg"><a>Reg</a></Link>
          {" / "}
          <Link href="/about"><a>About</a></Link>
        </nav>

        <Component></Component>
      </div>
    )
  }
}
