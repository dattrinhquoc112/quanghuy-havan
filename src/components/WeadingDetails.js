import React from "react";
import QR_HUY from "../images/qr_huy.jpg";
import HAGIANG_1 from "../images/hagiang_1.jpg";
import HAGIANG_2 from "../images/hagiang_2.jpg";
import HOABINH_1 from "../images/hoabinh_1.jpg";
import PHUQUOC_1 from "../images/phuquoc_1.jpg";
import PHUQUOC_2 from "../images/phuquoc_2.jpg";
import TET_1 from "../images/tet_1.jpg";
import TET_2 from "../images/tet_2.jpg";
import TET_3 from "../images/tet_3.jpg";
import ANHCUOI_1 from "../images/anhcuoi_1.jpg";
import ANHCUOI_2 from "../images/anhcuoi_2.jpg";
import ANHCUOI_3 from "../images/anhcuoi_3.jpg";
import ANHCUOI_4 from "../images/anhcuoi_4.jpg";
import ANHCUOI_5 from "../images/anhcuoi_5.jpg";
import ANHCUOI_6 from "../images/anhcuoi_6.jpg";
import ANHCUOI_7 from "../images/anhcuoi_7.jpg";

const WeadingDetails = () => {
  const listImages = [
    ANHCUOI_1,
    ANHCUOI_2,
    ANHCUOI_3,
    ANHCUOI_4,
    ANHCUOI_5,
    ANHCUOI_6,
    ANHCUOI_7,
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
        <div className="galery-group">
          {listImages.map((elem, index) => (
            <img key={`galery-${index}`} src={elem} />
          ))}
        </div>
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
