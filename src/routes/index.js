//페이지를 관리해주는 하나의 구성파일

import { createRouter, createWebHashHistory } from "vue-router"
import Home from './Home'
import About from './About'

export default createRouter({
    //Hash('특정 페이지를 찾을 수 없다' 방지), history(현재는 사용하지 않음)
    history: createWebHashHistory(),
    // 페이지 관리
    //https://www.google.co.kr
    routes: [
        {
            path: '/', // 가장 메인 페이지 정보
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]

})