import "./PayCheckbox.css";
import applePay from "../../images/ApplePay.svg";
import googlePay from "../../images/GooglePay.svg";
import payPal from "../../images/PayPal.svg";
import masterCard from "../../images/MasterCard.svg";
import maestro from "../../images/Maestro.svg";
import visa from "../../images/Visa.svg";
import discover from "../../images/Discover.svg";
import Button from "../Button/Button";

function PayCheckbox() {
  return (
    <section className="checkbox">
      <label className="checkbox__toggle-blue">
        <div className="checkbox__toggler">
          <input className="checkbox__button" type="radio" name="checkbox" />
          <div className="checkbox__toggle-active"></div>
          <p className="checkbox__filter">By Payment Systems</p>
        </div>
        <div className="checkbox__icons">
          <img className="checkbox__icon" alt="Логотип ApplePay" src={applePay as unknown as string} />
          <img className="checkbox__icon" alt="Логотип GooglePay" src={googlePay as unknown as string} />
          <img className="checkbox__icon" alt="Логотип PayPal" src={payPal as unknown as string} />
        </div>
      </label>
      <label className="checkbox__toggle-white">
        <div className="checkbox__toggler">
          <input className="checkbox__button" type="radio" name="checkbox" />
          <div className="checkbox__toggle-active"></div>
          <p className="checkbox__filter">Pay by Credit Card</p>
        </div>
        <div className="checkbox__icons">
          <img className="checkbox__icon-card" alt="Логотип MasterCard" src={masterCard as unknown as string} />
          <img className="checkbox__icon-card" alt="Логотип Maestro" src={maestro as unknown as string} />
          <img className="checkbox__icon-card" alt="Логотип Visa" src={visa as unknown as string} />
          <img className="checkbox__icon-card" alt="Логотип Discover" src={discover as unknown as string} />
        </div>
      </label>
      <Button className="checkbox__pay-button" transparentButton="transparent">pay</Button>
    </section>
  );
}

export default PayCheckbox;
