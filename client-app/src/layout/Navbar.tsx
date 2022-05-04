import React from 'react';
import './style.css'
import { Button, Menu } from 'semantic-ui-react';
import { useStore } from '../store/store';

export default function Navbar(){

    const {activityStore} = useStore();

    return (
        <>
            <Menu borderless={false} fixed='top' inverted> 
                    <div className='menu_wrapper'>
                        <Menu.Item header>
                            <img src="/assets/logo.png" alt='logo' />
                            ReAcitvities
                        </Menu.Item>

                        <Menu.Item content='Activities'/>
                        
                        <Menu.Item>
                            <Button onClick={()=>activityStore.openForm()} positive content={'Create Activity'}></Button>
                        </Menu.Item>
                    </div>
            </Menu>
        </>
    )
}