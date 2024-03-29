import React from "react";
import NHAU_1 from "../images/nhau_1.jpg";
import NAMTAY_1 from "../images/namtay_1.jpg";
import CHOI_2 from "../images/choi_2.jpg";
import TET_3 from "../images/tet_3.jpg";
import { Fade } from "react-reveal";

const Weadingloaction = () => {
  return (
    <section className="section w-details-area center-text">
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <iframe width="1280" height="720" src="https://www.youtube.com/embed/XakSLktg_tE" title="Quang Huy Thúy Vân" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/* <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> */}
          <div className="col-sm-10">
            <div className="heading">
              <h3>Cùng ngắm nhìn những cái "lần đầu" của chúng mình nhé ~</h3>
              <span className="heading-bottom">
                <i className="icon icon-star"></i>
              </span>
            </div>

            <div className="wedding-details margin-bottom">
              <Fade left>
                <div className="w-detail left">
                  <i className="icon icon-wine-glass"></i>
                  <h4 className="title">Bữa nhậu bắt đầu yêu đương</h4>
                  <img src={NHAU_1} />
                  {/* <i className="icon icon-ciurclke"></i> */}
                </div>
              </Fade>

              <Fade right>
                <div className="w-detail right">
                  <h4 className="title">Lần đầu nắm tay nè ~ 🫰</h4>
                  <img src={NAMTAY_1} />
                </div>
              </Fade>
              <Fade left>
                <div className="w-detail left">
                  <h4 className="title">
                    Lần đầu cảm nắng và rủ em đua xe trước khi hết phép 🚘
                  </h4>
                  <img src={CHOI_2} />
                </div>
              </Fade>

              <Fade right>
                <div className="w-detail right">
                  {/* <i className="icon icon-cake"></i> */}
                  <i className="icon icon-ciurclke"></i>
                  <h4 className="title">Lần đầu đón tết cùng nhau</h4>
                  <img src={TET_3} />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weadingloaction;
