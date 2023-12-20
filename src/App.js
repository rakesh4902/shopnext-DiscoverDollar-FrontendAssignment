import CategoryList from './components/CategoryList/CategoryList'
import Header from './components/CategoryList/Header'
import {AppContainer, SearchBar, SearchImgCont} from './styledComponents'

import './App.css'

const categoriesData = [
  {
    name: 'Men',
    subcategories: [
      {
        name: 'Ethnic Wear',
        products: [
          {
            id: 1,
            name: 'Kurta',
            price: ' 2,995',
            image:
              'https://5.imimg.com/data5/AZ/VV/UM/SELLER-7424477/mans-ethnic-wear-1000x1000.jpeg',
          },
          {
            id: 2,
            name: 'Sherwani',
            price: ' 4,000',
            image:
              'https://shreeman.in/cdn/shop/products/21-A.jpg?v=1671794034&width=800',
          },
          {
            id: 3,
            name: 'Pathani Suit',
            price: ' 6,500',
            image:
              'https://www.parivarceremony.com/media/catalog/product/cache/bd50db5b0865a3e949e91ec7dbded0bf/p/1/p1039mw53.jpg',
          },
          {
            id: 4,
            name: 'Dhoti',
            price: ' 895',
            image:
              'https://ramrajcotton.in/cdn/shop/products/4_5412f276-ee13-465e-b7ea-03943d9e0e5c.jpg?v=1666326811&width=900',
          },
          {
            id: 5,
            name: 'Jodhpuri Suit',
            price: ' 6,000',
            image:
              'https://5.imimg.com/data5/SELLER/Default/2022/1/AN/JN/HY/23689159/whatsapp-image-2022-01-05-at-12-48-47-pm-500x500.jpeg',
          },
        ],
      },
      {
        name: 'Casual Wear',
        products: [
          {
            id: 6,
            name: 'T-Shirt',
            price: 19.99,
            image:
              'https://thehouseofrare.com/cdn/shop/files/TIMO-BLACK-42.jpg?v=1690893659',
          },
          {
            id: 7,
            name: 'Jeans',
            price: 39.99,
            image:
              'https://imagescdn.planetfashion.in/img/app/product/7/747319-8429592.jpg?auto=format&w=494.40000000000003',
          },
          {
            id: 8,
            name: 'Hoodie',
            price: 29.99,
            image:
              'https://5.imimg.com/data5/SELLER/Default/2022/11/ND/NW/PQ/163915576/men-s-stylish-hoodies-500x500.jpeg',
          },
          {
            id: 9,
            name: 'Shorts',
            price: 24.99,
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68sYg9ZYSKzcsx8gC5U7xGRgL--EW71_k3A&usqp=CAU',
          },
          {
            id: 10,
            name: 'Casual Shirt',
            price: 34.99,
            image:
              'https://5.imimg.com/data5/SELLER/Default/2023/1/SX/AT/QF/102058255/shimak-casual-shirts-printed-full-sleeve-500x500.jpg',
          },
        ],
      },
    ],
  },
  {
    name: 'Women',
    subcategories: [
      {
        name: 'Dresses',
        products: [
          {
            id: 16,
            name: 'Summer Dress',
            price: 29.99,
            image:
              'https://image.made-in-china.com/202f0j00PydTJbrzLlqv/Women-Summer-Fashion-Elastic-Beach-Dress-Floral-Painted-Causal-Dress-Women-s-Suit-2-Pieces-Dresses-Set.jpg',
          },
          {
            id: 17,
            name: 'Evening Gown',
            price: 99.99,
            image:
              'https://i.pinimg.com/736x/a1/e3/5b/a1e35ba3b93b1a88f32a4381569adfbc.jpg',
          },
          {
            id: 18,
            name: 'Casual Maxi',
            price: 39.99,
            image:
              'https://5.imimg.com/data5/SELLER/Default/2021/1/WU/SH/UE/121830654/black-500x500.jpg',
          },
          {
            id: 19,
            name: 'Cocktail Dress',
            price: 49.99,
            image:
              'https://i.etsystatic.com/7799304/r/il/a945af/1501300791/il_570xN.1501300791_88yl.jpg',
          },
          {
            id: 20,
            name: 'Shift Dress',
            price: 34.99,
            image:
              'https://www.intermod.in/cdn/shop/products/B_black_dress-6L_1000x.jpg?v=1575539085',
          },
        ],
      },
      {
        name: 'Footwear',
        products: [
          {
            id: 21,
            name: 'High Heels',
            price: 59.99,
            image:
              'https://imgeng.jagran.com/images/2023/may/heels1685360123587.jpg',
          },
          {
            id: 22,
            name: 'Flats',
            price: 24.99,
            image:
              'https://i.pinimg.com/736x/f9/b2/32/f9b232889a191089fc627265320351a7.jpg',
          },
          {
            id: 23,
            name: 'Sneakers',
            price: 34.99,
            image:
              'https://assets.ajio.com/medias/sys_master/root/20230612/dbqT/648722dd42f9e729d737e986/-473Wx593H-466263684-grey-MODEL.jpg',
          },
          {
            id: 24,
            name: 'Boots',
            price: 79.99,
            image:
              'https://thursdayboots.com/cdn/shop/products/1024x1024-Women-Dynasty-Black-021022-1.jpg?v=1644877666',
          },
          {
            id: 25,
            name: 'Sandals',
            price: 19.99,
            image:
              'https://www.fizzygoblet.com/cdn/shop/products/Theofficedomestic1_1024x1024.jpg?v=1676289863',
          },
        ],
      },
    ],
  },
  {
    name: 'Electronics',
    subcategories: [
      {
        name: 'Smartphones',
        products: [
          {
            id: 26,
            name: 'iPhone 13',
            price: 999.99,
            image:
              'https://rukminim1.flixcart.com/image/850/1000/ktketu80/mobile/a/e/g/iphone-13-pro-mlvw3hn-a-apple-original-imag6vpcvspnzyfy.jpeg?q=90',
          },
          {
            id: 27,
            name: 'Samsung Galaxy S21',
            price: 899.99,
            image:
              'https://image-us.samsung.com/us/smartphones/galaxy-s21/business/products/mobile/phones/gallery/lockups/O1-S21_Gray_1200x1200.jpg?$product-details-jpg$',
          },
          {
            id: 28,
            name: 'Google Pixel 6',
            price: 799.99,
            image:
              'https://5.imimg.com/data5/SELLER/Default/2022/3/ZD/ZP/XD/38269391/google-pixel-6-5g-kinda-coral-8gb-ram-128gb-storage--1000x1000.jpg',
          },
          {
            id: 29,
            name: 'OnePlus 9',
            price: 699.99,
            image:
              'https://cdn.webshopapp.com/shops/59755/files/367809125/890x820x2/proguard-oneplus-9-pro-case-ultra-slim-grip-pink.jpg',
          },
          {
            id: 30,
            name: 'Xiaomi Mi 11',
            price: 599.99,
            image:
              'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51MyBbilJfS.jpg',
          },
        ],
      },
      {
        name: 'Laptops',
        products: [
          {
            id: 31,
            name: 'MacBook Pro',
            price: 1499.99,
            image:
              'https://rentocart.com/wp-content/uploads/2023/07/D_Q_NP_621087-MLA52537211561_112022-O.webp',
          },
          {
            id: 32,
            name: 'Dell XPS 13',
            price: 1199.99,
            image:
              'https://rukminim2.flixcart.com/image/850/1000/jk01bww0/computer/x/5/z/dell-na-thin-and-light-laptop-original-imaf7fy97d4j2z9a.jpeg?q=20',
          },
          {
            id: 33,
            name: 'HP Spectre x360',
            price: 999.99,
            image:
              'https://static.toiimg.com/thumb/msid-91687106,width-1280,height-720,resizemode-4/91687106.jpg',
          },
          {
            id: 34,
            name: 'Lenovo ThinkPad X1 Carbon',
            price: 1299.99,
            image:
              'https://p2-ofp.static.pub/fes/cms/2022/12/13/pelsaisn0w09cjphrroqyjttm4rvnk651670.png',
          },
          {
            id: 35,
            name: 'Asus ROG Zephyrus G14',
            price: 1499.99,
            image:
              'https://images-cdn.ubuy.co.in/633fed28bb449e38d33c00ff-2022-asus-rog-zephyrus-g14-14-34.jpg',
          },
        ],
      },
    ],
  },
]

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <SearchImgCont>
          <img
            src="https://www.neelnetworks.com/blog/wp-content/uploads/2020/10/E-Commerce-Website.jpg"
            alt="ecommerce"
            className="ecommerce-image"
          />
          <SearchBar type="text" placeholder="Search within categories..." />
        </SearchImgCont>
        <CategoryList categories={categoriesData} />
      </AppContainer>
    </>
  )
}

export default App
