import React from 'react';

const DataGrid = ({ data }) => {
  const tableStyles = {
    minWidth: '100%',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E2E8F0',
  };

  const headerCellStyles = {
    padding: '0.5rem 1rem',
    backgroundColor: '#EDF2F7',
    borderBottom: '1px solid #E2E8F0',
    textTransform: 'capitalize',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#4A5568',
  };

  const rowStyles = {
    transition: 'background-color 0.3s ease',
  };

  const cellStyles = {
    padding: '0.5rem 1rem',
    borderBottom: '1px solid #E2E8F0',
    fontSize: '0.875rem',
    color: '#4A5568',
  };

  const handleRowHover = (e) => {
    e.target.parentNode.style.backgroundColor = '#F7FAFC';
  };

  const handleRowLeave = (e) => {
    e.target.parentNode.style.backgroundColor = 'transparent';
  };

  return (
    <div>
      <table style={tableStyles}>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => (
                <th key={key} style={headerCellStyles}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={rowStyles}
              onMouseEnter={handleRowHover}
              onMouseLeave={handleRowLeave}
            >
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex} style={cellStyles}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
