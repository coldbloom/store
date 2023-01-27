import './App.css';
import './scss/app.scss'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Item from "./pages/Item";

function App() {
  return (
    <div className='flex flex-col items-center'>
        <div className='container'>
            <Header />
            <>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/item/:id"
                           element={<Item/>}/>
                </Routes>
            </>
        </div>
    </div>
  );
}

export default App;
