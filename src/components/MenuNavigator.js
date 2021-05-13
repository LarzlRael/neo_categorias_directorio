import React, { useContext } from 'react'
import styled from 'styled-components'
import { SearchContext } from '../context/SearchContext'
import { DrawItem, Spacer } from './DrawItem'


const ImageDraw = styled.img`
    
        width: 50%;
        height: 20%;
        align-self: center;
        align-items: center;
        border-radius: 50%;
    
`;

export const MenuNavigator = () => {
    const { menuStatus, hideMenu } = useContext(SearchContext);

    return (
        <div className={`menu-navigator ${menuStatus ? 'close-menu' : 'open-menu'}`}>

            <br />
            
            <ImageDraw
                src="https://scontent.flpb2-2.fna.fbcdn.net/v/t1.6435-9/67268418_1247819145384584_470499987805962240_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=MgNR9W2qBvsAX9s45DA&_nc_ht=scontent.flpb2-2.fna&oh=93f84f64d194a1f9e8af7d018ffceaad&oe=60C14255"
                alt="hi from here "
            />

            <div className="items-draw">
                <DrawItem
                    iconName="fas fa-search"
                    title="Muno"
                    onPress={hideMenu}
                />
                <DrawItem
                    iconName="fas fa-plus"
                    title="Agregar"
                    onPress={hideMenu}
                />
                <DrawItem
                    iconName="fas fa-bars"
                    title="Agregar"
                    onPress={hideMenu}
                />

                <Spacer />

                <DrawItem
                    iconName="fas fa-times"
                    title="Cerrar"
                    onPress={() => alert('esta seguro?')}
                />
            </div>


        </div>
    )
}
