import React from 'react'
import {ProductList} from './ProductList'
import axios from 'axios'

export class ShowMenShirts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menShirt: []
        }
   }
    componentDidMount(){
        axios.get(`http://localhost:3000/products/1`)
        .then(res => {
            this.setState({menShirt: res.data});
        })
        .catch( (error) => {
            console.log(error);
        });
    }
    render(){
        return(
            <ProductList category="Men's Shirts"
        products={this.state.menShirt}/>
            
        );
    }
}

export class ShowMenShoes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menShoe: []
        }
   }
    componentDidMount(){
        axios.get(`http://localhost:3000/products/2`)
        .then(res => {
            console.log(res.data);
            this.setState({menShoe: res.data});
        })
        .catch( (error) => {
            console.log(error);
        });
    }
    render(){
       
        return(
            <ProductList category="Men's Shoes"
                products={this.state.menShoe}/>
        );
    }
}

export class ShowMenJacket extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menJacket: []
        }
   }
    componentDidMount(){
        axios.get(`http://localhost:3000/products/4`)
        .then(res => {
            this.setState({menJacket: res.data});
        })
        .catch( (error) => {
            console.log(error);
        });
    }
    render(){
        return(
            <ProductList category="Men's Jacket"
            products={this.state.menJacket}/>
            );
    }
}

export class ShowWomenShoes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            womenShoe: []
        }
   }
    componentDidMount(){
        axios.get(`http://localhost:3000/products/3`)
        .then(res => {
            this.setState({womenShoe: res.data});
        })
        .catch( (error) => {
            console.log(error);
        });
    }
    render(){
        return(
            <ProductList category="Women's Shoe"
            products={this.state.womenShoe}/>
            );
    }
}
