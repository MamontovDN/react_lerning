import './App.css';
import Header from './components/Header/Header'
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='my-site'>
                <Navbar navBarPage={props.state.navBarPage}/>
                <Route path='/profile/' render={() => <Profile profilePage={props.state.profilePage}
                                                               dispatch={props.dispatch}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                              dispatch={props.dispatch}/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
