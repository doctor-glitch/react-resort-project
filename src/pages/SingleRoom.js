// npm install styled components --save
import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpg'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from "../Context";
import StyledHero from "../components/StyledHero"

export default class SingleRoom extends Component {
  constructor(props) {
    super(props)
    // console.log(this.props)
    this.state = {
      slug: this.props.match.params.slug,  //for getting the url text
      defaultBcg
    }
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return <div className='error'>
        <h3>No Such Room be found....</h3>
        <Link to='/rooms' className='btn-primary'>
          Back to Room
        </Link>
      </div>
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    // const [mainImg,...defaultImg] = images;
    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              back to rooms
          </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item,index)=>{
              return <img key ={index} src={item} alt={name}/>
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>Price : Rs{price}</h6>
              <h6>Size : {size} SQFT</h6>
              <h6>
                max capacity:{
                  capacity>1? `${capacity} people`: `${capacity} person`
                }
              </h6>
              <h6>{pets?"pets allowed":"no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>
            <ul className="extras">
              {extras.map((item,index)=>{
                return <li key={index}>-{item}</li>
              })}
              
            </ul>
          </h6>
        </section>
      </>
    )
  }
}
