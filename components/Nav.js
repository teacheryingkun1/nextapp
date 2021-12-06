import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        <>
            <nav>
                <Link href="/"><a>Home</a></Link>
                {" / "}
                <Link href="/reg"><a>Reg</a></Link>
                {" / "}
                <Link href="/about"><a>About</a></Link>
                {" / "}
                <Link href="/covid"><a>Covid</a></Link>
            </nav>
        </>
    )
}
