import React from 'react';
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";

// function will return the unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  //get unique types
  let types = getUnique(rooms, 'type');
  // add "all" to list
  types = ['all', ...types];
  // map to jsx
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

  //get unique guest count
  let people = getUnique(rooms, 'capacity');
  // map to jsx
  people = people.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

  return (
    <section className='filtercontainer'>
      <Title title="search rooms" />
      <form className="filter-form">
        {/* room types */}
        <div className="form-group">
          <label htmlFor="type">
            roomtype
          </label>
          <select name="type" id="type" value={type} className='form-control' onChange={handleChange}>{types}</select>
        </div>
        {/* end room types */}

        {/*guest count */}
        <div className="form-group">
          <label htmlFor="capacity">
            Guests
          </label>
          <select name="capacity" id="capacity" value={capacity} className='form-control' onChange={handleChange}>{people}</select>
        </div>
        {/*end guest count */}

        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">
            Room Price Rs{price}
          </label>
          <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="range" />
        </div>
        {/*end room price */}

        {/* size */}
        
        {/* end size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />

          </div>
        </div>
        {/* extras */}
        <div className="form-group">

          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
            <label htmlFor="breakfast">free breakfast</label>
          </div>

          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
            <label htmlFor="pets">pets</label>
          </div>

        </div>
        {/*end extras */}

      </form>
    </section>
  )
}
