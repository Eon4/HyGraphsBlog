import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import AboutPage from './Pages/About/about';
import Homepage from './Pages/HomePage/homePage'; 
import { Gallery } from './Pages/Gallery/gallery'; 
import { Blog } from './Pages/BlogPage/blogPage'; 


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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogPage" element={<Blog />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;



