export default (shows = []) =>
  shows.map(show => ({
    id: show.id,
    infos: {
      note: show.notes.user,
      ...show.user
    }
  }));
