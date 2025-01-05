import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import css from './rentalForm.module.css';
import { Notify } from 'notiflix';

const RentalForm = ({ carModel, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    startDate: '',
    endDate: '',
    comment: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    Notify.success(
      `The application for renting a ${carModel} car has been successfully sent`
    );
    console.log('Form submitted:', formData);

    onClose();
  };

  return ReactDOM.createPortal(
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className={css.form}>
          <h1 style={{ textAlign: 'center' }}>{carModel}</h1>
          <div className={css.field}>
            <label>Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={css.field}>
            <label>Phone*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={css.field}>
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={css.dateInputsWrapper}>
            <div className={`${css.field} ${css.fieldDate}`}>
              <label>Start Date*</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className={`${css.field} ${css.fieldDate}`}>
              <label>End Date*</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={css.field}>
            <label>Comment</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className={css.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>,
    document.getElementById('loader-root')
  );
};

export default RentalForm;
