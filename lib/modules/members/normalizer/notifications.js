import _find from 'lodash/find';
import he from 'he';

export default (notifications = []) =>
  notifications.reduce(
    (map, notification) => {
      const alreadyExist = !!_find(map, { id: notification.id });

      if (alreadyExist) {
        return map;
      }

      return [
        ...map,
        {
          ...notification,
          html: he.decode(notification.html)
        }
      ];
    },
    []
  );
