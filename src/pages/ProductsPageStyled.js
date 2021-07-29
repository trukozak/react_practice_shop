import styled from "styled-components";

export const ProductPageStyled = styled.div`
  .navigationList {
    list-style: none;
    display: flex;
    align-items: center;
    padding-top: 30px;
  }
  .navigationListItem {
    margin-top: 10px;
    margin-right: 20px;
  }
  .navigationListItemAnchor {
    text-decoration: none;
    color: #819ff5;
    text-transform: uppercase;
    &:hover {
      color: #5f73a1;
    }
  }
  .activeNavigationListItemAnchor {
    color: #5f73a1;
  }
`;
