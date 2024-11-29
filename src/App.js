import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';

function AppContent() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { authUser } = useAuth();

    return (
        <div className="flex min-h-screen bg-gray-100">
            {authUser && <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}
            <div className={`flex flex-col min-h-screen w-full ${authUser ? 'lg:ml-64' : ''}`}>
                <Header setIsOpen={setIsSidebarOpen} />
                <main className={`flex-grow container mx-auto px-4 py-8 ${authUser ? 'mt-16' : ''}`}>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route
                            path="/dashboard"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <AppContent />
            </Router>
        </AuthProvider>
    );
}

export default App;

