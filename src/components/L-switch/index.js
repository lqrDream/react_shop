import {Component} from 'react'
import PropsTypes from 'prop-types'
import styles from './Lswitch.module.css'

export default class LSwitch extends Component {
    static defaultProps = {};
    static propTypes = {
        size: PropsTypes.string
    };

    changeSwitch = () => {
        // console.log(ev)
        // console.log(this.switchDiv)
        // console.log(this.switchDiv.childNodes[0].offsetLeft)
        if(this.switchDiv.childNodes[0].offsetLeft===2){
            this.switchDiv.childNodes[0].style.left = '40px'
            this.switchDiv.style.backgroundColor='red'
        }else{
            this.switchDiv.childNodes[0].style.left = '2px'
            this.switchDiv.style.backgroundColor='#fff'
        }
    }

    render() {
        return (
            <div className={styles['L-switch']} onClick={() =>this.changeSwitch()} ref={el=>this.switchDiv=el}>
                <span className={styles.span}/>
            </div>
        )
    }
}