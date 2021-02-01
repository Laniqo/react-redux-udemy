import axios from 'axios';

export default axios.create({
        baseURL: 'https://api.unsplash.com',
        headers:{
            Authorization: 'Client-ID cYHmeP7C7lbAc6U_paTM4fcmIn0YoGpQR7fTBp95xP4',
            'X-Per-Page': '30'
        }
});