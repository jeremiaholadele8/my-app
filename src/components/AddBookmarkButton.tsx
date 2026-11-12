import { useMutation } from 'convex/react';
import { ConvexError } from 'convex/values';
import { api } from '../../convex/_generated/api';
import type { Id } from '../../convex/_generated/dataModel';
import { formatTime } from './BookmarkList';

export function AddBookmarkButton({
    bookId,
    chapter,
    time,
}: {
    bookId: Id<'books'>;
    chapter: number;
    time: number;
}) {
    const addBookmark = useMutation(api.bookmarks.add);
    const handleClick = async () => {
        try {
            await addBookmark({ bookId, chapter, time });
        } catch (err) {
            if (err instanceof ConvexError) alert(err.data); // "Max 10 bookmarks per chapter"
            else throw err;
        }
    };
    return <button onClick={handleClick}>🔖 {formatTime(time)}</button>;
    }
