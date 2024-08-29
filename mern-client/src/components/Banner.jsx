import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books{" "}
            <span className="text-blue-700">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Discover your next great read with our carefully curated selection
            of books. Whether you're a fan of thrilling mysteries, heartwarming
            romances, or insightful non-fiction, we have something for every
            reader. Browse through our extensive catalog, explore new releases,
            or revisit classic favorites. With our user-friendly interface,
            finding the perfect book has never been easier. Sign up today and
            enjoy exclusive member benefits, including personalized
            recommendations and special discounts. Start your literary journey
            with us!
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all eas-in duration-200">
              Search
            </button>
          </div>
        </div>

        {/* right side */}
        <div>
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  );
}

export default Banner