import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import EmergencyClinics from './pages/EmergencyClinics';
import CatOrDog from './pages/CatOrDog';
import BreedSelection from './pages/BreedSelection';
import Community_Support from './pages/Community_Support';
import BreedInfoPage from './pages/BreedInfoPage';
import EditPost from './pages/EditPost';
import LandingPage from './pages/LandingPage';
import Cookies from 'js-cookie';
import PetProfile from './pages/PetProfile';

const fontClass = 'italiana-regular';

const router = createBrowserRouter([
	{
		path: '/signup',
		element: <RegisterPage />,
	},
	{
		path: '/signin',
		element: <SignInPage />,
	},
	{
		path:'/pet_profile',
		element:<PetProfile/>
	},
	{
		path: '/community_support',
		element: <Community_Support />,
	},
	{
		path: '/emergency_clinics',
		element: <EmergencyClinics />
	},
	{
		path: '/wellness_tips',
		element: <CatOrDog />,
	},
	{
		path: '/wellness_tips/cat',
		element: <BreedSelection />,
	},
	{
		path: '/wellness_tips/dog',
		element: <BreedSelection />,
	},
	{
		path: '/community_support/edit/:username/:postId',
		element: <EditPost/>,
	},
	{ path: "wellness_tips/cat/persian_longhair", element: <BreedInfoPage /> },
	{ path: "wellness_tips/cat/siamese", element: <BreedInfoPage /> },
	{ path: "wellness_tips/cat/maine_coon", element: <BreedInfoPage /> },
	{ path: "wellness_tips/cat/ragdoll", element: <BreedInfoPage /> },
	{ path: "wellness_tips/cat/bengal", element: <BreedInfoPage /> },
	{ path: "wellness_tips/cat/sphynx", element: <BreedInfoPage /> },
	{ path: "wellness_tips/cat/british_short_hair", element: <BreedInfoPage /> },
	{ path: "wellness_tips/cat/scottish_fold", element: <BreedInfoPage /> },
	{ path: "wellness_tips/cat/abyssinian", element: <BreedInfoPage /> },
	{ path: "wellness_tips/cat/siberian", element: <BreedInfoPage /> },

	{ path: "wellness_tips/dog/labrador_retriver", element: <BreedInfoPage /> },
	{ path: "wellness_tips/dog/german_shepherd", element: <BreedInfoPage /> },
	{ path: "wellness_tips/dog/golden_retriever", element: <BreedInfoPage /> },
	{ path: "wellness_tips/dog/french_bulldog", element: <BreedInfoPage /> },
	{ path: "wellness_tips/dog/bulldog", element: <BreedInfoPage /> },
	{ path: "wellness_tips/dog/beagle", element: <BreedInfoPage /> },
	{ path: "wellness_tips/dog/poodle", element: <BreedInfoPage /> },
	{ path: "wellness_tips/dog/rottweiler", element: <BreedInfoPage /> },
	{ path: "wellness_tips/dog/yorkshireterrier", element: <BreedInfoPage /> },
	{ path: "wellness_tips/dog/chihuahua", element: <BreedInfoPage /> },

	{
		path: '/',
		element: <LandingPage />
	},
	{
		path:'/main',
		element: <MainPage /> 
	}
]);

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider className={fontClass} router={router} />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
