import { useState, useEffect } from 'react';
import css from './filters.module.css';

const Filters = ({ onFilterChange }) => {
  const initialFilters = {
    priceFrom: '',
    priceTo: '',
    driveType: '',
    transmissionType: '',
    fuelConsumptionTo: '',
    bodyType: '',
  };

  const [filters, setFilters] = useState(initialFilters);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(true);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleReset = () => {
    setFilters(initialFilters);
    onFilterChange(initialFilters);
  };

  return (
    <div className={css.filtersContainer}>
      {isMobile && (
        <button className={css.toggleButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? `Hide Filters ↑` : `Show Filters ↓`}
        </button>
      )}
      <div className={`${css.filters} ${isOpen ? css.show : css.hide}`}>
        <label className={css.filtersLabel}>
          <input
            className={css.filtersInput}
            type="number"
            name="priceFrom"
            min={0}
            max={1000}
            step={10}
            placeholder="Price from"
            value={filters.priceFrom}
            onChange={handleChange}
          />
        </label>
        <label className={css.filtersLabel}>
          <input
            className={css.filtersInput}
            type="number"
            name="priceTo"
            min={0}
            max={1000}
            step={10}
            placeholder="Price to"
            value={filters.priceTo}
            onChange={handleChange}
          />
        </label>
        <label className={css.filtersLabel}>
          <select
            className={css.filtersSelect}
            name="driveType"
            value={filters.driveType}
            onChange={handleChange}
          >
            <option value="" disabled>
              Drive type:
            </option>
            <option value="">All types</option>
            <option value="AWD">AWD</option>
            <option value="FWD">FWD</option>
            <option value="RWD">RWD</option>
          </select>
        </label>
        <label className={css.filtersLabel}>
          <select
            className={css.filtersSelect}
            name="transmissionType"
            value={filters.transmissionType}
            onChange={handleChange}
          >
            <option value="" disabled>
              Transmission:
            </option>
            <option value="">All types</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </label>
        <label className={css.filtersLabel}>
          <select
            className={css.filtersSelect}
            name="bodyType"
            value={filters.bodyType}
            onChange={handleChange}
          >
            <option value="" disabled>
              Body type:
            </option>
            <option value="">All types</option>
            <option value="Coupe">Coupe</option>
            <option value="Convertible">Convertible</option>
            <option value="Sedan">Sedan</option>
            <option value="Station Wagon">Station Wagon</option>
            <option value="SUV">SUV</option>
            <option value="Pickup Truck">Pickup Truck</option>
          </select>
        </label>
        <label className={css.filtersLabel}>
          <input
            className={css.filtersInput}
            type="number"
            name="fuelConsumptionTo"
            placeholder="Fuel Consumption To"
            value={filters.fuelConsumptionTo}
            onChange={handleChange}
          />
        </label>
        <button className={css.resetButton} type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filters;
