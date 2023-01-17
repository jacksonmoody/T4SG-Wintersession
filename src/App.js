import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Onboarding from "./pages/Onboarding";
import { auth, db } from "./helpers/firebase";
import { query, getDocs, collection, where, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged, getRedirectResult } from "firebase/auth";
import { useState, useEffect } from "react";
import Layout from "./pages/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import { addUser } from "./helpers/database";
import React from 'react'

export default function App() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setcurrentUser] = useState(null);
    const [onboarded, setOnboarded] = useState(false);
    const [initializingAuth, setInitializingAuth] = useState(true);
    const [initializingDB, setInitializingDB] = useState(true);
    const [data, setData] = useState(null)

    useEffect(() => {

        async function handleRedirectResult() {
            try {
                const result = await getRedirectResult(auth);
                if (!result) return;
                const user = result.user;
                const q = query(collection(db, "users"), where("uid", "==", user.uid));
                const docs = await getDocs(q);
                if (docs.docs.length === 0) {
                    await addUser(user.uid, user.displayName, "google", user.email)
                }
            } catch (e) {
                console.error(e);
            }
        }

        handleRedirectResult();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
                setcurrentUser(user);
                if (initializingAuth) setInitializingAuth(false);
            } else {
                setLoggedIn(false);
                setcurrentUser(null);
                if (initializingAuth) setInitializingAuth(false);
            }
        })

        onSnapshot(query(collection(db, "users")), (snapshot) => {
            const data = snapshot.docs.map((doc) => (doc.data()));
            setData(data);
            if (currentUser === null) return;
            const body = data.filter((user) => (user.uid === currentUser.uid));
            setOnboarded(body[0].onboarded);
            if(initializingDB) setInitializingDB(false);
        });

    });

    if (initializingAuth) return null;
    if (loggedIn && initializingDB) return null;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={loggedIn ? <Layout username={currentUser.displayName} /> : <Layout />}>
                    <Route index element={
                        <ProtectedRoute loggedIn={loggedIn} onboarded={onboarded}>
                            <Home />
                        </ProtectedRoute>
                    }
                    />
                    <Route path="login" element={!loggedIn ? <Login /> : <Navigate to="/"/>} />
                    <Route path="onboarding" element={loggedIn ? <Onboarding users={data} currentUser={currentUser} /> : <Navigate to="/" />} />
                    <Route path="register" element={!loggedIn ? <Register /> : <Navigate to="/onboarding"/>} />
                    <Route path="profile" element={
                        <ProtectedRoute loggedIn={loggedIn} onboarded={onboarded}>
                            <Profile users={data} currentUser={currentUser} />
                        </ProtectedRoute>
                    }
                    />
                    <Route path="results" element={
                        <ProtectedRoute loggedIn={loggedIn} onboarded={onboarded}>
                            <Results users={data} currentUser={currentUser} />
                        </ProtectedRoute>
                    }
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}