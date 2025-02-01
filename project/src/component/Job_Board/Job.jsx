import React, { useEffect, useState } from 'react';
import "./Job.css"
import JobPosting from './JobPosting';

const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";
const page = 6;


const Job = () => {
  const [items, setItems ] = useState([]);
  const [itemId , setItemId] = useState(null);
  const [fetchingDetails ,  setFetchingDetails ] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  async function fetchItems(currPage){
    setCurrentPage(currPage);
    setFetchingDetails(true);

    let itemsList = itemId;

    if(itemsList === null){
      const response =  await fetch (`${API_ENDPOINT}/jobstories.json`)
      itemsList = await response.json();
      setItemId(itemsList)
    }

    const itemIdForPages = itemsList.slice(
      currPage*page , 
      currPage * page + page
    )

    const itemForPages = await Promise.all(
    itemIdForPages.map((itemId)=>
      fetch (`${API_ENDPOINT}/item/${itemId}.json`).then((response) => response.json()))
    )


  setItems([...items, ...itemForPages]);
  setFetchingDetails(false)

  }


  useEffect(()=>{
    if(currentPage===0)fetchItems(currentPage)

  },[currentPage])

  return (
    <div className='container'>
      <h1>Hacker News Job Board</h1>
      {
        items.length < 1 ? (
        <p className='loading'>Loading Data...</p>
        ) : <div>
          <div className='items' role='list'>
            {
              items.map((item)=> {
                return <JobPosting key={item.id} {...item}/>
              })
            }
          </div>
          <button className='load-btn' onClick={()=>fetchItems(currentPage+1)}>
           {fetchingDetails ? "Loading " : "Load More Jobs" }
            </button>
          </div>
      }
      
    </div>
  )
}

export default Job
