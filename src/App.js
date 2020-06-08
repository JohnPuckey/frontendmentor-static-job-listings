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

      {/* if filters array > 0, show filters component */}
      {filters.length > 0 && <Filters 
        filters={filters}
        clearAll={clearAll}
        clearFilter={clearFilter}
      />}


        {/* map jobsData, if filter array > 0, return jobCards where jobTags contain filters */}
      <div className="container">
      {jobData.map((jobs) => {

        let jobTags = [jobs.role, jobs.level, ...(jobs.languages) || [], ...(jobs.tools) || []]

        let filterJobs = (jobTags, filters) => 
          filters.every((value) => jobTags.includes(value));

       
        return filters.length === 0 ? (    

          <JobCards
            key={jobs.id}
            logo={jobs.logo}
            company={jobs.company}
            position={jobs.position}
            postedAt={jobs.postedAt}
            contract={jobs.contract}
            location={jobs.location}
            isFeatured={jobs.featured}
            isNew={jobs.new}
            handleFilters={handleFilters}
            jobTags={jobTags}
          /> ) 

          : 

          ( filterJobs(jobTags, filters) && (

          <JobCards
            key={jobs.id}
            logo={jobs.logo}
            company={jobs.company}
            position={jobs.position}
            postedAt={jobs.postedAt}
            contract={jobs.contract}
            location={jobs.location}
            isFeatured={jobs.featured}
            isNew={jobs.new}
            handleFilters={handleFilters}
            jobTags={jobTags}
          /> )

       );
      })}
      </div>

      <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/ABCwarrior">John Puckey</a>.
  </div>
  
    </div>
  );
}

export default App;
