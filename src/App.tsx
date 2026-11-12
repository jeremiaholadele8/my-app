import { TrackInfo } from "./assets/PlayerScreen/TrackInfo";
import { PlayPauseButton } from "./assets/PlayerScreen/PlayPauseButton";
import { BookmarkNote } from "./assets/PlayerScreen/Bookmark";

function App() {
  return (
    <>
        <TrackInfo title="The Science of Deduction" author="Arthur Conan Doyle" narrator="Stephen Fry" />
        <PlayPauseButton />
        <BookmarkNote />
    </>
  );
}

export default App;
