import './card.css'

export default function Card({ ep }) {
  return (
    <div className="card shadow-sm p-3 d-flex flex-row align-items-start m-5">
      <img src={ep.episode_image} alt={ep.episode_name_pt} className=" rounded-start flex-shrink-0" />
      <div className="card-body flex-grow-1">
        <h3 className="card-title">{ep.episode} - {ep.episode_name_pt}</h3>
        <p className="card-text">{ep.episode_summary_pt}</p>
      </div>
    </div>
  );
}
