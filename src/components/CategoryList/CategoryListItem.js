import {Component} from 'react'
import {IoIosArrowDropdown, IoIosArrowDropup} from 'react-icons/io'
import {
  CategoryListItemContainer,
  SubcategoriesContainer,
  ProductsContainer,
  ProductsDisplayContainer,
  CategoryHeader,
} from './styledComponents'
import ProductDisplay from './ProductDisplay'

class CategoryListItem extends Component {
  handleClick = () => {
    const {category, handleClick} = this.props

    if (category.subcategories && category.subcategories.length > 0) {
      handleClick(category)
    }
  }

  renderSubcategories = () => {
    const {category} = this.props
    const {subcategories} = category
    const {openCategories, handleClick} = this.props

    return (
      <SubcategoriesContainer>
        {subcategories.map(subcategory => (
          <div key={subcategory.name}>
            <CategoryListItem
              category={subcategory}
              openCategories={openCategories}
              handleClick={handleClick}
            />
            {subcategory.products && subcategory.products.length > 0 && (
              <ProductsContainer>
                {this.renderProducts({products: subcategory.products})}
              </ProductsContainer>
            )}
          </div>
        ))}
      </SubcategoriesContainer>
    )
  }

  renderProducts = ({products}) => (
    <ProductsDisplayContainer>
      {products.map(product => (
        <ProductDisplay key={product.id} product={product} />
      ))}
    </ProductsDisplayContainer>
  )

  render() {
    const {category, openCategories} = this.props

    return (
      <>
        <CategoryListItemContainer onClick={this.handleClick}>
          <CategoryHeader>{category.name}</CategoryHeader>
          {category.subcategories && category.subcategories.length > 0 && (
            <span>
              {openCategories.includes(category) ? (
                <CategoryHeader>
                  <IoIosArrowDropup />
                </CategoryHeader>
              ) : (
                <CategoryHeader>
                  <IoIosArrowDropdown />
                </CategoryHeader>
              )}
            </span>
          )}
        </CategoryListItemContainer>
        {openCategories.includes(category) && this.renderSubcategories()}
      </>
    )
  }
}

export default CategoryListItem
