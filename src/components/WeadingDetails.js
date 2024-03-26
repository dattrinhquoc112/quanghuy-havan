import React from "react";
import QR_HUY from "../images/qr_huy.jpg";
import HAGIANG_1 from "../images/hagiang_1.jpg";
import HAGIANG_2 from "../images/hagiang_2.jpg";
import HOABINH_1 from "../images/hoabinh_1.jpg";
import PHUQUOC_1 from "../images/phuquoc_1.jpg";
import PHUQUOC_2 from "../images/phuquoc_2.jpg";
import PHUQUOC_3 from "../images/phuquoc_3.jpg";
import TET_1 from "../images/tet_1.jpg";
import TET_2 from "../images/tet_2.jpg";
import TET_3 from "../images/tet_3.jpg";
import { Fade } from "react-reveal";

const WeadingDetails = () => {
  const listImages = [
    HAGIANG_1,
    HAGIANG_2,
    HOABINH_1,
    PHUQUOC_1,
    PHUQUOC_2,
    // PHUQUOC_3,
    TET_1,
    TET_2,
    TET_3,
  ];
  return (
    <section className="section w-details-area center-text">
      <div className="container">
        <h2>Bộ ảnh của chúng mình</h2>
        <Fade bottom>
          <div
            className="row"
            style={{
              gap: "20px",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          >
            {listImages.map((elem, index) => (
              <img
                key={index}
                src={elem}
                style={{
                  width: "200px",
                  objectFit: "contain",
                  borderRadius: "20px",
                }}
              />
            ))}
          </div>
        </Fade>
        <h2>🙆‍♂️ QR cho hiện đại nhé 🙆‍♂️</h2>
        <img
          src={QR_HUY}
          style={{
            width: "300px",
            objectFit: "contain",
            marginTop: "20px",
            borderRadius: "20px",
          }}
        />
      </div>
    </section>
  );
};

export default WeadingDetails;
