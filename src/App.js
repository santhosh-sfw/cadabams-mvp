import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import IndexRoutes from './router/router';


function App() {
  const routes = IndexRoutes.map((route) => {
    if (route.subRoutes?.length > 0) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.subRoutes.map((subRoute) => (
            <Route
              key={subRoute.path}
              path={subRoute.path}
              element={<subRoute.element prop />}
            />
          ))}
        </Route>
      );
    }
    return (
      <Route key={route.path} path={route.path} element={<route.element />} />
    );
  });
  return (
    <Routes>
    {routes}
    </Routes>
    // <LandingPage />
  );
}

export default App;
