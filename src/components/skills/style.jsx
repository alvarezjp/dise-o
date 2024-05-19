import styled from "styled-components";

const SkillsContainer = styled.section`
  padding: 0px 21px;
  box-sizing: border-box;
  height: 180px;
  overflow: hidden;
  align-content: center;
  background-color: var(--color2);
  @media screen and (min-width: 630px) {
    height: 300px;
    padding: 0px 40px;
  }
  /* border: 3px solid black; */
`;

const ContainArticle = styled.article`
  display: flex;
  justify-content: center;
  height: auto;
  box-sizing: border-box;

  /* border: 3px solid red; */
`;
const IconSkills = styled.img`
  width: 96px;
  height: 96px;
  @media screen and (min-width: 630px) {
    width: 167px;
    height: 167px;
  }
  
  /* border: 3px solid blue; */
`;

export { SkillsContainer, ContainArticle, IconSkills };
