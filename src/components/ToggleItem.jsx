/* eslint-disable react/prop-types */
import styled from "styled-components";

const ToggleOpen = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--color-gray);
  margin-bottom: 0.75rem;

  @media (min-width: 1000px) {
    margin-bottom: 0;
    cursor: pointer;
  }

  h3 {
    font-weight: 500;
    transition: all .3s;
  }

  h3:hover {
    color: var(--color-black);
  }
`;

const ArrowIcon = styled.img`
  transition: all 0.3s;
  transform: ${({ isOpenFeatures }) => (isOpenFeatures ? "rotate(180deg)" : "rotate(0deg)")};
`;

const ItemsBoxLeft = styled.div`
  @media (min-width: 1000px) {
    position: absolute;
    left: -8rem;
    width: 12rem;
    background-color: #fff;
    padding-inline: 2rem;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    top: 3rem;
  }
`;

const ItemsBoxRight = styled.div`
  @media (min-width: 1000px) {
    position: absolute;
    right: -4rem;
    width: 9rem;
    background-color: #fff;
    padding-inline: 2rem;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    top: 3rem;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

function ToggleItem({ isFeaturesOpen, setIsFeaturesOpen, title, children, isLeft }) {
  return (
    <Container>
      <ToggleOpen onClick={() => setIsFeaturesOpen((v) => !v)}>
        <h3>{title}</h3>
        <ArrowIcon src="./images/icon-arrow-down.svg" alt="" isOpenFeatures={isFeaturesOpen} />
      </ToggleOpen>
      {isFeaturesOpen ? (
        isLeft ? (
          <ItemsBoxLeft>{children} </ItemsBoxLeft>
        ) : (
          <ItemsBoxRight>{children}</ItemsBoxRight>
        )
      ) : (
        ""
      )}
    </Container>
  );
}

export default ToggleItem;
