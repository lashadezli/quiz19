import React from 'react';
import classes from '../modules/RegionFilter.module.scss'

const RegionFilter = ({ regions, onSelect }) => {
  return (
    <div className={classes['select']}>
    <select  onChange={(e) => onSelect(e.target.value)}>
      <option value="">All Regions</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
    </div>
  );
};

export default RegionFilter;
