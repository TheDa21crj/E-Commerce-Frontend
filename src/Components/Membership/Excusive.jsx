import React from "react";
import Ecss from "./CSS/Excusive.module.css";

// Components
import Benifits from "./Benifits";

// Icons
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// Img
import svg1 from "./../../assets/Membership/discount.svg";
import svg2 from "./../../assets/Membership/early.svg";
import svg3 from "./../../assets/Membership/shipping.svg";
import svg4 from "./../../assets/Membership/delivery.svg";

export default function Excusive() {
  return (
    <div className={Ecss.mDiv}>
      <div className={Ecss.titlemDiv}>
        <div className={Ecss.titlemDivChild}>
          <p className={Ecss.ExclusiveMemberBenefits}>
            Exclusive Member Benefits
          </p>
          <p>
            <EmojiEventsIcon
              fontSize="large"
              className={Ecss.EmojiEventsIcon}
            />
          </p>
        </div>
      </div>
      <div className={Ecss.BenifitsRowDiv}>
        <div className={Ecss.BenifitsDiv}>
          <div className={Ecss.BenifitsTopDiv}>
            <Benifits
              title="BIG DISCOUNTS"
              content="Save big on ALL products every day. Why wait for a sale?"
              img={svg1}
            />
            <Benifits
              title="EARLY ACCESS"
              content="Get your hands on select products and designs before others do."
              img={svg2}
            />
          </div>
          <div className={Ecss.BenifitsBottomDiv}>
            <Benifits
              title="FREE DELIVERY"
              content="Our shipping charges are on us."
              img={svg3}
            />
            <Benifits
              title="PRIORITISED SHIPPING"
              content="We ship your orders before everyone else’s."
              img={svg4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
