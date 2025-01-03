import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const Catalog = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const CarDetails = lazy(() => import('../pages/CarDetailsPage/CarDetailsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog/:id?" element={<Catalog />} />
        <Route path="/car/:id?" element={<CarDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
