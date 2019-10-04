import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaMugHot } from "react-icons/fa";
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
        icon: <FaMugHot />,
        title: "Free Coffee",
        info: 'We believe that coffee is more than just a drink: It’s a culture, an economy, an art, a science — and a passion. Whether you\'re new to the brew or an espresso expert, there\'s always more to learn about this beloved beverage ',
      },
      {
        icon: <FaHiking />,
        title: "Free hiking",
        info: 'Hiking, walking in nature as a recreational activity. Especially among those with sedentary occupations, hiking is a natural exercise that promotes physical fitness, is economical and convenient, and requires no special equipment.'
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Travel",
        info: 'These days there are many ways to travel the world for free, or at least ultra cheap. Some you’ll know about, some you won’t, lets take a look at working your way around the world and more, for free or super budget. ',
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
