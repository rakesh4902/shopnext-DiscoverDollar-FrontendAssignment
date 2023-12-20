import {Component} from 'react'
import {CategoryListContainer} from './styledComponents'

import CategoryListItem from './CategoryListItem'

class CategoryList extends Component {
  state = {
    openCategories: [],
  }

  handleClick = category => {
    this.setState(prevState => {
      const isOpen = prevState.openCategories.includes(category)
      return {
        openCategories: isOpen
          ? prevState.openCategories.filter(c => c !== category)
          : [...prevState.openCategories, category],
      }
    })
  }

  renderCategories = () => {
    const {categories} = this.props
    const {openCategories} = this.state

    return categories.map(category => (
      <CategoryListItem
        key={category.name}
        category={category}
        openCategories={openCategories}
        handleClick={this.handleClick}
      />
    ))
  }

  render() {
    const {categories} = this.props
    return (
      <CategoryListContainer>
        {this.renderCategories(categories)}
      </CategoryListContainer>
    )
  }
}

export default CategoryList
