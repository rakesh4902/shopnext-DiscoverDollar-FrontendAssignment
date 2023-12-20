import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  ProductName,
} from './styledComponents'

const ProductDisplay = props => {
  const {product} = props
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductDetails>
        <ProductName>{product.name}</ProductName>
        <ProductName>Rs.{product.price}</ProductName>
      </ProductDetails>
    </ProductContainer>
  )
}

export default ProductDisplay
