import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormShown, setIsFormShown] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsFormShown(false);
  };

  const showFormHandler = () => {
    setIsFormShown(true);
  };

  const hideFormHandler = () => {
    setIsFormShown(false);
  };

  return (
    <div className="new-expense">
      {!isFormShown && (
        <button type="button" onClick={showFormHandler}>
          Add New Expense
        </button>
      )}
      {isFormShown && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
