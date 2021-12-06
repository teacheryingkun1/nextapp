import React from 'react'

export default function Covid({datas}) {

    return (
        <div>
            <h1>Covid</h1>
            <ul className="list-group">
                {datas.map((data, index) => {
                    return <li className="list-group-item" key={index}>{index + 1} : {data.province} {'=>'} {data.new_case}</li>
                })}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces`)
    const datas = await res.json()

    // Pass data to the page via props
    return { props: { datas } }
}