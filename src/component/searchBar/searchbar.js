import React from 'react'
import './searchbar.css'
import { BsDownload , BsSearch } from 'react-icons/bs'

const searchbar = () => {
  return (
    <div className='container'>
        <div className="search">
            <div className="search-bar">
                <BsSearch />
                <input type="text" placeholder="Search by name or email" className="search-input" />
            </div>
            <button className="search-button"><BsDownload /></button>
        </div>

        <h3>Filter by</h3>
        <div className="items">
            <ul className="filter-items">
                <li className="filter-item filter-item-active">Date: Last 90 days</li>
                <li className="filter-item">Type</li>
                <li className="filter-item">Status</li>
            </ul>
        </div>


        
    </div>
  )
}

export default searchbar