function News() {
  return <div>
    <section className="secpadding secpadding--about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-box clearfix ">
              <h2 className="title-box_primary">Новости</h2>
            </div>
            <p>
              <b>НАША КОМПАНИЯ ИНФОРМИРУЕТ</b>
            </p>
            <p>
              О новом строительстве пятнадцатиэтажного жилого дома с торговым центром. Следите за нашими новостями на сайте, а также в инстаграме и фейсбуке
            </p>
            <p>
              <b><i>Самые лучшие идеи! Самые лучшие решения! Самые лучшие результаты! Мы строим будущее! Мы создаем и превращаем в реальности!</i></b>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div id="map" className="map"></div>
        </div>
      </div>
    </section>
  </div>;
}
export default News;
