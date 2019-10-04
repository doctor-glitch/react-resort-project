import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title'

//for listing out all services
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free mocktale",
        info: ' Our diabetes-friendly mocktail recipes use a variety of ingredients including fresh fruit, club soda, and sugar substitutes. Enjoy our favorite skinny cocktails - alcoholic and nonalcoholic - that everyone will love. ',
      },
      {
        icon: <FaBeer />,
        title: "Free Beer",
        info: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
      },
      {
        icon: <FaHiking />,
        title: "Free hiking",
        info: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Travel",
        info: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
      },
    ]
  }
  render() {
    return (
      <section className='services'>
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className="service">
              <span>
                {item.icon}
              </span>
              <h6>
                {item.title}
              </h6>
              <p>
                {item.info}
              </p>
            </article>
          })}
        </div>
      </section>
    )
  }
}
