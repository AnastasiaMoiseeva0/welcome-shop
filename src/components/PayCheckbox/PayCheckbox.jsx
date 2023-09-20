import "./PayCheckbox.css";
import applePay from "../../images/ApplePay.svg";
import googlePay from "../../images/GooglePay.svg";
import payPal from "../../images/PayPal.svg";
import masterCard from "../../images/MasterCard.svg";
import maestro from "../../images/Maestro.svg";
import visa from "../../images/Visa.svg";
import discover from "../../images/Discover.svg";
import Button from "../Button/Button";

function PayCheckbox({value, onChange}) {
  return (
    <section className="checkbox">
      <label className="checkbox__toggle-blue">
        <div className="checkbox__toggler">
          <input className="checkbox__button" type="checkbox" name="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} />
          <div className="checkbox__toggle-active"></div>
          <p className="checkbox__filter">By Payment Systems</p>
        </div>
        <div className="checkbox__icons">
          <img className="checkbox__icon" alt="Логотип ApplePay" src={applePay} />
          <img className="checkbox__icon" alt="Логотип GooglePay" src={googlePay} />
          <img className="checkbox__icon" alt="Логотип PayPal" src={payPal} />
        </div>
      </label>
      <label className="checkbox__toggle-white">
        <div className="checkbox__toggler">
          <input className="checkbox__button" type="checkbox" name="checkbox" />
          <div className="checkbox__toggle-active"></div>
          <p className="checkbox__filter">Pay by Credit Card</p>
        </div>
        <div className="checkbox__icons">
          <img className="checkbox__icon-card" alt="Логотип MasterCard" src={masterCard} />
          <img className="checkbox__icon-card" alt="Логотип Maestro" src={maestro} />
          <img className="checkbox__icon-card" alt="Логотип Visa" src={visa} />
          <img className="checkbox__icon-card" alt="Логотип Discover" src={discover} />
        </div>
      </label>
      <Button className="checkbox__pay-button" transparentButton="transparent">pay</Button>
    </section>
  );
}

export default PayCheckbox;
