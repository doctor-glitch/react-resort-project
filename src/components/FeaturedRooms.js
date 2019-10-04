import React, { Component } from 'react'
import { RoomContext } from "../Context";
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

export default class FeaturedRooms extends Component {
  static contextType = RoomContext  // refer from context documentation in React
  render() {
    let { loading, featuredRooms: rooms } = this.context;

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms = rooms.map(
            room => {
              return <Room key={room.id} room={room} />;
            }
            )}
        </div>
      </section>
    )
  }
}
