import { useState } from 'react';

function SpeakerIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      <path d="M15 9a5 5 0 0 1 0 6" />
    </svg>
  );
}

export function PlayPauseButton() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <button onClick={() => setIsPlaying(!isPlaying)}>
      {isPlaying ? '⏸ Pause' : '▶ Play'} {isPlaying && <SpeakerIcon />}
    </button>
  );
}