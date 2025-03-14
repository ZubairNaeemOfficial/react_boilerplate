import React from "react"
import { BrowserRouter as Router , Routes,Route } from "react-router-dom"
import Todolist from "./components/todolist/todolist"
import { UserContext } from "./context/context"
import About from "./components/About/about"
import Home from "./components/Home/banner"
import ContactForm from "./components/Contact/contactForm"
import Banner from "./components/Contact/banner"
import UserProfile from "./components/UserProfile/userProfile"
import { Provider } from "react-redux"
import store from "./redux/store"
import Postdata from "./components/Home/cards"

function App() {
let [user,setUser]=React.useState("")
let [inputdepended,setInputdepended]=React.useState("")
  return (
    <Provider store={store}>
    <Router>
    <UserContext.Provider value={{user,setUser,inputdepended,setInputdepended}}>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/posts" element={<Postdata/>}/>
    <Route path="/contact" element={<ContactForm/>}/>
    <Route path="/user/:userId" element={<UserProfile />} />
    </Routes>
     </UserContext.Provider>
    </Router>
    </Provider>
  )
}

export default App
