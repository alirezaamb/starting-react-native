import axios from 'axios';
import client from './client';
const getListings = () => client.get('/listings');
export default { getListings };
