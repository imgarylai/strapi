import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: ${({ small }) => (small ? '50px' : '94px')};
  height: ${({ small }) => (small ? '50px' : '94px')};
  padding-left: 1%;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
`;

Wrapper.defaultProps = {
  small: false,
};

Wrapper.propTypes = {
  small: PropTypes.bool,
};

export default Wrapper;