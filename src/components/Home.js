import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import slide1 from "../assets/images/slides/slide1.jpg";
import slide2 from "../assets/images/slides/slide2.jpg";
import slide3 from "../assets/images/slides/slide3.jpg";
import build_h_1 from "../assets/images/build_h_1.jpg";
import build_m_1 from "../assets/images/build_m_1.jpg";
import build_m_2 from "../assets/images/build_m_2.jpg";
import hotel_1 from "../assets/images/hotel_1.jpg";
import hotel_2 from "../assets/images/hotel_2.jpg";
import design_1 from "../assets/images/design_1.jpg";
import design_2 from "../assets/images/design_2.jpg";
import design_3 from "../assets/images/design_3.jpg";
import land_design_1 from "../assets/images/land_design_1.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendEmail = (data) => {
    console.log(data);
    fetch("/send-email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <header id="head">
        <AutoplaySlider
          animation="foldOutAnimation"
          cssModule={[CoreStyles, AnimationStyles]}
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          <div data-src={slide1} />
          <div data-src={slide2} />
          <div data-src={slide3} />
        </AutoplaySlider>
      </header>
      <section id="search">
        <div className="search-panel">
          <div className="container">
            <div className="row">
              <form
                className="form-inline"
                role="form"
                onSubmit={handleSubmit(sendEmail)}
              >
                <div className="col-md-4">
                  <div className="form-group form-group--email">
                    <label>Имя</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Введите Имя"
                      autoComplete="off"
                      required
                      {...register("firstName")}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group form-group--email">
                    <label>Фамилия</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Введите Фамилию"
                      autoComplete="off"
                      {...register("lastName")}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group form-group--email">
                    <label>Электронная почта</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Введите электронную почту"
                      autoComplete="off"
                      required
                      {...register("email")}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <button className="btn btnsearch" type="submit">
                      Отправить заявку
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="secpadding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-box clearfix ">
                <h2 className="title-box_primary">ПОРТФОЛИО</h2>
              </div>
              <ul className="linked-list">
                <li><a href="#section1">Многоэтажные здания</a></li>
                <li><a href="#section2">Малоэтажные жилые дома</a></li>
                <li><a href="#section3">Гостиницы</a></li>
                <li><a href="#section4">Дизайн интерьеров</a></li>
                <li><a href="#section5">Ландшафтный дизайн</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="news-box" id="section1">
        <div className="container">
          <h2>
            <span>Многоэтажные здания</span>
          </h2>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="thumbnail thumbnail4">
                <img src={build_h_1} alt="" />
                <div className="caption">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-box" id="section2">
        <div className="container">
          <h2>
            <span>Малоэтажные жилые дома</span>
          </h2>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="thumbnail thumbnail4">
                <img src={build_m_1} alt="" />

                <div className="caption">
                  <h4>Двух этажный жилой дом в городе Бишкек
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="thumbnail thumbnail4">
                <img src={build_m_2} alt="" />

                <div className="caption">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-box" id="section3">
        <div className="container">
          <h2>
            <span>Гостиницы</span>
          </h2>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="thumbnail thumbnail4">
                <img src={hotel_1} alt="" />

                <div className="caption">
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="thumbnail thumbnail4">
                <img src={hotel_2} alt="" />

                <div className="caption">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-box" id="section4">
        <div className="container">
          <h2>
            <span>Дизайн интерьеров</span>
          </h2>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="thumbnail thumbnail4">
                <img src={design_1} alt="" />

                <div className="caption">
                  <h4>ПОДЬЕЗД
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="thumbnail thumbnail4">
                <img src={design_2} alt="" />

                <div className="caption">
                  <h4>КВ №3
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="thumbnail thumbnail4">
                <img src={design_3} alt="" />

                <div className="caption">
                  <h4>ДИЗАЙН КВАРТИРЫ ПОДБОРКА ОБОЕВ
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-box" id="section5">
        <div className="container">
          <h2>
            <span>Ландшафтный дизайн</span>
          </h2>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="thumbnail thumbnail4">
                <img src={land_design_1} alt="" />

                <div className="caption">
                  <h4>ЛАНДШАФТ МЭЭРИМ ЖМ ЫНТЫМАК
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="btm-section secpadding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="title-box clearfix ">
                <h3 className="title-box_primary">New Projects</h3>
              </div>
              <div className="list styled custom-list">
                <ul>
                  <li>
                    <a
                      title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus."
                      href="#"
                    >
                      Singapore Township
                    </a>
                  </li>
                  <li>
                    <a
                      title="Fusce feugiat malesuada odio. Morbi nunc odio gravida at cursus nec luctus."
                      href="#"
                    >
                      Mega luxury Villas
                    </a>
                  </li>
                  <li>
                    <a
                      title="Penatibus et magnis dis parturient montes ascetur ridiculus mus."
                      href="#"
                    >
                      RNT Commercial Shopping Mall
                    </a>
                  </li>
                  <li>
                    <a
                      title="Morbi nunc odio gravida at cursus nec luctus a lorem. Maecenas tristique orci."
                      href="#"
                    >
                      SVN Independent & Duplex Houses
                    </a>
                  </li>
                  <li>
                    <a
                      title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus."
                      href="#"
                    >
                      World wide IT park
                    </a>
                  </li>
                  <li>
                    <a
                      title="Fusce feugiat malesuada odio. Morbi nunc odio gravida at cursus nec luctus."
                      href="#"
                    >
                      North Arena SNT Township
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="title-box clearfix ">
                <h3 className="title-box_primary">Large Projects</h3>
              </div>
              <div className="list styled custom-list">
                <ul>
                  <li>
                    <a
                      title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus."
                      href="#"
                    >
                      Singapore Township
                    </a>
                  </li>
                  <li>
                    <a
                      title="Fusce feugiat malesuada odio. Morbi nunc odio gravida at cursus nec luctus."
                      href="#"
                    >
                      Mega luxury Villas
                    </a>
                  </li>
                  <li>
                    <a
                      title="Penatibus et magnis dis parturient montes ascetur ridiculus mus."
                      href="#"
                    >
                      RNT Commercial Shopping Mall
                    </a>
                  </li>
                  <li>
                    <a
                      title="Morbi nunc odio gravida at cursus nec luctus a lorem. Maecenas tristique orci."
                      href="#"
                    >
                      SVN Independent & Duplex Houses
                    </a>
                  </li>
                  <li>
                    <a
                      title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus."
                      href="#"
                    >
                      World wide IT park
                    </a>
                  </li>
                  <li>
                    <a
                      title="Fusce feugiat malesuada odio. Morbi nunc odio gravida at cursus nec luctus."
                      href="#"
                    >
                      North Arena SNT Township
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="title-box clearfix ">
                <h3 className="title-box_primary">Our Clients</h3>
              </div>
              <blockquote className="blockquote-1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante. Anim pariatur cliche
                  reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid
                </p>
                <small>
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="footer2">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Home;
