import React from 'react';
import { Card } from 'react-bootstrap';
import './CountdownClock.css'; // Import file CSS cho hiệu ứng nhỏ

const CountdownClock = React.memo(({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Card className="countdown-clock text-center">
      <Card.Body>
        <Card.Text className="display-4">
          <span className="time">
            {minutes < 10 ? `0${minutes}` : minutes}
          </span>
          <span>:</span>
          <span className="time">
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
});

export default CountdownClock;
