import React from 'react'
import NavModel from '../PageComponents/NavModel/NavModel'
import SidebarModel from '../PageComponents/SidebarModel/SidebarModel'
import './CompteParam.css'

function CompteParam() {
    return (
        <div>
            <NavModel/>
            <SidebarModel/>
            <div className='BackParams'>
                    <div className='ParamContent'>parametre de compte</div>
            </div>
        </div>
    )
}

export default CompteParam
