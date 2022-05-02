import React from 'react';
import './style.css'
import { Container, Button, Menu } from 'semantic-ui-react';
import { JsxAttributeLike } from 'typescript';

export default function Navbar(): JSX.Element{

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
                            <Button positive content={'Create Activity'}></Button>
                        </Menu.Item>
                    </div>
            </Menu>
        </>
    )
}