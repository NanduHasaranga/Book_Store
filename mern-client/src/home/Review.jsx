import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// react icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic from "../assets/profile.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  I absolutely love this bookstore! The selection is incredible,
                  and I always find something new and exciting to read. The
                  website is so easy to navigate, and the recommendations are
                  spot on. This has become my go-to place for all my reading
                  needs!
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Jane S.</h5>
                <p className="text-base">
                  Marketing Manager at BrightStar Solutions
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  I love the variety of genres available here. As someone who
                  reads both fiction and tech-related non-fiction, I appreciate
                  how easy it is to find exactly what I’m looking for. The
                  site’s layout is intuitive and makes the whole shopping
                  experience a breeze.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Ethan B.</h5>
                <p className="text-base">Software Developer at TechInnovate</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  Finding unique design books is always a challenge, but this
                  site has an amazing selection. The search filters are super
                  helpful, and the customer service is fantastic. I’ve already
                  recommended it to my colleagues!
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Lily R.</h5>
                <p className="text-base">
                  Graphic Designer at CreativePulse Studios
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  I needed some specific project management books, and this site
                  had them all. The detailed book descriptions and customer
                  reviews made my decision-making process much easier. I’ll
                  definitely be back for more!
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Carlos M.</h5>
                <p className="text-base">Project Manager at BuildSmart Corp</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  This bookstore has everything I need to stay updated on the
                  latest trends in HR. The range of professional books is
                  impressive, and the delivery is always fast. I highly
                  recommend this site to all professionals!
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Nina H.</h5>
                <p className="text-base">HR Specialist at TalentEdge</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                  This bookstore has become my favorite place to find the latest
                  data science books. The selection is fantastic, and the
                  recommendations are always spot on. The site is user-friendly,
                  and my orders have always arrived quickly. I highly recommend
                  it to fellow data enthusiasts!
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Ryan G.</h5>
                <p className="text-base">Data Analyst at InsightCorp</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Review