import React from 'react'
import styles from "../styles/alert.module.css"

export default function About({ datas }) {
    return (
        <div>
            <h1>About</h1>
            <div className={styles.error}>Error !!</div>
            <ul>
                {datas.map((data, index) => {
                    return <li key={index}>{data}</li>
                })}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    return { props: { datas: ['a', 'b', 'c'] } }
}
