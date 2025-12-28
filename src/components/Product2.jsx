import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import DisplayReviews from './DisplayReviews'
import ReviewFrom from './ReviewFrom'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    { src: '/product-page-02-secondary-product-shot.jpg', alt: 'Product image 1' },
    { src: '/product-page-02-tertiary-product-shot-01.jpg', alt: 'Product image 2' },
    { src: '/product-page-02-tertiary-product-shot-02.jpg', alt: 'Product image 3' },
    { src: '/product-page-02-featured-product-shot.jpg', alt: 'Product image 4' },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees.',
}

const reviewsMeta = { average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Product2 = () => {
  /* ✅ STATE FOR REVIEWS */
  const [reviews, setReviews] = useState([])

  /* ✅ ADD REVIEW HANDLER */
  const addReview = (newReview) => {
    setReviews([newReview, ...reviews])
  }

  return (
    <div className="bg-white">
      <div className="pt-6">

        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-7xl items-center space-x-2 px-4 lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id} className="flex items-center">
                <span className="mr-2 text-sm font-medium text-gray-900">
                  {breadcrumb.name}
                </span>
                <span className="text-gray-300">/</span>
              </li>
            ))}
            <li className="text-sm text-gray-500">{product.name}</li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-7xl lg:grid lg:grid-cols-3 lg:gap-8 lg:px-8">
          <img src={product.images[0].src} className="row-span-2 aspect-[3/4] size-full rounded-lg object-cover max-lg:hidden" />
          <img src={product.images[1].src} className="col-start-2 row-start-1 aspect-[3/2] size-full rounded-lg object-cover max-lg:hidden" />
          <img src={product.images[2].src} className="col-start-2 row-start-2 aspect-[3/2] size-full rounded-lg object-cover max-lg:hidden" />
          <img src={product.images[3].src} className="col-start-3 row-span-2 aspect-[4/5] size-full rounded-lg object-cover" />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">

          {/* Left */}
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-6 text-gray-700">{product.description}</p>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-gray-600">
                {product.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Details</h3>
              <p className="mt-4 text-sm text-gray-600">{product.details}</p>
            </div>
          </div>

          {/* Right */}
          <div className="mt-10 lg:mt-0 lg:pl-8">
            <p className="text-3xl font-bold text-gray-900">{product.price}</p>

            <div className="mt-4 flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    reviewsMeta.average > rating ? 'text-gray-900' : 'text-gray-200',
                    'h-5 w-5'
                  )}
                />
              ))}
              <span className="ml-3 text-sm text-indigo-600">
                {reviewsMeta.totalCount} reviews
              </span>
            </div>

            <button className="mt-10 w-full rounded-md bg-indigo-600 px-8 py-3 text-white hover:bg-indigo-700">
              Add to bag
            </button>
          </div>
        </div>
      </div>

      {/*  REVIEW FORM */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ReviewFrom onAddReview={addReview} />
      </div>

      {/*  DISPLAY REVIEWS */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <DisplayReviews reviews={reviews} />
      </div>
    </div>
  )
}

export default Product2
