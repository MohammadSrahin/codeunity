import React from 'react'
import "../css/sidebar.css"
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { GridFill, Gear, Book, Dot, ChevronDown } from 'react-bootstrap-icons';

export default function SideNav() {
  return (
    <Sidebar className='sidebar' >   
        <Menu>
            <MenuItem icon={<GridFill size={25}/>}> الصفحة الرئيسية </MenuItem>
            <MenuItem icon={<Gear size={25}/>}> اعدادات </MenuItem>
            <hr style={{width: '50%'}}></hr>
            <MenuItem icon={<Book size={25}/>}> الدورات</MenuItem>
            <MenuItem icon={<Dot color='purple' size={50}/>}> مطور الواجهة الأمامية</MenuItem>
            <MenuItem icon={<Dot color='red' size={50}/>}> لغة الجافا</MenuItem>
            <MenuItem icon={<Dot color='green' size={50}/>}> برمجة تطبيقات الموبايل</MenuItem>
            <MenuItem icon={<ChevronDown size={20}/>}> المزيد</MenuItem>

            <div className='card'>
                <b>الاشتراك الذهبي</b>
                <p style={{marginLeft: "10%"}}>اكتشف المزيد من الدورات مع العضوية الذهبية</p>
                <button class='subscribeButton'>احصل</button>
            </div>
            
        </Menu>
    </Sidebar>
  )
}
