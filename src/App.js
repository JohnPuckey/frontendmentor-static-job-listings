import React, { useState } from 'react';
import Header from './components/Header';
import JobCards from './components/JobCards'
import Filters from './components/Filters'

import jobData from './data/data.json';

function App() {

  const [filters, setFilters] = useState([])

  // add filters to filter array
  function handleFilters(tag) {
    
    // check to see if tag is already in filter array
    if(filters.indexOf(tag) === -1 ) {

      // add tag to filter array
      setFilters(prevValue => [...prevValue, tag])
    }
  }

  // clear filters array
  function clearAll() {
    setFilters([])
  }

  // Clear selected filter from array
  function clearFilter(tag) {
    setFilters(filters.filter(item => item !== tag))
  }

  return (
    <div className="App">
      <Header />
      {filters.length > 0 && <Filters 
        filters={filters}
        clearAll={clearAll}
        clearFilter={clearFilter}
      />}
      <div className="container">
      {jobData.map((jobs) => {
        return       <JobCards
        key={jobs.id}
        logo={jobs.logo}
        company={jobs.company}
        position={jobs.position}
        postedAt={jobs.postedAt}
        contract={jobs.contract}
        location={jobs.location}
        isFeatured={jobs.featured}
        isNew={jobs.new}
        role={jobs.role}
        level={jobs.level}
        languages={jobs.languages}
        tools={jobs.tools}
        handleFilters={handleFilters}
       />
      })}
      </div>

  
    </div>
  );
}

export default App;
