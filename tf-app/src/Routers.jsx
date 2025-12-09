import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import CartPage from "./CartPage/CartPage";
import AboutBiblioteca from "./AboutBiblioteca/AboutBiblioteca";
import MyAccount from "./MyAccount/MyAccount";
import LoginSignUp from "./LoginSignUp/LoginSignUp";
import Catalogo from "./Catalogo/Catalogo";
import Book1 from "./Book1/Book1";
import Book2 from "./Book2/Book2";
import Book3 from "./Book3/Book3";
import Book4 from "./Book4/Book4";
import Book5 from "./Book5/Book5";
import Book6 from "./Book6/Book6";
import Book7 from "./Book7/Book7";
import Book8 from "./Book8/Book8";



function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/acount" element= { <LoginSignUp />}></Route>
                <Route path="/cart" element = { <CartPage />}></Route>
                <Route path="/Catalogo" element = { <Catalogo />}></Route>
                <Route path="/Biblioteca" element = { <AboutBiblioteca />}></Route>
                <Route path="/MyAccount" element={ <MyAccount />}></Route>
                <Route path="/Book1" element={ <Book1 />}></Route>
                <Route path="/Book2" element={ <Book2 />}></Route>
                <Route path="/Book3" element={ <Book3 />}></Route>
                <Route path="/Book4" element={ <Book4 />}></Route>
                <Route path="/Book5" element={ <Book5 />}></Route>
                <Route path="/Book6" element={ <Book6 />}></Route>
                <Route path="/Book7" element={ <Book7 />}></Route>
                <Route path="/Book8" element={ <Book8 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;