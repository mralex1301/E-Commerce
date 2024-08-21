import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjRkNjhmZmI0Mjg3ZGVjZjBkOWI2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMzQ4MDE5MSwiZXhwIjoxNzIzOTEyMTkxfQ.oMpmtntCX1GKCFfFkBcetGEJIMxeiSkiNByJnucGV9Y'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN} `}
});