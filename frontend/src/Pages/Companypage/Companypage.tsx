import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';

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
            </CompanyDashboard>
  
          </div>
        ): (
            <div> COMPANY NOT FOUND </div>
        )}
    </div>
  )
}

export default Companypage