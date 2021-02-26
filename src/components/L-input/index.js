import {Component} from 'react'
import propTypes from 'prop-types'
import styles from './input.module.css'

export default class LInput extends Component {
    static defaultProps = {
        type: 'text',
        model: null,
        multi: false,
        label: '',
        style: {}
    };
    static propTypes = {
        type: function (props, propName, componentName) {
            if (!/(text|password|button|number|file|email)/.test(props[propName])) {
                return new Error(
                    'Invalid prop `' + propName + '` supplied to' +
                    ' `' + componentName + '`. Validation failed.'
                );
            }
        },

        model: propTypes.shape({
            name: propTypes.string.isRequired,
            value: propTypes.string.isRequired,
            onChange: propTypes.func.isRequired
        }),
        multi: propTypes.bool,
        style: propTypes.object,
    };

    renderInput = () => {
        let {model, type,style} = this.props;
        //非受控
        if (!model) {
            return  <input  className={styles.lInput} type={type} defaultValue="" style={style}/>
        }
        //受控
        let {name, value, onChange} = model;
        return <input style={style} className={styles.lInput} type={type} value={value} name={name} onChange={onChange}/>

    };

    renderTextArea = () => {
        let {model,style} = this.props;
        //非受控
        if (!model) {
            return <textarea style={style}/>
        }
        //受控
        let {name, value, onChange} = model;
        return <textarea style={style} value={value} name={name} onChange={onChange}/>
    };
    render() {
        let {multi} = this.props;
        return multi ? this.renderTextArea() : this.renderInput();
    }
}