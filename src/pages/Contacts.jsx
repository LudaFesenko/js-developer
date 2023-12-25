function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Ukraine, Zaporozhye</p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">Telegram, Viber</h2>
            <p>
              <a href="tel: +30992369597">+3(099)236-95-97</a>
            </p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:Manzhula1984@gmail.com">Manzhula1984@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contacts;
