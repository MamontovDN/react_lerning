import './App.css';
import Header from './components/Header/Header'
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='my-site'>
                <Navbar navBarPage={props.state.navBarPage}/>
                <Route path='/profile/' render={() => <Profile store = {props.store}/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer store = {props.store}/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
