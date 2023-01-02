import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { auth, db } from "./helpers/firebase";
import { query, getDocs, collection, where, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged, getRedirectResult } from "firebase/auth";
import { useState, useEffect } from "react";
import Layout from "./pages/Layout";
import { addUser } from "./helpers/database";

export default function App() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setcurrentUser] = useState(null); 
    const [initializing, setInitializing] = useState(true);
    const [data, setData] = useState(null)

    useEffect(() => {

        async function handleRedirectResult() {
            try {
                const result = await getRedirectResult(auth);
                const user = result.user;
                const q = query(collection(db, "users"), where("uid", "==", user.uid));
                const docs = await getDocs(q);
                if (docs.docs.length === 0) {
                   await addUser(user.uid, user.displayName, "google", user.email)
                }
            } catch (e) {
            }
        }

        handleRedirectResult();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
                setcurrentUser(user);
                if (initializing) setInitializing(false);
            } else {
                setLoggedIn(false);
                setcurrentUser(null);
                if (initializing) setInitializing(false);
            }
        })
        
        onSnapshot(query(collection(db, "users")), (snapshot) => {
            const data = snapshot.docs.map((doc) => (doc.data()));
            setData(data);
        });

    });

    if (initializing) return null;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={loggedIn ? <Layout username = {currentUser.displayName}/> : <Layout/>}>
                    <Route index element = {loggedIn ? <Home /> : <Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="profile" element={loggedIn ? <Profile users = {data} currentUser = {currentUser}/> : <Login />} />
                    <Route path="results" element={loggedIn ? <Results users = {data} currentUser = {currentUser}/> : <Login />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}