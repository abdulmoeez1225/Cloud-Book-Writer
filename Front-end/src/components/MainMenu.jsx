import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getDynamicMenuApi, logout } from '../api';
import { useGlobalStore } from '../store';



const MainMenu = () => {
    const [current, setCurrent] = useState('');
    const [items, setItems] = useState([])
    const navigation = useNavigate()
    const { token,setToken } = useGlobalStore()


    useEffect(() => {
        const aditionMenuItems = [ ]
        if (!token) {

            aditionMenuItems.push({
                label: "Sign In",
                key: "signin"
            })

        } else {
            aditionMenuItems.push({
                label: "Books",
                key: "book-list"
            })
            aditionMenuItems.push({
                label: "Create Book",
                key: "book"
            })
            aditionMenuItems.push({
                label: "Users",
                key: "users"
            })

            aditionMenuItems.push({
                label: 'logout',
                key: 'logout'
            })
        }
        setItems(aditionMenuItems)
    }, [token])



    const onClick = (e) => {
        if (e.key == 'logout') {
            logout().then(()=>{
                setToken('')
                navigation('signin')
            })
            return;
        } else {
            console.log('click ', e);
            setCurrent(e.key);
            navigation(e.key)
        }

    };

    return <Menu style={{ justifyContent: 'center' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MainMenu;