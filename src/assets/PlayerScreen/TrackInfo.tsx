interface TrackInfoProps {
  title: string;
  author: string;
  narrator: string;
}

export function TrackInfo({ title, author, narrator }: TrackInfoProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{author} • Read by {narrator ? narrator : author}</p>
    </div>
  );
}

<TrackInfo
  title="The Science of Deduction"
  author="Arthur Conan Doyle"
  narrator="Stephen Fry"
/>