
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  
  } from "react-router-dom";

import Landing from './Landing';
import Login from './Compoment/Authentification/Login';
import Register from './Compoment/Authentification/Register';
import FrontView from './Compoment/errors/NotFoundView';






const routes = [
    // {
      
    //   path: 'app',
      
    //   element: <DashboardLayout />,
    //   children: [
    //     { path: 'account', element: <AccountView /> },
    //      {path: 'Acceuil' ,element:<AcceuilView/>},
    //      {path:'Photo',element:<PhotoUpdtedView/>},
    //     // { path: 'CandidatesList', element: <CandidatesListListView /> },
    //     { path: 'creatJobOffer', element: <JobCreateView /> },
    //      //{ path: 'Welcome', element: <FrontView /> },
    //     { path: 'Candidates/:id', element: <CandidatesListView /> },
    //      { path: 'update-profil', element: <ProfilUpdateView /> },
    //     { path: 'Job-offer', element: <ProductListView /> },
    //     { path: 'postuler/:id', element: <PostulerView /> },
    //     { path: 'JobOffer/:id', element: <GetJobView /> },
    //     { path: 'settings', element: <SettingsView /> },
    //     { path: '*', element: <Navigate to="/404" /> }
    //   ]
    // },
    //  {
      
    //   path: 'app',
    //   element:<TopBar/>,
    //   // element: <DashboardLayout />,
    //   children: [
    //     // { path: 'account', element: <AccountView /> },
         
    //     // // { path: 'CandidatesList', element: <CandidatesListListView /> },
    //     // { path: 'creatJobOffer', element: <JobCreateView /> },
    //     //  //{ path: 'Welcome', element: <FrontView /> },
    //     // { path: 'Candidates', element: <CandidatesListView /> },
    //     // // { path: 'dashboard', element: <DashboardView /> },
    //     { path: 'Job-offer', element: <ProductListView /> },
    //     // { path: 'postuler/:id', element: <PostulerView /> },
    //     // { path: 'JobOffer/:id', element: <GetJobView /> },
    //     // { path: 'settings', element: <SettingsView /> },
    //     { path: '*', element: <Navigate to="/404" /> }
    //   ]
    // },
    
    //a afire le front welcome view ely howa landing 
    {
      path: '/',
      
      children: [
        { path: 'login', element: <Login/> },
        { path: 'register', element: <Register/> },
         { path: 'Welcome', element: <Landing /> },
        { path: '404', element: <NotFoundView /> },
        { path: '/', element: <Link to="/Welcome" /> },
        { path: '*', element: <Link to="/404" /> }
      ]
    }
  ];
  
  export default routes;
  