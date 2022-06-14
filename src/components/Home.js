import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import slide1 from "../assets/images/slides/slide1.jpg";
import slide2 from "../assets/images/slides/slide2.jpg";
import slide3 from "../assets/images/slides/slide3.jpg";
import news2 from "../assets/images/news2.jpg";
import news3 from "../assets/images/news3.jpg";
import news4 from "../assets/images/news4.jpg";
import pic5 from "../assets/images/pic/pic-5.jpg";
import pic6 from "../assets/images/pic/pic-6.jpg";
import pic7 from "../assets/images/pic/pic-7.jpg";
import pic8 from "../assets/images/pic/pic-8.jpg";

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
                <h2 className="title-box_primary">Welcome</h2>
              </div>
              <p>
                Perspiciatis unde omnis iste natus error sit voluptatem. Cum
                sociis natoque penatibus et magnis dis parturient montes ascetur
                ridiculus musull dui. Lorem ipsumulum aenean noummy endrerit
                mauris. Cum sociis natoque penatibuLorem ipsumulum aenean noummy
                endrerit mauris. Cum sociis natoque penatibus et magnis dis
                parturient montes ascetur ridiculus mus. Null dui. Fusce feugiat
                malesuada odio.
              </p>
              <p>
                penatibus et magnis dis parturient montes ascetur ridiculus
                musull dui. Lorem ipsumulum aenean noummy endrerit mauris. Cum
                sociis natoque penatibuLorem ipsumulum aenean noummy endrerit
                mauris. Cum sociis natoque penatibus et magnis dis parturient
                montes ascetur ridiculus mus. Null dui. Fusce feugiat malesuada
                odio.
              </p>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="news-box">
        <div className="container">
          <h2>
            <span>Current projects</span>
          </h2>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="thumbnail thumbnail4">
                <img src={news2} alt="" />

                <div className="caption">
                  <h4>
                    <a href="#">Aliquam eu aliquet quam</a>
                  </h4>

                  <p>
                    Souvlaki ignitus carborundum e pluribus unumfacto lingo est
                    igpay atinlay arquee selectus. non provisio incongruous
                    feline nolo contendre. Gratuitous octopus niacin, sodium
                    glutimate. Quote meon
                  </p>
                  <a href="#" data-title="Read More" className="btn-link">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="thumbnail thumbnail4">
                <img src={news3} alt="" />

                <div className="caption">
                  <h4>
                    <a href="#">Factorial non deposit</a>
                  </h4>

                  <p>
                    Enumfacto lingo est igpay atinlay arquee selectus. non
                    provisio incongruous feline nolo contendre. Grat uitous
                    octopus niacin, sodium glutimate. Quote meon an estimate et
                    non interruptus stad
                  </p>
                  <a href="#" data-title="Read More" className="btn-link">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="thumbnail thumbnail4">
                <img src={news4} alt="" />

                <div className="caption">
                  <h4>
                    <a href="#">Deposit quid proquo</a>
                  </h4>

                  <p>
                    Arquee selectus non provisio incongruous feline nolo
                    contendre. Gratuitous octopus niacin, sodium gluti mate.
                    Quote meon an estimate et non interruptus stad ium. Sic
                    tempus fugit esperanto
                  </p>
                  <a href="#" data-title="Read More" className="btn-link">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="packages" className="secpadding">
        <div className="container">
          <h2>
            <span>Completed Projects</span>
          </h2>

          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="cuadro_intro_hover ">
                <p>
                  <img src={pic5} className="img-responsive" alt="" />
                </p>
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <h3>Project Name</h3>
                    <a className=" btn btn-default" href="#"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3  col-sm-6">
              <div className="cuadro_intro_hover ">
                <p>
                  <img src={pic6} className="img-responsive" alt="" />
                </p>
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <h3>Project Name</h3>
                    <a className=" btn btn-default" href="#">
                      $4600
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3  col-sm-6">
              <div className="cuadro_intro_hover ">
                <p>
                  <img src={pic7} className="img-responsive" alt="" />
                </p>
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <h3>Project Name</h3>
                    <a className=" btn btn-default" href="#">
                      $4600
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3  col-sm-6">
              <div className="cuadro_intro_hover ">
                <p>
                  <img src={pic8} className="img-responsive" alt="" />
                </p>
                <div className="caption">
                  <div className="blur"></div>
                  <div className="caption-text">
                    <h3>Project Name</h3>
                    <a className=" btn btn-default" href="#">
                      $4600
                    </a>
                  </div>
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
              <div className="col-md-6 panel">
                <div className="panel-body">
                  <p className="simplenav">
                    <a href="index.html">Home</a> |
                    <a href="about.html">About</a> |
                    <a href="services.html">Services</a> |
                    <a href="price.html">Price</a> |
                    <a href="projects.html">Projects</a> |
                    <a href="contact.html">Contact</a>
                  </p>
                </div>
              </div>

              <div className="col-md-6 panel">
                <div className="panel-body">
                  <p className="text-right">
                    Copyright &copy; 2015. Template by{" "}
                    <a href="http://webthemez.com/" rel="develop">
                      WebThemez.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Home;
