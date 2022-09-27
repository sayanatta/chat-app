import axiosInstance from '../../../utils/axiosInstance';
import { UserLoginPayload } from '../types';

// Login user
const login = async (userData: UserLoginPayload) => {
  const response = await axiosInstance.post('/sign-in', userData);
  return response.data;
};

const authService = {
  login,
};

export default authService;
