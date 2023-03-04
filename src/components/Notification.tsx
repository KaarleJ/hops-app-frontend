import { useSelector } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import { Rootstate } from '../store';
import { setNotification } from '../reducers/notificationReducer';
import { useDispatch } from 'react-redux';

const Notification = () => {
  const notification = useSelector((state: Rootstate) => state.notification);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setNotification(null));
  };

  return (
    <>
      <Snackbar open={notification !== null} autoHideDuration={5000} onClose={handleClose}>
        <Alert severity='success'>
          {notification}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Notification;

export const useNotify = () => {
  const dispatch = useDispatch();
  const notify = (message: string): void => {
    dispatch(setNotification(message));
  };

  return [notify];
};