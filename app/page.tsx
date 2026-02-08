import "./globals.css";

export default function Home() {
  return (
    <div className="screen-container">
      <h1 className="title">MANIJA</h1>
      <div className="buttons-container">
        <a href="#" className="btn" target="_blank" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="btn" target="_blank" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="btn" target="_blank" aria-label="Spotify">
          <i className="fab fa-spotify"></i>
        </a>
        <a href="#" className="btn" target="_blank" aria-label="SoundCloud">
          <i className="fab fa-soundcloud"></i>
        </a>
      </div>
    </div>
  );
}
