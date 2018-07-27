import axios from 'axios';

export const getProcessDefinitions = () => axios.get('').then(res => res.data);

export const getProcessDefinitionID = params => axios.post('', { params }).then(res => res.data);
