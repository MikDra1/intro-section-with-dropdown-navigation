import styled from "styled-components";
import { useIntro } from "../contexts/IntroProvider";

const H1 = styled.h1`
  margin-top: 2rem;
  line-height: 1;
  text-align: center;


  @media (min-width: 1000px) {
    font-size: 5rem;
    text-align: start;

  }
`;

const Content = styled.p`
  color: var(--color-gray);
  text-align: center;
  padding-inline: 1.5rem;

  @media (min-width: 1000px) {
    text-align: start;
    padding-inline: 0;
    max-width: 45ch;
    font-size: 1.15rem;
    margin-top: -1rem;
  }
`;

const Button = styled.button`
  background-color: var(--color-black);
  color: #fff;
  font-weight: bold;
  padding: 1rem 2rem;
  border: 1px solid var(--color-black);
  border-radius: 1rem;
  transition: all 0.3s;
  cursor: pointer;
  margin-top: -1rem;

  &:hover {
    background-color: transparent;
    color: var(--color-black);
  }

  @media (max-width: 1000px) {
    margin-top: 1rem;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 1rem;

  @media (min-width: 1000px) {
    gap: 4rem;
    align-items: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  padding-inline: 1rem;
  margin-top: 2rem;
  align-items: center;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    margin-bottom: 0;
    margin-top: auto; // This will push the LogoContainer to the bottom: ;
  }
`;

const Logo = styled.img`
  width: 85%;
  margin-inline: auto;
  @media (min-width: 1000px) {
    max-width: 30rem;
  }
`;

const SmallLogo = styled.img`
  max-width: 30rem;
`;

const Container = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 5fr 4fr;
    max-width: 80rem;
    margin-inline: auto;
    justify-items: center;
    align-items: center;
    margin-bottom: 5rem;
    margin-top: 3rem;
  }
`;

const Wrapper = styled.div`
  order: -1;

  display: flex; // Change to flex
  flex-direction: column; // Ensure it stacks elements vertically
  height: 100%; // Fill available height
  justify-content: space-between; // Distribute space between elements

  @media (min-width: 1000px) {
    display: grid;
  }
`;

function Hero() {
  const { isMobile } = useIntro();

  return (
    <Container>
      <Logo
        src={
          isMobile
            ? "./images/image-hero-mobile.png"
            : "./images/image-hero-desktop.png"
        }
        alt=""
        width="100%"
      />
      <Wrapper>
        <ContentContainer>
          {isMobile || (
            <H1>
              Make<br></br> remote work
            </H1>
          )}
          {isMobile && <H1>Make remote work</H1>}
          <Content>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Content>
          <Button>Learn more</Button>
        </ContentContainer>
        <LogoContainer>
          <SmallLogo src="./images/client-databiz.svg" alt="databiz logo" />
          <SmallLogo
            src="./images/client-audiophile.svg"
            alt="audiophile logo"
          />
          <SmallLogo src="./images/client-meet.svg" alt="meet logo" />
          <SmallLogo src="./images/client-maker.svg" alt="maker logo" />
        </LogoContainer>
      </Wrapper>
    </Container>
  );
}

export default Hero;
