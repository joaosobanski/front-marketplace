import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home';
import Login from '../pages/login';

export const AppRoutes: React.FC = () => {
    useEffect(() => {
    }, [])

    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/stake" element={<Stake />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/assets" element={<Marketplace />} /> */}
            </Routes>
        </React.Fragment>
    )
}