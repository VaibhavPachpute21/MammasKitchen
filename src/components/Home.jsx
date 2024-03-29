import React from 'react'
import '../styles/home.css'
import { random_recipe } from '../data/recipes_data';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='container-fluid header-section'>
                <div className="row p-0">
                    <div className="col-md-6 p-0">
                        <div className="static">
                            <div className="box">
                                <h2 className="heading1">Chrismas Special Meals</h2>
                                <div className="content">
                                    <p>GLUTEN FREE / OCTOBER 6</p>
                                    <h3>10 easy recipes that you can try!</h3>
                                    <Link className="btn btn-info" to={'/chrismas-recipies'}>READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-0 border-left">
                        <div>
                            {random_recipe.slice(0, 4).map((recipe, index) => {
                                return (<div className="box" key={index.toString()}>
                                    <div className='recipe-card'>
                                        <figure>
                                            <img src={recipe.image_url} alt={recipe.Name} height={index == 1 || index == 3 ? '350px' : '250px'} width={'100%'} />
                                        </figure>
                                        <p className='subheading2'>{recipe.Author}</p>
                                        <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }} className='heading3 '>{recipe.Name}</Link>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>
                    <div className="col-md-3 p-0 border-left" >
                        <div className="">
                            {random_recipe.slice(4, 8).map((recipe, index) => {
                                return (<div className="box" key={index.toString()}>
                                    <div className='recipe-card'>
                                        <figure>
                                            <img src={recipe.image_url} alt={recipe.Name} height={index == 0 || index == 2 ? '350px' : '250px'} width={'100%'} />
                                        </figure>
                                        <p className='subheading2'>{recipe.Author}</p>
                                        <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }} className='heading3'>{recipe.Name}</Link>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid section2" style={{ backgroundColor: '#FCDDC8', }}>
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="box">
                            <div className="content">
                                <h3 className='heading2'>Hello, we're Nataly and Jane.</h3>
                                <p className='subheading1'>Eum altera facilisis an, unum novum appellantur vis ut, no suas utroque appellantur his. Vim error legere cu, ut amet antiopam mei. Per te utamur erroribus molestiae. Mei virtute complectitur ut, no autem semper ius, movet adipisci his.</p>
                                <Link to={'/about'} className='btn btn-success'>LEARN MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 border-left p-0">
                        <div className="box">
                            <div>
                                <img src={'/assets/home-img-1.jpg'} alt="IMG" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid section3">
                <div className="row">
                    {random_recipe.slice(8, 14).map((recipe, index) => {
                        return (<div className="col-md-6 border-left topBorder p-0" id={index.toString()}>
                            <div className="box">
                                <div className="row">
                                    <div className="col-md-6"><figure><img src={recipe.image_url} alt={recipe.Name} /></figure></div>
                                    <div className="col-md-6">
                                        <div className="content">
                                            <p className='subheading2 mb-1'>{recipe.Author}</p>
                                            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }} className='heading3'>{recipe.Name}</Link>
                                            <p className='subheading1 mt-1'>{recipe.Description.slice(0, 200)}...</p>
                                            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }} className='btn texual-btn'>READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>

            <div className="container-fluid section4 topBorder">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="box" style={{ backgroundImage: '' }}>
                            <div className="content">
                                <h2 className="heading1">Free <br />Recipe <br />Book</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 border-left p-0" style={{ backgroundColor: '#E4F1EE' }}>
                        <div className="box">
                            <div className="info">
                                <h3 className='heading2'>Check out my newest vegan recipes books</h3>
                                <p className='subheading1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim.</p>
                                <div className="row">
                                    <div className="col-md-4 col-4"><img src="/assets/book-1.png" alt="img" width={'100%'} /></div>
                                    <div className="col-md-4 col-4"><img src="/assets/book-2.png" alt="img" width={'100%'} /></div>
                                </div>

                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">GET MY E BOOK</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid section2 topBorder" style={{ backgroundColor: '#D9E5D6', }}>
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="box">
                            <div className="content">
                                <h3 className='heading2'>Get the Healthy <br /> Meals App.</h3>
                                <p className='subheading1'>Eum altera facilisis an, unum novum appellantur vis ut, no suas utroque appellantur his. Vim error legere cu, ut amet antiopam mei. Per te utamur erroribus molestiae. Mei virtute complectitur ut, no autem semper ius, movet adipisci his.</p>
                                <button className='btn btn-success'>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 border-left p-0">
                        <div className="box pb-0">
                            <div>
                                <img src="/assets/home-img-3.jpg" alt="IMG" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="topBorder p-0">
                <marquee behavior="scroll">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>gluten free </span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>vegan</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>vegeterian</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>naturally sweetened</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>

                        <span>dairy-free</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>desert</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>gluten free </span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>vegan</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>healthy</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>vegeterian</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>gluten free </span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>vegan</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>vegeterian</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>naturally sweetened</span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>

                        <span>dairy-free</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>desert</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>gluten free </span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>vegan</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>healthy</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={{ fill: '#FF6E41' }} >
                            <path d="M30,50c0-15.9-4.1-20-20-20c15.9,0,20-4.1,20-20c0,15.9,4.1,20,20,20C34.1,30,30,34.1,30,50z"></path>
                        </svg>
                        <span>vegeterian</span>
                    </div>
                </marquee>
            </div>

            <div className="container-fluid  topBorder mt-0 section5">
                <div className="row">
                    {random_recipe.slice(14, 17).map((recipe, index) => {
                        return (
                            <div className="col-md-4 border-left p-0" id={index.toString()}>
                                <div className="box">
                                    <figure><img src={recipe.image_url} alt={recipe.Name} /></figure>

                                    <p className='subheading2 mb-1'>{recipe.Author}</p>
                                    <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }} className='heading3'>{recipe.Name}</Link>
                                    <p className='subheading1 mt-1'>{recipe.Description.slice(0, 200)}...</p>
                                </div>
                            </div>)
                    })}
                </div>
            </div>

            <div className="container-fluid topBorder section6">
                <div className="box">
                    <div className="banner d-md-flex justify-content-center">
                        <h3 className='align-self-center'>Green kitchen</h3>
                    </div>
                </div>
            </div>

            <div className="container-fluid topBorder section7">
                <div className="row">
                    {["/assets/gallery-1.jpg", "/assets/gallery-2.jpg", "/assets/gallery-3.jpg", "/assets/gallery-4.jpg", "/assets/gallery-5.jpg", "/assets/gallery-6.jpg", "/assets/gallery-7.jpg", "/assets/gallery-8.jpg", "/assets/gallery-9.jpg", "/assets/gallery-10.jpg", "/assets/gallery-11.jpg", "/assets/gallery-12.jpg"].map((img, index) => {
                        return (<>
                            <div className="col-md-2 col-6 p-0">
                                <div className="box">
                                    <img src={img} alt={index} width={"100%"} /></div>
                            </div>
                        </>)
                    })}

                </div>
            </div>

        </>

    )
}

export default Home


