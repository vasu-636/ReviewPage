import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

const DisplayReviews = ({ reviews }) => {
  return (
    <div className="mt-20 border-t border-gray-200 pt-12">
      <div className="mx-auto max-w-2xl">


        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Customer reviews
        </h2>

        {reviews.length === 0 ? (
          <p className="mt-6 text-center text-gray-500">
            No reviews yet. Be the first to review this product.
          </p>
        ) : (
          <div className="mt-10 space-y-8">

            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {review.date}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className={`h-5 w-5 ${
                          review.rating >= star
                            ? 'text-yellow-400'
                            : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review text */}
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {review.review}
                </p>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  )
}

export default DisplayReviews
