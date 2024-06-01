import axios from 'axios';
import { config } from '../config';
import { storage } from '../utils/storage';

export const PRIVATE_API = axios.create({
    baseURL: `${config.BASE_URI}`,
    headers: {
        Authorization: `Bearer ${storage.getToken()}`,
    },
});
