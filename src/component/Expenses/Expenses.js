import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { Fragment, useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Fragment>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {props.expenses.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </Fragment>
  );
};
export default Expenses;
