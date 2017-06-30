export default (shows = []) =>
  shows.map(show => {
    const normalizedShow = { ...show };
    const notes = { ...show.notes };
    delete notes.user;

    delete normalizedShow.user;
    delete normalizedShow.in_account;
    normalizedShow.notes = notes;

    return normalizedShow;
  });
