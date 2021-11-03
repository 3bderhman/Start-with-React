import { required } from "joi";

let Images = [
    {id:0, src: require('./cabin.png').default, title:"log cabin"},
    {id:1, src: require('./cake.png').default, title:"tasty cake"},
    {id:2, src: require('./circus.png').default, title:"circus tent"},
    {id:3, src: require('./game.png').default, title:"controller"},
    {id:4, src: require('./safe.png').default, title:"locked safe"},
    {id:5, src: require('./submarine.png').default, title:"submarin"},
];
export default Images;