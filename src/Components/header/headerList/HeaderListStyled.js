import styled from "styled-components";

export const HeaderListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: calc(95vh - 60px);
  margin-top: 60px;
  background-color: #424242;
  align-items: center;
  padding-top: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    background-color: inherit;

    margin: 0;
    padding-top: 0;
    align-items: center;
    justify-content: space-between;
  }

  .headerListItem {
    margin-top: 10px;
    @media (min-width: 768px) {
      margin-top: 0;
    }

    &:not(:last-child) {
      margin-right: 10px;
      @media (min-width: 768px) {
        margin-right: 20px;
      }
    }
  }

  .headerListLink {
    color: ${(props) => props.colors.darkColors.main};
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
  }
  .activeHeaderListLink {
    color: ${(props) => props.colors.darkColors.active};
  }
`;
