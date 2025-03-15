import { useState } from 'react';
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { googleAuthProvider } from '../../firebase';
import css from './authModal.module.css';

const AuthModal = ({ isOpen, onClose }) => {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Вхід через Google
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      onClose(); // Закриваємо модальне вікно після успішного входу
    } catch (err) {
      setError('Google login error');
    }
  };

  // Вхід через email та пароль
  const handleEmailLogin = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (err) {
      setError('Incorrect email or password');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        <h2>Login</h2>
        {error && <p className={css.error}>{error}</p>}

        <form onSubmit={handleEmailLogin} className={css.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>

        <button onClick={handleGoogleLogin} className={css.googleButton}>
          Login with Google
        </button>

        <button onClick={onClose} className={css.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
