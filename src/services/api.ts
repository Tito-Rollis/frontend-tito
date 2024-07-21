import axios, { AxiosResponse } from 'axios';
import { Barang, Negara, Pelabuhan } from '../types/Response';

const base_url = 'http://202.157.176.100:3000';
const api = axios.create({
    baseURL: `${base_url}`,
});

export const getNegara: () => Promise<Negara[]> = async () => {
    const response: AxiosResponse<Negara[]> = await api.get(`/negaras`).then((res) => res);
    return response.data;
};

export const getPelabuhan: () => Promise<Pelabuhan[]> = async () => {
    const response: AxiosResponse<Pelabuhan[]> = await api.get(`/pelabuhans?filter=`).then((res) => res);
    return response.data;
};

export const getBarang: () => Promise<Barang[]> = async () => {
    const response: AxiosResponse<Barang[]> = await api.get(`/barangs?filter=`).then((res) => res);
    return response.data;
};
