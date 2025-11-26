export default function Card({ ep }) {
  return (
    <div className="card">
      <img src={ep.episode_image} alt={ep.episode_name_pt} />

      <h3>{ep.episode} - {ep.episode_name_pt}</h3>

      <p>{ep.episode_summary_pt}</p>
    </div>
  );
}
