import { createSelector } from 'reselect';

export const getBudget = state => state.planner.budget;
export const getExpense = state => state.planner.expense;

export const calculateTotalExpenses = createSelector(
  getExpense,
  expenses => expenses.reduce((total, expense) => total + expense.amount, 0),
);
export const calculateBalance = createSelector(
  [getBudget, calculateTotalExpenses],
  (budget, expenses) => budget - expenses,
);
