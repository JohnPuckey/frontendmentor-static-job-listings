import React from 'react'

const Filters = ({
    filters,
    clearAll,
    clearFilter
}) => {
    return (
        <div className="filters-container">
            <div className="filters">
                <div className="active-filters">
                    {filters.map((tag, index) => {
                        return (
                            <h3 key={index} className="filter-tag">{tag}
                                <button onClick={() => {clearFilter(tag)}} className="remove-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><title>remove filter</title><path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
                                </button>
                            </h3> 
                        )
                       
                    })}
                </div>
                <button onClick={() => {clearAll()}} className="clear-btn">Clear</button>
            </div>
        </div>
    )
}

export default Filters
