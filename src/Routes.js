import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import ListTripsPage from './pages/ListTripsPage/ListTripsPage';
import ApplicationFormPage from './pages/ApplicationFormPage/ApplicationFormPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminHomePage from './pages/AdminHome/AdminHomePage';
import CreateTripPage from './pages/CreateTrip/CreateTripPage';
import TripDetailsPage from './pages/TripDetailsPage/TripDetailsPage';


export default function Router() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route exact path="/tripsList" element={<ListTripsPage/>} />
              <Route exact path="/tripsApplication" element={<ApplicationFormPage/>} />
              <Route exact path="/login" element={<LoginPage/>} />
              <Route exact path="/adminTripsList" element={<AdminHomePage/>} />
              <Route exact path="/adminTripsCreate" element={<CreateTripPage/>} />
              <Route exact path="/adminTrips/:id" element={<TripDetailsPage/>} />
          </Routes>
      </BrowserRouter>
  )
}

