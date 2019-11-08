# swr-axios
> SWR with axios

安装
```
yarn add swr-axios
```

使用

举个例子：

首先在 service 里封装请求
```
import swrAxios from 'swr-axios'

export function getArticleRank(params: any) {
  return swrAxios('/article/rank', params);
}
```
在页面获取数据
```
import api from 'service';

export default function XxxPage() {
  const [params, setParams] = useState({ page: 1});
  const { data, error } = api.getArticleRank(params)
  ....
}
```

说明

swr-axios 只是作为项目 axios 请求库的一个补充，你可以继续在项目里面使用之前的axios，
当你觉得页面可以使用 swr 的时候你就可以添加 swr-axios，
考虑到使用场景，目前只支持 get 请求。