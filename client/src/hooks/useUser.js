import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
    }
  }, []);

  return user;
};

export default useUser;
