import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';

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
            <div>{company.companyName}</div>
        ): (
            <div> COMPANY NOT FOUND </div>
        )}
    </div>
  )
}

export default Companypage