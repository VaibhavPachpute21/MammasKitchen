import React from 'react'
import { random_recipe } from '../assets/recipes_data'
import '../styles/recipe.css'

const Recipies = () => {
  return (
    <div>
      <div className="container pt-md-5 mt-md-5 pb-md-5 mb-md-5 recipes">
        <div className="row gap-5">
          <div className="col-md-8">
            {random_recipe.slice(4, 10).map((recipe, index) => {
              return (<div className="container p-0">
                <div className="recipe_container">
                  <figure className=''><img src={recipe.image_url} alt={recipe.Name} width={'100%'} /></figure>
                  <p className="subheading2 mt-4">{recipe.Author}</p>
                  <h3 className="heading2 mt-3">{recipe.Name}</h3>
                  <p className="subheading1 mt-3">{recipe.Description.slice(0, 200)}...</p>
                  <button className='btn texual-btn mt-1'>read more</button>
                </div>
              </div>)
            })}
          </div>
          <div className="col-md-3">
            <div className="box">
              <img src="https://qi142.qodeinteractive.com/wp-content/uploads/2021/10/autor-sidebar.jpg" width={'100%'} alt="img" />
              <h5 className='heading4 mt-4'>Hi I’m Lesli</h5>
              <p className="subheading4 mb-5">I create simple, delicious recipes that require 10 ingredients or less, one bowl, or 30 minutes or less to prepare.</p>
              <img src="https://qi142.qodeinteractive.com/wp-content/uploads/2021/10/widget-img.jpg" width={'100%'} alt="img" />
              <h5 className="heading4 mt-5">Follow me</h5>
              <div className='followme'>
                <a href="#">INSTAGRAM</a>
                <a href="#">FACEBOOK</a>
                <a href="#">YOUTUBE</a>
                <a href="#">PINTEREST</a>
              </div>
              <div className="subscribe mt-5">
                <h5 className="heading4">Subscribe to Newsletter</h5>
                <input type="email" placeholder='your email' className='form-control' />
                <button className='btn btn-success mt-3'>SEND</button>
              </div>
              <h5 className="heading4 mt-5">Free Recipe Book</h5>
              <img src="https://qi142.qodeinteractive.com/wp-content/uploads/2021/10/sidebar-img.png" alt="img" />

              <button className='btn btn-success mt-3'>GET MY E BOOK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipies