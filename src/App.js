import './App.css';
import HomePage from './pages/home-page/homePage';
import ListLinksPage from './pages/list-links-page/listLinksPage';
import { Routes, BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route path='listLinks' element={<ListLinksPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
