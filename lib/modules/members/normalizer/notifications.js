import he from 'he';

export default (notifications = []) =>
  notifications.reduce(
    (map, notification) => [
      ...map,
      {
        ...notification,
        html: he.decode(notification.html)
      }
    ],
    []
  );
