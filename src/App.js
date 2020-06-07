import React from 'react';
import Header from './components/Header';
import JobCards from './components/JobCards'

import jobData from './data/data.json';

console.log(jobData[0])

function App() {
  return (
    <div className="App">
      <Header />
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
       />
      })}

  
    </div>
  );
}

export default App;
