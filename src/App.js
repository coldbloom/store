import './App.css';
import './scss/app.scss'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className='flex flex-col items-center'>
        <div className='container'>
            <Header />
            <Main />
        </div>
    </div>
  );
}

export default App;
