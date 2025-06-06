import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image_container">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="image">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
          </svg>
        </div>
        <div className="title">
          <span>New brand name</span>
        </div>
        <div className="size">
          <span>Size</span>
          <ul className="list-size">
            <li className="item-list"><button className="item-list-button">37</button></li>
            <li className="item-list"><button className="item-list-button">38</button></li>
            <li className="item-list"><button className="item-list-button">39</button></li>
            <li className="item-list"><button className="item-list-button">40</button></li>
            <li className="item-list"><button className="item-list-button">41</button></li>
          </ul>
        </div>
        <div className="action">
          <div className="price">
            <span>$299</span>
          </div>
          <button className="cart-button">
            <svg className="cart-icon" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    --bg-card:rgb(255, 255, 255);
    --primary:rgb(50, 90, 5);
    --primary-800:rgba(105, 107, 134, 0.42);
    --primary-shadow:rgb(5, 6, 77);
    --light: #d9d9d9;
    --zinc-800:rgb(50, 90, 5);
    --bg-linear: linear-gradient(0deg, var(--primary) 50%, var(--light) 125%);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.9rem;
    width: 18rem;
    height: 23rem;
    background-color: var(--bg-card);
    border-radius: 1rem;
  }

  .image_container {
    overflow: hidden;
    cursor: pointer;

    position: relative;
    z-index: 5;

    width: 100%;
    height: 8rem;
    background-color: var(--primary-800);

    border-radius: 0.5rem;
  }

  .image_container .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 3rem;
    fill: var(--light);
  }

  .title {
    overflow: clip;

    width: 100%;

    font-size: 1rem;
    font-weight: 600;
    color: var(--light);
    text-transform: capitalize;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }

  .size {
    font-size: 0.75rem;
    color: var(--light);
  }

  .list-size {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.25rem;
  }

  .list-size .item-list {
    list-style: none;
  }

  .list-size .item-list-button {
    cursor: pointer;

    padding: 0.5rem;
    background-color: var(--zinc-800);

    font-size: 0.75rem;
    color: var(--light);

    border: 2px solid var(--zinc-800);
    border-radius: 0.25rem;

    transition: all 0.3s ease-in-out;
  }

  .item-list-button:hover {
    border: 2px solid var(--light);
  }
  .item-list-button:focus {
    background-color: var(--primary);

    border: 2px solid var(--primary-shadow);

    box-shadow: inset 0px 1px 4px var(--primary-shadow);
  }

  .action {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--light);
  }

  .cart-button {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;
    width: 100%;
    background-image: var(--bg-linear);

    font-size: 0.75rem;
    font-weight: 500;
    color: var(--light);
    text-wrap: nowrap;

    border: 2px solid hsla(262, 83%, 58%, 0.5);
    border-radius: 0.5rem;
    box-shadow: inset 0 0 0.25rem 1px var(--light);
  }

  .cart-button .cart-icon {
    width: 1rem;
  }`;

export default Card;
