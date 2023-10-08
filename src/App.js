import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from 'react';

const LazyFooter = lazy(() => import('./components/footer'));
const LazyAbout = lazy(() => import('./components/about'));
const LazyHome = lazy(() => import('./components/home'));
const LazyNavigation = lazy(() => import('./components/navbar'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyNavigation />
      </Suspense>
      <Routes>
        <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><LazyHome /></Suspense>} />
        <Route path='/about' element={<Suspense fallback={<div>Loading...</div>}><LazyAbout /></Suspense>} />
      </Routes>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyFooter />
      </Suspense>
    </BrowserRouter>
  );
}