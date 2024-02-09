import React from 'react'
import { random_recipe } from '../data/recipes_data'
import '../styles/recipe.css'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Recipies = () => {
  return (
    <div>
      <div className="container pt-md-5 pt-4 mt-md-5 pb-md-5 pb-5 recipes">
        <div className="row gap-5 pb-md-5 pb-5">
          <div className="col-md-8">
            {random_recipe.slice(4, 10).map((recipe, index) => {
              return (<div className="container p-0" id={index.toString()}>
                <div className="recipe_container pb-5">
                  <figure className=''><img src={recipe.image_url} alt={recipe.Name} width={'100%'} /></figure>
                  <p className="subheading2 mt-4">{recipe.Author}</p>
                  <h3 className="heading2 mt-3">{recipe.Name}</h3>
                  <p className="subheading1 mt-3">{recipe.Description.slice(0, 200)}...</p>
                  <Link to={`/recipe/${recipe.id}`} className='btn texual-btn mt-1'>read more</Link>
                </div>
              </div>)
            })}
          </div>
          <div className="col-md-3">
            <Sidebar/>
          </div>
        </div>
        <div className="row">
          <div className="container-fluid  topBorder mt-0 pt-3 section5">
            <div className="row">
              {random_recipe.slice(14, 17).map((recipe, index) => {
                return (
                  <div className="col-md-4 p-0" id={index.toString()}>
                    <div className="box">
                      <figure><img src={recipe.image_url} alt={recipe.Name} /></figure>
                      <p className='subheading2 mb-1'>{recipe.Author}</p>
                      <h3 className='heading3'>{recipe.Name}</h3>
                      <p className='subheading1 mt-1'>{recipe.Description.slice(0, 200)}...</p>
                      <Link to={`/recipe/${recipe.id}`} className='btn texual-btn mt-1'>read more</Link>
                    </div>
                  </div>)
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipies