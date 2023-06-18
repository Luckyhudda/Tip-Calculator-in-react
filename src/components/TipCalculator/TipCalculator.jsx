import { useState } from "react";
import style from "./TipCalculator.module.css";
function TipCalculator() {
  // store data
  const [total, setTotal] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const [customerData, setCustomerData] = useState({
    name: "",
    service: 0,
    tip:0,
  });
  const [list, setList] = useState([]);

  // handleData
  const handleData = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };
  
  // add Customer
  const addCustomer = () => {
    customerData.tip = (customerData.bill * customerData.service) / 100;
    setList([...list, customerData]);
  };

  // calc total....
  const CalculateTotal = () => {
    let totalTips = 0;
    
    list.map((user) => {
      totalTips = totalTips + user.tip;
    });
    setTotal(list.length);
    setTotalTip(totalTips);
  };
console.log(list);
  /// userLIst
  const userList = list.map((customer, index) => {
  return  (<li key={index}>
      {customer.name} Offering a tip of {customer.tip} Rupee 
    </li>);
  });
  return (
    <>
      <h2 className={style.heading}>Enter Your bill Amount</h2>
      <input
        type="number"
        id=""
        className={style.inputField}
        name="bill"
        onChange={handleData}
      />
      <div className={style.serviceBox}>
        <h4>How was the Service</h4>
        <select
          className={style.selection}
          name="service"
          onChange={handleData}
        >
          <option selected disabled value='0'>
            select One
          </option>
          <option value="20">Excellent</option>
          <option value="10">Moderate</option>
          <option value="05">Bad</option>
        </select>
        <input
          type="text"
          placeholder="Customer Name"
          className={style.customerInput}
          name="name"
          onChange={handleData}
        />
        <button className={style.addBtn} onClick={addCustomer}>
          Add Customer
        </button>
      </div>
      <p className={style.heading}>Customer List</p>
      <ul className={style.lists}>{userList} </ul>

      <button className={style.calcBtn} onClick={CalculateTotal}>
        Calculate Tip & Customer
      </button>
      <table>
        <thead>
          <tr>
            <th>Total Customer</th>
            <th>Tip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{total}</td>
            <td>{totalTip}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default TipCalculator;
