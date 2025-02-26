import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

import './App.css';

import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search,SetSearch] = useState<string>("");
  const [searchResult,SetSearchResult] = useState<CompanySearch[]>([]);
  const [servererror,Setservererror] = useState<string>("")

  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) =>{
      SetSearch(e.target.value);
      console.log(e);
  }

  const onPortfolioCreate = (e: SyntheticEvent) =>{
    e.preventDefault();
    console.log(e);
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
  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search ={search} handleSearchChange = {handleSearchChange}/>
      {servererror && <h1>{servererror}</h1>}
      <CardList searchResults = {searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  );
}

export default App;
