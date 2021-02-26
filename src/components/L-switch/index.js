import {Component} from 'react'
import PropsTypes from 'prop-types'
import styles from './Lswitch.module.css'

export default class LSwitch extends Component {
    static defaultProps = {
        size: 'default',
        onChange: null,
        disabled: false,
        style: {}
    };
    static propTypes = {
        size: PropsTypes.string,
        onChange: PropsTypes.func,
        disabled: PropsTypes.bool,
        style: PropsTypes.shape({
            background: PropsTypes.string,
            backgroundColor: PropsTypes.string,
        })
    };

    changeSwitch = () => {
        let {style} = this.props
        // console.log(ev)
        // console.log(this.switchDiv)
        // console.log(this.switchDiv.childNodes[0].offsetLeft)
        if (this.switchDiv.childNodes[0].offsetLeft === 0) {
            this.switchDiv.childNodes[0].style.left = this.switchDiv.offsetWidth - this.switchDiv.childNodes[0].offsetWidth + 'px'
            // this.switchDiv.style.backgroundColor = 'blue'
            if (style.background || style.backgroundColor) {
                this.switchDiv.style.backgroundColor = style.background || style.backgroundColor
            } else {
                this.switchDiv.style.backgroundColor = 'blue'
            }
        } else {
            this.switchDiv.childNodes[0].style.left = '0px'
            this.switchDiv.style.backgroundColor = '#fff'
        }
    }

    render() {
        let {size, onClick, disabled} = this.props
        if (disabled) {
            return (
                <div className={`${styles['L-switch']} ${styles[`L-switch-${size}`]} ${styles[`L-switch-disabled`]}`}>
                   <span className={`${styles['L-switch-span']} ${styles[`L-switch-${size}-span`]}`}
                         onClick={onClick}/>
                </div>
            )
        } else {
            return (
                <div
                    className={`${styles['L-switch']} ${styles[`L-switch-${size}`]}`}
                    onClick={() => {
                        this.changeSwitch()
                        onClick && onClick()
                    }}
                    ref={el => this.switchDiv = el}
                >
                <span className={`${styles['L-switch-span']} ${styles[`L-switch-${size}-span`]}`}
                />
                </div>
            )
        }
    }
}