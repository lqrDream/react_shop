import {Component} from 'react'
import Lnav from "./index";
import LInput from "../L-input";
import LTabBar from "../L-tabbar";
export default class LnavTest extends Component {
    render() {
        return (
                <div>
                    <h3>nav测试</h3>
                    <Lnav leftText='返回' rightText='按钮' title={['标题','陈俊','傻逼','脑瘫']} />
                    <Lnav leftText='返回' rightText='按钮' title='标题'  rightOnClick={()=>console.log('aaa')}/>
                    <Lnav />
                    <Lnav rightText='按钮'>
                        {/*<input type="text" style={{height:'30px',marginTop:'4px',width:'100%',fontSize:'18px',paddingLeft:"5px"}}/>*/}
                        <LInput type={'text'} />
                    </Lnav>
                    <LTabBar/>
                </div>
        )
    }
}