import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import AuthModal from '../../components/authModal/authModal';
import RegisterModal from 'components/authModal/registerModal';
import css from './authProvider.module.css';
import { Link } from 'react-router-dom';

const db = getFirestore();

export const AuthProvider = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // Додаємо state для ролі
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async maybeUser => {
      setUser(maybeUser);

      if (maybeUser) {
        try {
          const userRef = doc(db, 'users', maybeUser.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setRole(userSnap.data().role || 'user');
          } else {
            setRole('user'); // Якщо документ не існує, припускаємо, що це звичайний юзер
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      } else {
        setRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className={css.authContainer}>
      {user ? (
        <div className={css.userInfo}>
          <span>Hello {user.displayName || 'Користувач'}</span>
          <button onClick={handleLogout} className={css.logoutButton}>
            Logout
          </button>

          {/* Якщо це адмін, показуємо доступ до адмінських сторінок */}
          {role === 'admin' && (
            <div className={css.adminPanel}>
              <Link
                className={`${css.navigationListItem} ${css.hiddenLink}`}
                to="/admin/dashboard"
              >
                Admin Dashboard
              </Link>
              <Link
                className={`${css.navigationListItem} ${css.hiddenLink}`}
                to="/admin/users"
              >
                Admin Users
              </Link>
            </div>
          )}
        </div>
      ) : (
        <ul className={css.loginWrapper}>
          <li>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className={css.loginButton}
            >
              Login
            </button>
          </li>
          <li>
            <button
              onClick={() => setIsRegisterModalOpen(true)}
              className={css.registerButton}
            >
              Register
            </button>
          </li>
        </ul>
      )}

      <AuthModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </div>
  );
};

export default AuthProvider;
