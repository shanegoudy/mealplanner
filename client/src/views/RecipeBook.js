import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';

const RecipeBook = (props) => {
    // const [recipes, setRecipes] = useState([]);
    // useEffect(()=> {
    //     axios.get('http://localhost:8000/api/recipes')
    //         .then(res => {
    //             console.log(res);
    //             setRecipes(res.data);
    //             console.log(recipes);
    //         })
    //         .catch(err => console.log(err))
    // }, [])
    return (
        <>
        <Header route="recipeBook"/>
        <h1>Under development</h1>
        {/* <div>
            {recipes.map((recipe, index) => {
                return (
                    <>
                    <RecipeCard recipe={recipe} user={user}/>
                    </>
                )
            })}
        </div> */}
        <Link to="/recipes/new">
            <button>New Recipe</button>
        </Link>
        </>
    )
}

export default RecipeBook;
