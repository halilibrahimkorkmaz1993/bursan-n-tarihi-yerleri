import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
    <h1>Sayfa Bulunamadı.</h1>
    <Link to="/" className="btn btn-success">Ana Sayfa</Link>
    </> 
  )
}

export default PageNotFound