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
      marbles[index] = notification.value || '-';
    }

    if (notification.kind === 'C') {
      marbles[index] = '|';
    }

    if (notification.kind === 'E') {
      marbles[index] = '#';
    }
  });

  return marbles.join('');
}
