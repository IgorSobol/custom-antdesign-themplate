<p>Avatars can be used to represent people or objects. It supports images, Icons, or letters.</p>
<a href="https://ant.design/components/avatar/" title="More details about Ant avatar">More details here</a>
<br />
<br />
<br />
<h3>When To Use</h3>
<p>To input a value in a range.</p>
<br />
<h3>Basic</h3>
<p>Three sizes and two shapes are available.</p>

```js
  import { Avatar } from 'antd';

  <div>
    <div style={{ marginBottom: 16 }}>
      <Avatar style={{ marginRight: 16 }} size={64} icon="user" />
      <Avatar style={{ marginRight: 16 }} size="large" icon="user" />
      <Avatar style={{ marginRight: 16 }} icon="user" />
      <Avatar size="small" icon="user" />
    </div>
    <div>
      <Avatar style={{ marginRight: 16 }} shape="square" size={64} icon="user" />
      <Avatar style={{ marginRight: 16 }} shape="square" size="large" icon="user" />
      <Avatar style={{ marginRight: 16 }} shape="square" icon="user" />
      <Avatar shape="square" size="small" icon="user" />
    </div>
  </div>
```

<br />
<h3>Basic</h3>
<p>Three sizes and two shapes are available.</p>

```js
  import { Avatar, Icon } from 'antd';

  <div>
    <Avatar style={{ marginRight: 16 }} icon="user" />
    <Avatar style={{ marginRight: 16 }} icon={<Icon type="user" />} />
    <Avatar style={{ marginRight: 16 }}>U</Avatar>
    <Avatar style={{ marginRight: 16 }}>USER</Avatar>
    <Avatar style={{ marginRight: 16 }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', marginRight: 16 }}>U</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
  </div>
```
