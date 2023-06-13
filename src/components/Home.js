import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Shimmer from './Shimmer'
import JokeCard from './JokeCard'
import { apiStatusConstants, apiUrl } from '../utils/constants'
import {capitalizeFirstLetter} from '../utils/helper'


const Home = () => {
    const [apiResponse, setApiResponse] = useState({
      status: apiStatusConstants.initial,
      jokes: [],
    });

     async function getJokes() {
       setApiResponse((prev) => ({
         ...prev,
         status: apiStatusConstants.inProgress,
       }));

       const response = await fetch(apiUrl);
       if (response.ok) {
         const fetchedData = await response.json();
         setApiResponse((prev) => ({
           ...prev,
           status: apiStatusConstants.success,
           jokes: fetchedData?.jokes
         }));
       }
       else {
         setApiResponse((prev) => ({
           ...prev,
           status: apiStatusConstants.failure,
         }));
       }
     }

     useEffect(() => {
         getJokes();
     }, []);
  
  const user = localStorage.getItem("jokesAppUserInfo");

  const renderSuccessView = () => (
    <div className="col-10 m-auto pt-5 mt-5">
      <p className="fw-bold fs-6">
        Hi {capitalizeFirstLetter(user)} , here are some jokes for you.
      </p>
      <ul className="list-unstyled">
        {apiResponse.jokes.map((each) => (
          <JokeCard key={each.id} jokeData={each } />
        ))}
      </ul>
    </div>
  );

  const renderFailureView = () => (
    <div style={{minHeight: "80vh"}} className='text-center mt-5 pt-5'>
    <p>Failure !</p></div>
  )


  const renderDifferentViews = () => {
    switch (apiResponse.status) {
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return <Shimmer />;
      default:
        return null;
    }
  }
    
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          { renderDifferentViews()}
          <Footer />
        </div>
      </div>
    </>
  );
  
}

export default Home