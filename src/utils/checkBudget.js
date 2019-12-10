import { toast } from 'react-toastify';

const check = (inputValue, expenses) => {
  if (inputValue < 0) {
    toast.warn('Budget is negative!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  if (inputValue === '') {
    toast.warn('Budget is empty!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  if (Number(inputValue) === 0) {
    toast.warn('Budget is zero!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  if (inputValue < expenses) {
    toast.error('Budget less then expenses', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  return true;
};

export default check;
