import React from 'react';
import './Stops.css';

function StopsView({ currentTime, times }) {
  return (
    <div data-test="component-stops-view">
      <h1 className="hidden">Upcoming Stop Times</h1>
      <h2 data-test="current-time">Current Time: {currentTime}</h2>
      <div id="table">
        <table data-test="stops-table" className="ui compact table">
          <thead id="thead">
            <tr>
              <th scope="col">Route</th>
              <th scope="col">Stop</th>
              <th scope="col">Departure</th>
            </tr>
          </thead>
          <tbody>
            {times.map((time, index) => (
              <tr id={`row${index}`} key={index}>
                <td key={`${time.Route}_${index}`}> {time.Route}</td>
                <td key={`${time.Description}_${index}`}>{time.Description}</td>
                <td className="time" key={`${time.DepartureText}_${index}`}>{time.DepartureText}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StopsView;