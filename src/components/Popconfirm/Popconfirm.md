<a href="https://ant.design/components/popconfirm/" title="More details about Ant popconfirm">More details here</a>
<br />
<br />
<br />
<h3>When To Use</h3>
<p>A simple and compact dialog used for asking for user confirmation.</p>
<p>The difference with the <mark>confirm</mark> modal dialog is that it's more lightweight than the static popped full-screen confirm modal.</p>
<br />
<h3>Basic</h3>
<p>The basic example.</p>

```js
  import { Popconfirm, message } from 'antd';

  function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }

  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }
  
  <Popconfirm
    title="Are you sure delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <a href="#">Delete</a>
  </Popconfirm>
```
<br />
<h3>Placement</h3>
<p>There are 12 <mark>placement</mark> options available. Use <mark>arrowPointAtCenter</mark> if you want the arrow to point at the center of target.</p>

```js
  import { Popconfirm, message, Button, Icon } from 'antd';

  const text = 'Are you sure with this action?';
  const icon = <Icon type="exclamation-circle" style={{ color: '#ffbb38' }} />;

  function confirm() {
    message.warning('Clicked on Yes.');
  }

  <div className="demo">
    <div style={{ whiteSpace: 'nowrap' }}>
      <Popconfirm
        placement="topLeft"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        icon={icon}
      >
        <Button style={{ marginRight: 16, width: 100, marginBottom: 16 }}>TL</Button>
      </Popconfirm>
      <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No" icon={icon}>
        <Button style={{ marginRight: 16, width: 100, marginBottom: 16 }}>Top</Button>
      </Popconfirm>
      <Popconfirm
        placement="topRight"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        icon={icon}
      >
        <Button style={{ width: 100, marginBottom: 16 }}>TR</Button>
      </Popconfirm>
    </div>
    <div style={{ width: 70, float: 'left' }}>
      <Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No" icon={icon}>
        <Button style={{ marginRight: 16, width: 100, marginBottom: 16 }}>LT</Button>
      </Popconfirm>
      <Popconfirm placement="left" title={text} onConfirm={confirm} okText="Yes" cancelText="No" icon={icon}>
        <Button style={{ marginRight: 16, width: 100, marginBottom: 16 }}>Left</Button>
      </Popconfirm>
      <Popconfirm
        placement="leftBottom"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        icon={icon}
      >
        <Button style={{ marginRight: 16, width: 100, marginBottom: 16 }}>LB</Button>
      </Popconfirm>
    </div>
    <div style={{ width: 70, marginLeft: 232 }}>
      <Popconfirm
        placement="rightTop"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        icon={icon}
      >
        <Button style={{  width: 100, marginBottom: 16 }}>RT</Button>
      </Popconfirm>
      <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No" icon={icon}>
        <Button style={{ width: 100, marginBottom: 16 }}>Right</Button>
      </Popconfirm>
      <Popconfirm
        placement="rightBottom"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        icon={icon}
      >
        <Button style={{ width: 100, marginBottom: 16 }}>RB</Button>
      </Popconfirm>
    </div>
    <div style={{ clear: 'both', whiteSpace: 'nowrap' }}>
      <Popconfirm
        placement="bottomLeft"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        icon={icon}
      >
        <Button style={{ marginRight: 16, width: 100 }}>BL</Button>
      </Popconfirm>
      <Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No" icon={icon}>
        <Button style={{ marginRight: 16, width: 100 }}>Bottom</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottomRight"
        title={text}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
        icon={icon}
      >
        <Button style={{ width: 100 }}>BR</Button>
      </Popconfirm>
    </div>
  </div>
```
