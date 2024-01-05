import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Homepage from '../Pages/Homepage/Homepage';
import Navbar from '../components/Navbar/Navbar';
import Blog from '../Pages/Blog/Blog';
import ContactUs from '../Pages/ContactUs/ContactUs';
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy';
import Movies from '../Pages/Movies/Movies';
import MoviesDescription from '../Pages/MoviesDescription/MoviesDescription';

const genres = ['all','Action', 'Comedy', 'Drama', 'Thriller', 'Adventure'];

const genresRoutes = genres.map((genre: string) => ({
  path: `/${genre}/page/:pgno`,
  element: <Movies genre={genre} actor={'all'} />,
}));


const actors = [
  'all',
  'Tom Hanks',
  'Leonardo DeCaprio',
  'Brad Pitt',
  'Robert De Nitro',
];
const actorsRoutes = actors.map((actor: string) => ({
  path: `/${actor}/page/:pgno`,
  element: <Movies genre={'all'} actor={actor} />,
}));


const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      ...genresRoutes,
      ...actorsRoutes,
      {
        path: `/movies/:moviename`,
        element: <MoviesDescription />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <div>
        <Navbar /> <h1>404: Page not found</h1>
      </div>
    ),
  },
]);

export default AppRouter;
