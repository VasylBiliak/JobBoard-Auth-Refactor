import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
    );
}
