import {Component} from 'react'
import LTabBar from "../../components/L-tabbar";
import Home from "../../pages/home/home";
import Lnav from "../../components/L-nav";
import LInput from "../../components/L-input";

export default class Default extends Component {
    render() {
        return (
            <div>
                <Lnav rightText='按钮'>
                    <LInput type={'text'} style={
                        {border: '1px solid #ccc', height: '35px', borderRadius: '20px', marginTop: '3px'}}/>
                </Lnav>
                <Home/>
                <LTabBar/>
            </div>
        )
    }
}