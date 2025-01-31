import React from 'react'


function JobPosting({url, title, by, time}) {
const formatDate  = new Date(time*1000).toLocaleString()

  return (
    <div className='post' role = "listitem">
      <h2 className='post_title'>
        <a className = {url ? "" : "inactiveLink"} href = {url} target='_blank' rel='noopener' > {title} </a>
      </h2> 
      <span className='post__metadta'>
        By {by} . {formatDate}
      </span>
    </div>
  )
}

export default JobPosting
