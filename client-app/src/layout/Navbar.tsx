import React from 'react';
import './style.css'
import { Button, Menu } from 'semantic-ui-react';

interface Props {
    formOpen: ()=> void;
}

export default function Navbar({formOpen}: Props){

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
                            <Button onClick={formOpen} positive content={'Create Activity'}></Button>
                        </Menu.Item>
                    </div>
            </Menu>
        </>
    )
}