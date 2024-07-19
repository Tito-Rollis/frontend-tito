import axios, { AxiosResponse } from 'axios';
import { Barang, Negara, Pelabuhan } from '../types/Response';

const base_url = 'http://202.157.176.100:3000';

export const getNegara: () => Promise<Negara[]> = async () => {
    const response: AxiosResponse<Negara[]> = await axios.get(`${base_url}/negaras`).then((res) => res);
    return response.data;
};

export const getPelabuhan: () => Promise<Pelabuhan[]> = async () => {
    const response: AxiosResponse<Pelabuhan[]> = await axios.get(`${base_url}/pelabuhans?filter=`).then((res) => res);
    return response.data;
};

export const getBarang: () => Promise<Barang[]> = async () => {
    const response: AxiosResponse<Barang[]> = await axios.get(`${base_url}/barangs?filter=`).then((res) => res);
    return response.data;
};
