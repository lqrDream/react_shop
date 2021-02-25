import {Component} from 'react'
import propTypes from 'prop-types'
import './input.css'

export default class LInput extends Component {
    // 定义默认值 必须是静态属性
    static defaultProps={
        muti: false,
        type: 'text'
    };

    static propTypes={
        type: propTypes.string,
        muti: propTypes.bool,
        model: propTypes.shape({
            name: propTypes.string.isRequired,
            value:propTypes.string.isRequired,
            onChange:propTypes.func.isRequired,
        })
    };

    renderInput=()=>{
        if (!this.props.model){
            return <input type="text" />
        }
        let {model:{name,value,onChange},type} = this.props;
        return <input type={type} name={name} value={value} onChange={onChange}/>
    };


    renderTextarea=()=>{
        let {model:{name,value,onChange}} = this.props;
        return <textarea name={name}  value={value} onChange={onChange} />
    };

    render(){

        let {muti} = this.props;

        if (muti){
            return this.renderTextarea()
        } else {
            return this.renderInput()
        }

    }
}