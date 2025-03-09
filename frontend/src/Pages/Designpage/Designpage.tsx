import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { CompanyKeyMetrics } from '../../company'
import { testIncomeStatementData } from '../../Components/Table/testData'

type Props = {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  }]

function Designpage({}: Props) {
  return (
    <div>
        <h1>FINSHARK DESIGN PAGE</h1>
        <h2>
            This is Finshark's design page. This is where we will house our design aspects of our app.
        </h2>
        <RatioList data = {testIncomeStatementData} config = {tableConfig}/>
        <Table data={testIncomeStatementData} config={tableConfig}/>
    </div>
  )
}

export default Designpage