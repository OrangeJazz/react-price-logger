import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [usedFilterYear, setUsedFilterYear] = useState("2020");

  const setFilterHandler = (year) => {
    setUsedFilterYear(year);
  };

  const filtredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === usedFilterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={usedFilterYear}
          onChangeFilter={setFilterHandler}
        />
        <ExpensesChart expenses={filtredExpenses} />
        <ExpensesList items={filtredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
