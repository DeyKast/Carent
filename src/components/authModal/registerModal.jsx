import { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth';
import { googleAuthProvider } from '../../firebase';

import css from './registerModal.module.css';

const RegisterModal = ({ isOpen, onClose }) => {
  const auth = getAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Вхід через Google
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      onClose(); // Закриваємо модальне вікно після успішного входу
    } catch (err) {
      // setError('Google login error');
    }
  };

  const handleRegister = async e => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Enter your name.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password must contain at least 6 characters.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name });
      onClose();
    } catch (err) {
      setError('Registration error. This email may already be in use.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        <h2>Registration</h2>
        {error && <p className={css.error}>{error}</p>}

        <form onSubmit={handleRegister} className={css.form}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          {/* Поле пароля */}
          <div className={css.passwordField}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password (min. 6 characters)"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className={css.togglePassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          {/* Поле підтвердження пароля */}
          <div className={css.passwordField}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Submit password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Registration</button>
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

export default RegisterModal;
