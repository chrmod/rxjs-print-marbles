export default function printMarbles(notifications = []) {
  if (notifications.length === 0) {
    return '';
  }

  const last = notifications[notifications.length - 1];
  const frameCount = Math.ceil(last.frame / 10);

  const marbles = Array(frameCount).fill('-');

  notifications.forEach(({ frame, notification }) => {
    const index = Math.ceil(frame / 10);

    if (notification.kind === 'N') {
      const currentValue = marbles[index];
      const newValue = notification.value || '-';

      if (currentValue === '-') {
        marbles[index] = newValue;
      } else if (currentValue instanceof Array) {
        marbles[index] = [
          ...currentValue,
          newValue,
        ];
      } else {
        marbles[index] = [
          currentValue,
          newValue,
        ];
      }
    }

    if (notification.kind === 'C') {
      marbles[index] = '|';
    }

    if (notification.kind === 'E') {
      marbles[index] = '#';
    }
  });

  const marblesString = '';

  marbles.forEach((marble) => {
    if (marble instanceof Array) {
      marblesString += `(${marble.join('')})`;
    } else {
      marblesString += marble;
    }
  });

  return marblesString;
}
