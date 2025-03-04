import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

type Props = {}

function Designpage({}: Props) {
  return (
    <div>
        <h1>FINSHARK DESIGN PAGE</h1>
        <h2>
            This is Finshark's design page. This is where we will house our design aspects of our app.
        </h2>
        <RatioList/>
        <Table/>
    </div>
  )
}

export default Designpage