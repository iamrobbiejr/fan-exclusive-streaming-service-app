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
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import LivestreamsPage from "./pages/LivestreamsPage";
import LiveStreamPage from "./pages/LiveStreamPage";
import VideosPage from "./pages/VideosPage";
import ArtistPage from "./pages/ArtistPage";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import MusicPage from "./pages/MusicPage";
import AlbumPage from "./pages/AlbumPage";
import ArtistMusicPage from "./pages/ArtistMusicPage";

function AppContent() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { authUser } = useAuth();

    return (
        <div className="flex min-h-screen bg-gray-100">
            {authUser && <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}
            <div className={`flex flex-col min-h-screen w-full ${authUser ? 'lg:ml-64' : ''}`}>
                <Header setIsOpen={setIsSidebarOpen} />
                <main className={` ${authUser ? 'flex-grow container mx-auto px-4 py-8 mt-16' : ''}`}>
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
                        <Route
                            path="/store"
                            element={
                                <PrivateRoute>
                                    <Shop />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/categories"
                            element={
                                <PrivateRoute>
                                    <Categories />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/category/:categoryId"
                            element={
                                <PrivateRoute>
                                    <Category />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/product/:productId"
                            element={
                                <PrivateRoute>
                                    <ProductDetail />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <PrivateRoute>
                                    <Cart />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/checkout"
                            element={
                                <PrivateRoute>
                                    <Checkout />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/livestreams"
                            element={
                                <PrivateRoute>
                                    <LivestreamsPage />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/livestream/:id"
                            element={
                                <PrivateRoute>
                                    <LiveStreamPage />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/videos" element={<PrivateRoute><VideosPage /></PrivateRoute>} />
                        <Route path="/artist/:id" element={<PrivateRoute><ArtistPage /></PrivateRoute>} />
                        <Route path="/video/:id" element={<PrivateRoute><VideoPlayerPage /></PrivateRoute>} />
                        <Route path="/music" element={<PrivateRoute><MusicPage /></PrivateRoute>} />
                        <Route path="/album/:id" element={<PrivateRoute><AlbumPage /></PrivateRoute>} />
                        <Route path="/artist-music/:id" element={<PrivateRoute><ArtistMusicPage /></PrivateRoute>} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                {authUser && <Footer /> }
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

