import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import AuthModal from '../../components/authModal/authModal';
import css from './authProvider.module.css';
import RegisterModal from 'components/authModal/registerModal';

export const AuthProvider = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, maybeUser => {
      setUser(maybeUser);
    });

    return () => unsubscribe();
  }, [auth]);

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
