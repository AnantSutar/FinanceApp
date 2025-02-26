import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

import './App.css';

import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';

function App() {
  const [search,SetSearch] = useState<string>("");
  const [searchResult,SetSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues,setPortfolioValues] = useState<string[]>([])
  const [servererror,Setservererror] = useState<string>("")

  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) =>{
      SetSearch(e.target.value);
      console.log(e);
  }

  const onPortfolioCreate = (e: any) =>{
    e.preventDefault();
    const exists = portfolioValues.find((value)=>value === e.target[0].value)
    if (exists) return;
    const updatedPortfolio = [...portfolioValues,e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  }

  const onSearchSubmit = async(e: SyntheticEvent) => {
    e.preventDefault();
      const result = await searchCompanies(search);
      if(typeof result === "string"){
        Setservererror(result)
      }
      else if(Array.isArray(result.data)){
        SetSearchResult(result.data);
      }
      console.log(searchResult);
  }

  const onPortfolioDelete = (e:any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value)=> {
      return value !== e.target[0].value
  })
  setPortfolioValues(removed);
  }
  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search ={search} handleSearchChange = {handleSearchChange}/>
      {servererror && <h1>{servererror}</h1>}
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
      <CardList searchResults = {searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  );
}

export default App;
