import {BiLogoShopify} from 'react-icons/bi'
import {
  NavBar,
  UnorderList,
  ListItem,
  Heading,
  Item,
  LogoContainer,
  Logo,
} from './styledComponents'

const Header = () => (
  <NavBar>
    <LogoContainer>
      <Logo>
        <BiLogoShopify />
      </Logo>
      <Heading>ShopNext</Heading>
    </LogoContainer>
    <UnorderList>
      <ListItem>
        <Item>Home</Item>
      </ListItem>
      <ListItem>
        <Item>About</Item>
      </ListItem>
      <ListItem>
        <Item>Cart</Item>
      </ListItem>
    </UnorderList>
  </NavBar>
)

export default Header
