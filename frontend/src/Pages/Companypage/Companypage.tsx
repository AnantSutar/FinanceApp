import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';
import Spinner from '../../Components/Spinner/Spinner';

interface Props {

}

const Companypage = (props: Props) => {
    let {ticker} = useParams();
    const [company, Setcompany] = useState<CompanyProfile>();

    useEffect(()=>{
        const getProfileInit = async () =>{
            const result = await getCompanyProfile(ticker!);
            Setcompany(result?.data[0]);

        }
        getProfileInit();
    },[])
    
  return (
    <div>
        {company?(
            <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

            <Sidebar/>
  
            <CompanyDashboard ticker={ticker!}> 
              <Tile title='Company Name' subTitle={company.companyName}></Tile>
              <Tile title='Price' subTitle={"$" + company.price.toString()}></Tile>
              <Tile title='Sector' subTitle={company.sector}></Tile>
              <Tile title='Discounted CashFlow' subTitle={"$" + company.dcf.toString()}></Tile>
              <p className='bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4'>
                {company.description}
              </p>
            </CompanyDashboard>
  
          </div>
        ): (
          <Spinner/>
        )}
    </div>
  )
}

export default Companypage