import React,{Component} from 'react'
import LSwitch from "./index";

export default class LSwitchTest extends Component {
    render() {
        return (
            <div>
                <h3>nav测试</h3>
                <LSwitch/>
                <LSwitch size='small'/>
                <LSwitch size='large'/>
                <LSwitch size='large' disabled/>
                <LSwitch size='large' style={{background: 'red'}}/>
                <LSwitch size='large' style={{background: 'red'}} onClick={() => console.log('ssss')}/>
            </div>
        )
    }
    componentDidMount() {
        this.request('/m5/home/multidata').then(res => {
            console.log(res)
        })
    }

}