interface Bookmark {
  id: string;
  time: string;
  note: string;
}

function BookmarkList({ bookmarks }: { bookmarks: Bookmark[] }) {
  return (
    <ul>
      {bookmarks.map((b) => (
        <li key={b.id}>
          <span>{b.time}</span>
          <BookmarkNote note={b.note} />
        </li>
      ))}
    </ul>
  );
}

export function BookmarkNote({ note }: { note?: string }) {
  return note ? <span>"{note}"</span> : <em>(no note)</em>;
}