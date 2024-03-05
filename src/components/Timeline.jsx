import React from "react";
import TlTextbox from "./TlTextbox";
import flag from "../assets/logo.png";
const Timeline = () => {
  const BC = "ق.م";
  return (
    <div id="capitals" className="timeline">
      <TlTextbox
        flag={flag}
        position="left-container"
        capital="القاهرة"
        period="972 - الان"
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="left-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="right-container"
        capital="الفسطاط"
        period="969 - 905"
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="right-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="left-container"
        capital="القطائع"
        period="905 - 868"
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="left-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="right-container"
        capital="العسكر"
        period="868 - 750"
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="right-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="left-container"
        capital="الفسطاط"
        period="750 - 641"
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="left-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="right-container"
        capital="الإسكندرية"
        period="641 - 332"
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="right-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="left-container"
        capital="سيبينيتوس"
        period={` ${BC}380 - ${BC}343`}
        description="كانت عاصمة الإقليم الثاني عشر من أقاليم الوجه البحري. وقد اختلفت مساحة الإقليم من عصر إلى آخر. وقد انقسمت في العصر الروماني إلى جزئين، جزء شمالي وآخر جنوبي. اشتهرت مدينة سمنود في الأسرة الثلاثين حينما أصبحت عاصمة لمصر كلها، حين أسس هذه الأسرة (نخت نبف) الأول، وموطنه سمنود."
        arrow="left-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="right-container"
        capital="منديس"
        period={` ${BC}399 - ${BC}380`}
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="right-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="left-container"
        capital="سايس"
        period={` ${BC}725 - ${BC}715`}
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="left-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="right-container"
        capital="ليونتوبوليس"
        period={` ${BC}945 - ${BC}715`}
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="right-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="left-container"
        capital="بوباستيس"
        period={` ${BC}1078 - ${BC}945`}
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="left-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="right-container"
        capital="بر رمسيس"
        period={` ${BC}1279 - ${BC}1078`}
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="right-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="left-container"
        capital="أخت آتون"
        period={` ${BC}1353 - ${BC}1332`}
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="left-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="right-container"
        capital="أفاريس"
        period={` ${BC}1650 - ${BC}1550`}
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="right-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="left-container"
        capital="كسويس"
        period={` ${BC}1725 - ${BC}1650`}
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="left-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="right-container"
        capital="إتجتاوي"
        period={` ${BC}1985 - ${BC}1802`}
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="right-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="left-container"
        capital="طيبة"
        period={` ${BC}2135 - ${BC}1985`}
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="left-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="right-container"
        capital="هيراكليوبوليس ماجنا"
        period={` ${BC}2160 - ${BC}2040`}
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="right-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="left-container"
        capital="منف"
        period={` ${BC}2686 - ${BC}2160`}
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="left-container-arrow"
      />
      <TlTextbox
        flag={flag}
        position="right-container"
        capital="ثينيس"
        period={` ${BC}3150 - ${BC}2686`}
        description="lorem ipsum asubd bask nd oahsd noasdn noas"
        arrow="right-container-arrow"
      />
    </div>
  );
};

export default Timeline;
