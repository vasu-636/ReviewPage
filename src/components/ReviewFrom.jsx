import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'

const ReviewFrom = ({ onAddReview }) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [name, setName] = useState('')
  const [review, setReview] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (rating === 0) {
      alert('Please select a rating')
      return
    }

    onAddReview({
      id: Date.now(),
      name,
      review,
      rating,
      date: new Date().toLocaleDateString(),
    })

    setRating(0)
    setName('')
    setReview('')
  }

  return (
    <div className="mt-20 border-t border-gray-200 pt-12">
      <div className="mx-auto max-w-2xl text-center">

        <h2 className="text-2xl font-bold text-gray-900">
          Write a customer review
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Share your experience with this product
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col items-center space-y-6"
        >

          {/* Rating */}
          <div className="flex flex-col items-center">
            <label className="mb-2 text-sm font-medium text-gray-900">
              Overall rating
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`h-6 w-6 cursor-pointer ${
                    (hover || rating) >= star
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                />
              ))}
            </div>
          </div>

          {/* Name */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-900 text-left">
              Your name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-md border px-3 py-2"
            />
          </div>

          {/* Review */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-900 text-left">
              Your review
            </label>
            <textarea
              rows={4}
              required
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="mt-2 w-full rounded-md border px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-8 py-2 text-white"
          >
            Submit review
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReviewFrom
