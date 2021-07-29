import styled from 'styled-components'
import { darken, lighten } from 'polished'
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
  padding: 30px;
  display: flex;
  background: #e5e5e5;
  
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.2rem;
      margin-bottom: 1.2rem;
      margin-left: 1.8rem;

      color: #fff;
      background: linear-gradient(288deg, rgba(241,101,54,1) 10%, rgba(251,102,53,1) 54%, rgba(241,101,54,1) 98%);
      font-size: ${mixins.typography.paragraph};
      font-family: ${mixins.fonts.normal};
      font-weight: bold;
      text-transform: uppercase;
      
      border-radius: 5px;
      padding:25px 25px;

      border: none;
      border-radius: 8px;
      transition: 0.2s;

      &:hover {
        background: ${darken(0.06, '#fd4602')};
      }
    }
  }
`
export const CartTable = styled.table`
  width: 1500px; // INDETIDATO, ESTAMOS EM OBRAS! ;) 
  flex-direction: row;
  left: 183px;
  top: 175px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.3);
  `

export const ProductTable = styled.table`
  width: 100%; // INDETIDATO, ESTAMOS EM OBRAS! ;) 
 
  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
    font-size: 22px;
  }
  tbody td {
    padding: 30px;
    border-bottom: 1px solid #eee;
    font-size: 20px;
  }
  img {
    height: 100px;
    //background-color: #333;
    //justify-content: left start;
    //align-items:first baseline ;
  }
  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 20px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
    svg {
      color: #f16536;
      transition: color 0.2s;
    }
    &:hover {
      svg {
        color: ${darken(0.06, '#fd4602')};
      }
    }
    &:disabled {
      svg {
        color: ${lighten(0.25, '#f16536')};
        cursor: not-allowed;
      }
    }
  }
`

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`
