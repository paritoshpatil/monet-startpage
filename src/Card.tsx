import React from 'react'
import './App.css'

export type Link = {
    text: string,
    link: string,
    color: string
}

export type QuickLinks = {
    groupTitle: string,
    links: Link[]
}

export default function Card(data: any) {
    return (
        <div className="card">
            <h3 className='card-title'>{data.data.groupTitle}</h3>
            <ul>
                {data.data.links.map((link: Link) => {
                    return <li key={link.text} >
                        <a href={link.link} target="_blank" className="link" style={{ "--link-hover-color": link.color } as React.CSSProperties}>{link.text}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}
