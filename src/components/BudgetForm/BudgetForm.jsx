import React from 'react';
import PropTypes from 'prop-types';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

const BudgetForm = ({ onSave }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const currentInput = Number(e.target.querySelector('input').value);
    onSave(currentInput);

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label customStyles={labelStyles}>
        Enter your total budget
        <Input type="number" name="amount" />
      </Label>

      <Button label="Save" type="submit" />
    </Form>
  );
};

BudgetForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default BudgetForm;
