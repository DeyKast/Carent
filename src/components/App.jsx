import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useContext, createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const Catalog = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const CarDetails = lazy(() => import('../pages/CarDetailsPage/CarDetailsPage'));

const AdminDashboard = lazy(() => import('../pages/AdminPages/AdminDashboard/AdminDashboard'));
const AdminUsers = lazy(() => import('../pages/AdminPages/AdminPositions/AdminPositions'));

const db = getFirestore();
const auth = getAuth();

// Контекст для ролі
const AuthContext = createContext();

export const App = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async maybeUser => {
      setUser(maybeUser);
      if (maybeUser) {
        const userDoc = await getDoc(doc(db, 'users', maybeUser.uid));
        setRole(userDoc.exists() ? userDoc.data().role : 'user');
      } else {
        setRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog/:id?" element={<Catalog />} />
          <Route path="/car/:id?" element={<CarDetails />} />

          {/* Адмінські маршрути */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <AdminUsers />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

// Компонент для захисту адмінських сторінок
const ProtectedRoute = ({ children }) => {
  const { user, role } = useContext(AuthContext);

  if (!user || role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
};
