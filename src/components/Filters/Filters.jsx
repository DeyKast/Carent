import { useState } from 'react';
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
    <div className={css.filters}>
      <label className={css.filtersLabel}>
        <input className={css.filtersInput}
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
        <input className={css.filtersInput}
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
        <select className={css.filtersSelect}
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
        <select className={css.filtersSelect}
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
        <select className={css.filtersSelect}
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
        <input className={css.filtersInput}
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
  );
};

export default Filters;
