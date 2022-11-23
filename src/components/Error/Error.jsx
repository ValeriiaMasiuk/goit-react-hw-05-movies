import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ErrorText } from './Error.styled';

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return <ErrorText>Navigate to Homepage</ErrorText>;
}

export default Error