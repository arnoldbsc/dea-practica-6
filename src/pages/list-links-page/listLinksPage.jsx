import './listLinksPage.css'
import AtomicLink from '../../components/atomic-link/atomicLink'
import AtomicButton from '../../components/atomic-button/atomicButton'

import { useState, useEffect } from 'react';

const ListLinksPage = () => {
    const [linksRender, setLinkRender] = useState()
    const data = [
        {
        "link": "https://www.ejemplo1.com"
        },
        {
        "link": "https://www.ejemplo2.com"
        },
        {
        "link": "https://www.ejemplo3.com"
        },
        {
        "link": "https://www.ejemplo4.com"
        },
        {
        "link": "https://www.ejemplo5.com"
        }
    ];
    const renderListLinks = (list) => {
        const listLinks = list.map((item) => {
        return (
            <AtomicLink link={item.link}>{item.link}</AtomicLink>
        )
        }) 
        return listLinks
    }

    useEffect(() => {
        setLinkRender(renderListLinks(data))
    })
    return (
        <>
            {linksRender}
            <AtomicButton>Boton</AtomicButton>
        </>
    )
}

export default ListLinksPage