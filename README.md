# swr-axios
> SWR with axios

#### Install
```
yarn add swr-axios
```

#### Use


```
import swrAxios from 'swr-axios'

export function getArticleRank(params: any) {
  return swrAxios('/article/rank', params);
}
```

```
import api from 'service';

export default function XxxPage() {
  const [params, setParams] = useState({ page: 1});
  const { data, error } = api.getArticleRank(params)
  ....
}
```

#### notice

swr-axios is just a complement to the project axios request library, you can continue to use the previous axios in the project,
You can add swr-axios when you think the page can use swr.
Considering the usage scenario, only get requests are currently supported.

#### License
MIT © Go7hic