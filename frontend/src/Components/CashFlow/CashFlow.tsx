import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../company';
import { useOutlet, useOutletContext } from 'react-router-dom';
import { getCashFlow } from '../../api';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';
import { formatLargeMonetaryNumber } from '../../Helpers/NumberFormatting';

type Props = {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
  },
  ];

const CashFlow = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [cashflow,setCashflow] = useState<CompanyCashFlow[]>();

    useEffect(()=>{
        const getData = async() =>{
            const value = await getCashFlow(ticker);
            setCashflow(value!.data)
        }
        getData();
    },[])
  return (
    <div>
        {cashflow ? (
             <Table config={config} data={cashflow}></Table>
        ) : (
          <Spinner/>
        )}
    </div>
  )
}

export default CashFlow