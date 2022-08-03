import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './home.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper";
const Home = () => {
 
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='myslide slide1'>
         <h1 className="col-md-6" style={{margin:"150px",color:"black",fontFamily:"monospace"}}>Travel Guide</h1>
          </SwiperSlide>
        <SwiperSlide className='myslide slide2'>Slide 2</SwiperSlide>
        <SwiperSlide className='myslide slide3'>Slide 3</SwiperSlide>
        <SwiperSlide className='myslide slide4'>Slide 4</SwiperSlide>
        <SwiperSlide className='myslide slide5'>Slide 5</SwiperSlide>
      </Swiper>
      <section className="mb-5 text-center text-lg-start ms-5 me-5">
      <h2 class="fw-bold mb-5 text-center mt-4">Features</h2>
      <div class="row gx-lg-5">
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0"> 
                <div> 
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded-4 mb-4 ripple-surface-light" data-mdb-ripple-color="light"> 
                    <img src="https://www.lifeberrys.com/img/article/exploring-places-like-1-1592638524-lb.jpg" className="w-100" style={{height:"250px"}} alt="place" aria-controls="#picker-editor" draggable="false" />
                  </div> 
                  <h5 className="fw-bold">Browse Places</h5> 
                  <div className="mb-3 text-danger small"> 
                    <i className="fas fa-plane-departure me-2" aria-controls="#picker-editor"></i>
                    <span>Travel</span> 
                  </div> 
                  <p className="text-muted">One of the primary reasons why you need to research your destination before traveling is to familiarize yourself with the activities available in the place you are interested to go. This will help you plan your itinerary accordingly. Take the time to explore online sources.
                  </p> 
                </div> 
              </div>
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0"> 
                <div> 
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded-4 mb-4 ripple-surface-light" data-mdb-ripple-color="light"> 
                    <img src="https://pipandthecity.com/wp-content/uploads/2019/05/bigstock-170180348-800x500.jpg" className="w-100" style={{height:"250px"}} alt="place" aria-controls="#picker-editor" draggable="false" />
                  </div> 
                  <h5 className="fw-bold">Make your own Itinerary</h5> 
                  <div className="mb-3 text-danger small"> 
                  <i class="fas fa-clock me-2" aria-controls="#picker-editor"></i>
                    <span>Save Time</span> 
                  </div> 
                  <p className="text-muted"> A good itinerary allows clients to maximise the time they have away. By ensuring each small detail is included in the document, there will be no time wasted travelling between places, activities, or accommodations. This will this show a realistic view of how much can fit into each day and manage expectations. 
                  </p> 
                </div> 
              </div>
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0"> 
                <div> 
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded-4 mb-4 ripple-surface-light" data-mdb-ripple-color="light"> 
                    <img src="https://cdn.travelsafe-abroad.com/wp-content/uploads/how-to-plan-your-travel-budget.png" className="w-100" style={{height:"250px"}} alt="place" aria-controls="#picker-editor" draggable="false" />
                  </div> 
                  <h5 className="fw-bold">Track Budget</h5> 
                  <div className="mb-3 text-danger small"> 
                  <i class="fas fa-money-bill me-2" aria-controls="#picker-editor"></i>
                    <span>Cost Effective</span> 
                  </div> 
                  <p className="text-muted"> By mapping out each element of a trip, your clients will be able to estimate how much the trip will cost them in total. By knowing this, clients can start saving early on which will allow them to do everything they had hoped they would be able to. This will prevent clients running out of money too early on in their trip and having to scrimp and save for the rest!
                  </p> 
                </div> 
              </div>
              
      </div>
      </section>
      <hr size="7" width="100%" color="black"></hr>
      <section className="mb-10 text-center text-lg-start ms-5 me-5">
      <h2 className="fw-bold mb-5 text-center mt-4">Tour to our Site</h2>
      <div className="row gx-lg-5 mb-5 align-items-center"> 
            <div class="col-md-6 mb-4 mb-md-0"> 
              <img src="https://mdbootstrap.com/img/new/standard/city/028.jpg" className="w-100 shadow-4-strong rounded-4 mb-4" alt="" aria-controls="#picker-editor" draggable="false" /> 
            </div> 
            <div className="col-md-6 mb-4 mb-md-0"> 
              <h3 className="fw-bold">Plan</h3> <div className="mb-2 text-danger small"> 
                <i className="fas fa-map-marker-alt me-2" aria-controls="#picker-editor"></i>
                <span>Add</span> 
              </div> 
              <p className="text-muted">Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate.
                 Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.
                </p> 
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia? 
                  Ratione unde magni omnis quaerat blanditiis cumque dolore placeat rem dignissimos?
                </p> 
                <a className="btn btn-primary" href="/" role="button" aria-controls="#picker-editor" draggable="false">Start Planning🔍</a> 
              </div> 
            </div>
            <div className="row gx-lg-5 mb-5 flex-lg-row-reverse align-items-center"> 
              <div className="col-md-6 mb-4 mb-md-0"> 
                <img src="https://mdbootstrap.com/img/new/standard/city/033.jpg" className="w-100 shadow-4-strong rounded-4 mb-4" alt="" aria-controls="#picker-editor" draggable="false" /> 
              </div> 
              <div className="col-md-6 mb-4 mb-md-0"> 
                <h3 className="fw-bold">Itinerary</h3> 
                <div className="mb-2 text-primary small"> 
                  <i className="fas fa-map-marker-alt me-2" aria-controls="#picker-editor"></i>
                  <span>Plan</span> 
                </div> 
                <p className="text-muted">Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum enim massa in ante. 
                  Curabitur in justo at lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus vel sagittis nec, placerat vel justo. 
                  Duis faucibus sapien eget tortor finibus, a eleifend lectus dictum. Cras tempor convallis magna id rhoncus. Suspendisse potenti. Nam mattis faucibus imperdiet. Proin tempor lorem at neque tempus aliquet. 
                  Phasellus at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed iaculis est vehicula ut.
                </p> 
                <a className="btn btn-primary" href="/itinerary" role="button" aria-controls="#picker-editor" draggable="false">Make your own📃</a> 
              </div> 
            </div> 
            <div className="row gx-lg-5 mb-5 align-items-center"> 
              <div className="col-md-6 mb-4 mb-md-0"> 
                <img src="https://mdbootstrap.com/img/new/standard/city/079.jpg" className="w-100 shadow-4-strong rounded-4 mb-4" alt="" aria-controls="#picker-editor" draggable="false" /> 
              </div> 
              <div className="col-md-6 mb-4 mb-md-0"> 
                <h3 className="fw-bold">Add Places</h3> 
                <div className="mb-2 text-warning small"> 
                  <i className="fas fa-map-marker-alt me-2" aria-controls="#picker-editor">

                  </i><span>Add</span> 
                </div> 
                <p class="text-muted">
                  Sed sollicitudin purus sed nulla dignissim ullamcorper. 
                  Aenean tincidunt vulputate libero, nec imperdiet sapien pulvinar id. 
                  Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat augue ornare. 
                  Proin ac dui vel lectus eleifend vestibulum et lobortis risus. 
                    Nullam in commodo sapien. Curabitur ut erat congue sem finibus eleifend egestas eu metus. Sed ut dolor id magna rutrum ultrices ut eget libero. 
                    Duis vel porttitor odio. Ut pulvinar sed turpis ornare tincidunt. 
                    Donec luctus, mi euismod dignissim malesuada, lacus lorem commodo leo, tristique blandit ante mi id metus. Integer et vehicula leo, vitae interdum lectus. Praesent nulla purus, commodo at euismod nec, blandit ultrices erat. Aliquam eros ipsum, interdum et mattis vitae, faucibus vitae justo. Nulla condimentum hendrerit leo, in feugiat ipsum condimentum ac. Maecenas sed blandit dolor.
                  </p> 
                  <a className="btn btn-primary" href="/addplace" role="button" aria-controls="#picker-editor" draggable="True">Add a place🤗</a>
                </div> 
              </div> 
      </section>
    </div>
  )
}

export default Home