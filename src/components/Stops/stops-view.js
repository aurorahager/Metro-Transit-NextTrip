import React from 'react';

function StopsView({ currentTime, times }) {
  return (
    <div>
      <h1 data-test="current-time">{currentTime}</h1>
      <table data-test="stops-table">
        <thead>
          <tr>
            <th scope="col">Route</th>
            <th scope="col">Stop</th>
            <th scope="col">Departure</th>
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => (
            <tr key={index}>
              <th scope="row" key={`${time.Route}_${index}`}>{time.Route}</th>
              <td key={`${time.Description}_${index}`}>{time.Description}</td>
              <td key={`${time.DepartureText}_${index}`}>{time.DepartureText}</td>
            </tr>
          ))};
        </tbody>
      </table>
    </div>
  );
};

export default StopsView;