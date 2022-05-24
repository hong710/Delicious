import airFryer from './assets/filterList/airFryer.jpg';
import beef from './assets/filterList/beef.jpg';
import chicken from './assets/filterList/chicken.webp';
import grilling from './assets/filterList/grilling.jpg';
import instantPot from './assets/filterList/instantPot.webp';
import sideDish from './assets/filterList/sideDish.jpg';
import slowCook from './assets/filterList/slowCook.jpg';
import thirtyMin from './assets/filterList/beef.jpg';

import appetizer from './assets/appetizer.jpg';
import breakfast from './assets/breakfast.jpg';
import dinner from './assets/dinner.jpg';
import lunch from './assets/lunch.jpg';

export const filterLists = [
    {name:'Air Fryer', img: airFryer}, 
    {name:'Instant Pot', img:instantPot }, 
    {name: '30-Minute', img: thirtyMin}, 
    {name: 'Side Dish', img: sideDish}, 
    {name:'Slow Cooker', img: slowCook},
    {name: 'Grilling' , img: grilling}, 
    {name: 'Chicken', img: chicken}, 
    {name: 'Beef', img: beef}
]

export const CategoryItems=[
    {name:"appetizer", img: appetizer},
    {name:"breakfast", img: breakfast},    
    {name:"lunch", img: lunch},
    {name:"dinner", img: dinner}

]

export function localStorageData(nameData, payload){
    const check = localStorage.getItem(nameData);
    if (check && check!==null){
        return (JSON.parse(check));
    }else{
        if(payload){
            localStorage.setItem(nameData, JSON.stringify(payload));
            return payload;
        }        
    }
}