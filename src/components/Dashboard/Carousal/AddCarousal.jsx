import React from 'react'
import { Card, Typography, Button } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const AddCarousal = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      // slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // slidesToSlide: 1 // optional, default to 1.
    }
  };
  const jsonOutput = [{
    title: "How to deal with depression",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLBYMyLtHTyo38LKFwiLj0FfNZTKkQqBhGntgb71jwcN_CK3_ltgVoi-zzSzL7Vt03GM&usqp=CAU"
  }, {
    title: "How to deal with depression",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLBYMyLtHTyo38LKFwiLj0FfNZTKkQqBhGntgb71jwcN_CK3_ltgVoi-zzSzL7Vt03GM&usqp=CAU"
  }, {
    title: "How to deal with depression",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLBYMyLtHTyo38LKFwiLj0FfNZTKkQqBhGntgb71jwcN_CK3_ltgVoi-zzSzL7Vt03GM&usqp=CAU"
  }, {
    title: "How to deal with depression",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLBYMyLtHTyo38LKFwiLj0FfNZTKkQqBhGntgb71jwcN_CK3_ltgVoi-zzSzL7Vt03GM&usqp=CAU"
  }]

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      // means to render carousel on server-side.
      infinite={false}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
    // itemClass="carousel-item-padding-40-px"
    >
      {
        jsonOutput.map((data, i) => (
          <Card key={i} style={{
            width: '100%',
            height: '330px',
            // margin: '0px 5%'
          }}>

            <img width="100%" src={data.src} />

            <div style={{
              display: "flex",
              alignItems: 'center',
              justifyContent:"space-between"
            }}>
              <div>
                {data.title}
              </div>
              <div>
                <Button>
                  Read More
                </Button>
              </div>
            </div>
          </Card>

        ))
      }


    </Carousel>
  )
}

export default AddCarousal