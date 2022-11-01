import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/projectsSlice';
import styled from 'styled-components';

export default function CategoryFilter() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.projects.categories)
    const activeCategory = useSelector(state => state.projects.category)

    const handleChange = (e) => {
        dispatch(setCategory(e.target.value))
    }

    return(
        <CategoryFilterStyle>
            {categories.map((category, index) => 
                <button 
                    key={index}
                    className={category !== activeCategory ? "category" : "category active"}
                    value={category}
                    onClick={handleChange}
                >
                    {category} 
                </button>
            )}
        </CategoryFilterStyle>
    );
}

const CategoryFilterStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    all: unset;
    padding: 0.4rem 1rem;
    margin: 0.4rem;
    border-radius: var(--border-radius);
    font-size: 1.2rem;
  }
  .category {
    background-color: var(--blue-2);
  color: black;
  }
  .active {
    background-color: var(--blue-1);
  color: white;
  }
  @media only screen and (max-width: 800px) {
    button{
        font-size: 1rem;
      }
`;
