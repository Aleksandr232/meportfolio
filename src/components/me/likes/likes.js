import {connect} from 'react-redux'
import { incrementLikes, decrementLikes } from '../../redux/action';

import './btc.scss';


function Likes(props){
    console.log(props);
    return(
        <div className="button-controls">
            <button id='btc' className='btn btn-info ms-2' onClick={props.onIncrementLikes}>👍🏻{props.likes}</button>
            <button id='btc' className=' btn btn-info ms-2' onClick={props.onDecrementLikes}>👎🏻</button>
        </div>
    )
}

function mapStateToProps(state){
    console.log('mapStateToProps >', state);
    const {likesReducer}=state;
    return{
        likes: likesReducer.likes
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrementLikes:()=>{
           return dispatch(incrementLikes())
        },
        
        onDecrementLikes:()=>{
           return dispatch(decrementLikes())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)