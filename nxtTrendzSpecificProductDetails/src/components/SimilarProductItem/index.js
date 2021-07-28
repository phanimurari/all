import './index.css'

const SimilarProductItem = props => {
  const {product} = props

  console.log(product)

  return (
    <div className="similar-product">
      <img
        className="similar-image"
        src={product.image_url}
        alt="similar_product"
      />
      <h1>{product.title}</h1>
      <p>By {product.brand}</p>
      <p>Rs {product.price}</p>
      <p className="product-rating">
        {product.rating}
        <img
          src="https://assets.ccbp.in/frontend/react-js/star-img.png"
          alt="star"
        />
      </p>
    </div>
  )
}

export default SimilarProductItem

//       "id": 1,
//       "image_url":
//           "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
//       "title": "Wide Bowknot Hat",
//       "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
//       "price": 288,
//       "description":
//           "Classy Hat For Multipurpose Use. Soft straw material, convenient for travel. Finished with light and airy woven material, durable and comfortable to wear. One Size Fits All Age Group Above 14 Years. Stay protected from the sun while sporting one of the hottest trends this season. Perfect for you to wear at the beach, pool, party, etc.",
//       "brand": "MAJIK",
//       "total_reviews": 245,
//       "rating": 4.6,
//       "availability": "In Stock",
//   },
