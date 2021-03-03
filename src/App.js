import './App.css';
import Header from './components/Header/Header'
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='my-site'>
                <Navbar/>
                {/*<Profile/>*/}
                <Dialogs />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
