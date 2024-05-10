import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './ImageCarousel.css';
import MealPlanList from './Pages/MealPlanList';
import MealPlansPage from './Pages/MealPlansPage';
import ImageCarousel from './Pages/ImageCarousel';


import image2 from './Assets/meal_2.jpeg';
import image3 from './Assets/meal_3.jpeg';
import image4 from './Assets/meal_4.jpeg';
import image5 from './Assets/meal_5.jpeg';

const App = () => {
    const images = [image5, image2, image3, image4]; // Array of images
    
    return (
        <div className="App">
            <h1>Image Carousel</h1>
            <ImageCarousel images={images} interval={3000} /> {/* Change image every 3 seconds */}
            
            <Router>
                <Routes>
                    <Route path="/api/meal-plans" element={<MealPlansPage />} />
                    <Route path="/meal-plan-list" element={<MealPlanList />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
