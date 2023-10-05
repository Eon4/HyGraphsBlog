import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import AboutPage from './Pages/About/about';
import Homepage from './Pages/HomePage/homePage'; 
import { Gallery } from './Pages/Gallery/gallery'; // Import as a named export

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<Gallery />} /> {/* Use Gallery as a named import */}
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;



