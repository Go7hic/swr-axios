import useSWR from 'swr';
import qs from 'qs';
import axios from 'axios';


const axiosWrap = async function (...args: any[]) {
    //  args[0] -> 'api/axxx?id=dddd'
    const res = await axios.get(args[0]);
    return res;
};
// serverce.requestname('/api/xx?id') or serverce.requestname('/api/xx', {id: ''}) 
export default function(api: string, params?: any) {
    if (typeof params == 'object') {
        return useSWR(`${api}?${qs.stringify(params)}`, axiosWrap);
    }
    return useSWR(`${api}`, axiosWrap);
}
