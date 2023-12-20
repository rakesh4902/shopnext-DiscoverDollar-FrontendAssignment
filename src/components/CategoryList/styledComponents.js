import styled from 'styled-components'

export const CategoryListContainer = styled.ul`
  list-style: none;
  padding: 0;
`

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  flex-direction: column;
  padding: 10px;
`

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  margin-right: 10px;
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`

export const ProductName = styled.p`
  color: #ffffff;
  padding: 5px;
  margin: 0px;
  font-family: 'roboto';
`
export const NavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #c3cfe3;
  margin: 0px;
  padding: 0px;
  height: 75px;
`

export const UnorderList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  list-style: none;
  margin-top: 0px;
`

export const ListItem = styled.li`
  color: #10d488c;
  margin-right: 20px;
  font-family: 'Bree-serif';
`

export const Heading = styled.h1`
  color: #241169;
  font-family: 'roboto';
`

export const Item = styled.p`
  font-size: 24px;
`
export const LogoContainer = styled.div`
  display: flex;
`

export const Logo = styled.h1`
  font-size: 35px;
  margin-right: 0px;
  margin-left: 10px;
`

export const CategoryListItemContainer = styled.li`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e0e0e0;
  }
  width: 90%;
`

export const SubcategoriesContainer = styled.ul`
  padding-left: 20px;
  list-style: none;
`

export const ProductsContainer = styled.div`
  padding-left: 40px;
`

export const ProductsDisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const CategoryHeader = styled.h1`
  color: #f8f8f8;
  font-family: 'roboto';
  font-size: 30px;
`
