import styled from 'styled-components';

const ActiveText = styled.span`
  color: green;
  margin-left: 0.5rem;
`;

const SpeakActive = ({ active }) => {
  if (active) {
    return <ActiveText>Active</ActiveText>;
  }
  return null;
};

export default SpeakActive;
