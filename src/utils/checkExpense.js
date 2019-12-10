import { toast } from 'react-toastify';

const check = (inputValue, name, balance) => {
  if (name === '') {
    toast.warn('Expense name is empty!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  if (inputValue < 0) {
    toast.warn('Expense is negative!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  if (inputValue === '') {
    toast.warn('Expense is empty!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  if (Number(inputValue) === 0) {
    toast.warn('Expense is zero!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  if (inputValue > balance) {
    toast.error('Budget is not enough', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  return true;
};

export default check;
