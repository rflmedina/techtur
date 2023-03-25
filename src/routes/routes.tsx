import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Owner from '../pages/Owner/Owner.component';
import Employed from '../pages/Owner/Employed';
import Partner from '../pages/Partner/Partner.component';
import TicketDetail from '../pages/Ticket/TIcket.component';

const RoutesPath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ticket/*" element={<TicketDetail />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/owner/*" element={<Employed />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/partner/*" element={<Employed />} />

      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPath;
