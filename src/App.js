import './App.css';
import Header from './components/Header/Header'
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='my-site'>
                    <Navbar navbar={props.state.navBarPage}/>
                    <Route path='/profile/' render={() => <Profile profile={props.state.profile}/>}/>
                    <Route path='/dialogs'
                           render={ () => <Dialogs messagesPage={props.state.messagesPage}/> }/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
