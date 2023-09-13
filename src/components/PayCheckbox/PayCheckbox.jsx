import "./PayCheckbox.css"
import applePay from "../../images/ApplePay.svg";
import googlePay from "../../images/GooglePay.svg";
import payPal from "../../images/PayPal.svg";
import masterCard from "../../images/MasterCard.svg";
import maestro from "../../images/Maestro.svg";
import visa from "../../images/Visa.svg";
import discover from "../../images/Discover.svg";

function PayCheckbox() {
  return (
    <section>
      <label className="checkbox__toggle">
        <p className="checkbox__filter">By Payment Systems</p>
        <input className="checkbox__button" type="checkbox" name="checkbox" />
        <div>
          <img alt="Логотип ApplePay" src={applePay} />
          <img alt="Логотип GooglePay" src={googlePay} />
          <img alt="Логотип PayPal" src={payPal} />
        </div>
      </label>
      <label className="checkbox__toggle">
        <p className="checkbox__filter">Pay by Credit Card</p>
        <input className="checkbox__button" type="checkbox" name="checkbox" />
        <div>
          <img alt="Логотип MasterCard" src={masterCard} />
          <img alt="Логотип Maestro" src={maestro} />
          <img alt="Логотип Visa" src={visa} />
          <img alt="Логотип Discover" src={discover} />
        </div>
      </label>
      <button>pay</button>
    </section>
  );
}

export default PayCheckbox;
