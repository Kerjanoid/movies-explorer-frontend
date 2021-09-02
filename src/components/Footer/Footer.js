import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__links-bar">
        <p className="footer__copyright">
          &#169; {new Date().getFullYear()}
        </p>
        <nav className="footer__navtab">
          <ul className="footer__links">
            <li className="footer__links-item">
              <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noopener noreferrer">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__links-item">
              <a href="https://github.com/Kerjanoid" className="footer__link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li className="footer__links-item">
              <a href="https://t.me/Kerjanoid" className="footer__link" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

