import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        height: '100em',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: '16px',
    }
}

const Dashboard = (props) => {
    const [recipes, setRecipes] = useState([]);
    const user = props.user;
    useEffect(()=> {
        if(user=={}){
            useNavigate('/')
        }else{
            axios.get('http://localhost:8000/api/recipes')
                .then(res => {
                    console.log(res);
                    var recipeData = res.data.recipes;
                    var rows = [];
                    for(var i=0;i<recipeData.length;i++){
                        rows.push(<RecipeCard key={i} recipe={recipeData[i]} user={user} size={"small"}/>);
                    }
                    console.log("rows:" + rows);
                    setRecipes(rows);
                    console.log(recipes);
                })
                .catch(err => console.log(err))
        }
    }, [])
    return (
        <>
        <Header route="dashboard"/>
        <div style={styles.pin_container}>
            {recipes}
        </div>
        </>
    )
}

export default Dashboard;