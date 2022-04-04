import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //style 1: individual methods: more common
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      aadate: enteredDate,
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            value={enteredTitle}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <button type="submit" className="new-expense__actions">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
//style 2:grouped
// useState({
//     enteredTitle:'',
//     enteredDate:'',
//     enteredAmount:''
// })
// const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredDate: "",
//     enteredAmount: "",
//   });
//   const titleChangeHandler = (event) => {

//      setUserInput ((prevState)=>{
//     return {...prevState,enteredTitle:event.target.value}
// })
//   };
//   const dateChangeHandler = (event) => {
//      setUserInput ((prevState)=>{
//     return {...prevState,enteredDate:event.target.value}  //   };
//   const amountChangeHandler = (event) => {
//      setUserInput ((prevState)=>{
//     return {...prevState,enteredAmount:event.target.value}  //   };
