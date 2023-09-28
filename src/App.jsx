import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/home';
import DetailFood from './pages/detail-food';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/food-detail/:id',
    element: <DetailFood />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
