<a href="https://ant.design/components/button/" title="More details about Ant button">More details here</a>
<br />
<br />
<br />
<h3>When To Use</h3>
<ul>
  <li>A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.</li>
</ul>
<br />
<br />
<h3>Type</h3>
<p>
  There are <mark>primary</mark> button, <mark>default</mark> button, <mark>dashed</mark> button, <mark>danger</mark> button and <mark>link</mark> button in antd.
</p>

```js
  import { Button } from 'antd';
  <>  
    <Button style={{ marginRight: 16 }} type="primary">Primary</Button>
    <Button style={{ marginRight: 16 }} >Default</Button>
    <Button style={{ marginRight: 16 }} type="link">Link</Button>
    <Button style={{ marginRight: 16 }} type="danger">Danger</Button>
    <Button type="primary" disabled>Disabled</Button>
  </>
```
<h3>Size</h3>
<p>
  There are <mark>large</mark>, <mark>medium</mark>, <mark>small</mark> button in antd.
</p>

```js
  import { Button } from 'antd';

  <>
    <Button style={{ marginRight: 16 }} size="large" type="primary">Large</Button>
    <Button style={{ marginRight: 16 }} type="primary">Medium</Button>
    <Button size="small" type="primary">Small</Button>
  </>
```
<h3>Icon</h3>
<p>
  <mark>Button</mark> components can contain an <mark>Icon</mark>. This is done by setting the <mark>icon</mark> property or placing an <mark>Icon</mark> component within the <mark>Button</mark>.    
  If you want specific control over the positioning and placement of the <mark>Icon</mark>, then that should be done by placing the <mark>Icon</mark> component within the <mark>Button</mark> rather than using the <mark>icon</mark> property.
</p>

```js
  import { Button } from 'antd';
  <>
    <Button style={{ marginRight: 16 }} type="primary" shape="circle" icon="plus" />
    <Button style={{ marginRight: 16 }} type="primary" shape="circle">
      A
    </Button>
    <Button style={{ marginRight: 16 }} type="primary" icon="search">
      Search
    </Button>
    <Button style={{ marginRight: 16 }} shape="circle" icon="search" />
    <Button style={{ marginRight: 16 }} icon="search">Search</Button>
    <Button style={{ marginRight: 16 }} shape="circle" icon="search" />
    <Button style={{ marginRight: 16 }} icon="search">Search</Button>
    <Button style={{ marginRight: 16 }} type="dashed" shape="circle" icon="search" />
    <Button type="dashed" icon="search">
      Search
    </Button>
  </>
```
<h3>Size</h3>
<p>
  Ant Design supports a default button size as well as a large and small size.
  If a large or small button is desired, set the <mark>size</mark> property to either <mark>large</mark> or <mark>small</mark> respectively. Omit the <mark>size</mark> property for a button with the default size.
</p>

```js
  import { Button, Radio, Icon } from 'antd';

  <>
    <Button style={{ marginBottom: 16, marginRight: 16 }} type="primary" icon="plus" size="large" />
    <Button style={{ marginRight: 16 }} type="primary" shape="circle" icon="plus" size="large" />
    <Button style={{ marginRight: 16 }} type="primary" shape="round" icon="plus" size="large" />
    <Button style={{ marginRight: 16 }} type="primary" shape="round" icon="download" size="large">
      Download
    </Button>
    <Button style={{ marginRight: 16 }} type="primary" icon="download" size="large">
      Download
    </Button>
    <Button style={{ marginRight: 16 }} type="primary" size="large">
      <Icon type="left" />
      Left Icon
    </Button>
    <Button style={{ marginRight: 16 }} type="primary" size="large">
      Right Icon
      <Icon type="right" />
    </Button>
    <Button.Group style={{ marginRight: 16 }} size="large">
      <Button type="primary">
        <Icon type="left" />
        Backward
      </Button>
      <Button type="primary">
        Forward
        <Icon type="right" />
      </Button>
    </Button.Group>
    <Button.Group size="large">
      <Button type="primary">
        Action Left
      </Button>
      <Button type="primary">
        Action Center
      </Button>
      <Button type="primary">
        Action Right
      </Button>
    </Button.Group>
  </>
```
<h3>Disabled</h3>
<p>
  To mark a button as <mark>disabled</mark>, add the disabled property to the <mark>Button</mark>.
</p>

```js
  import { Button } from 'antd';

  <>
    <Button style={{ marginBottom: 16, marginRight: 16 }} type="primary">Primary</Button>
    <Button style={{ marginRight: 16 }} type="primary" disabled>
      Primary(disabled)
    </Button>
    <Button style={{ marginRight: 16 }}>Default</Button>
    <Button style={{ marginRight: 16 }} disabled>Default(disabled)</Button>
    <Button style={{ marginRight: 16 }} type="dashed">Dashed</Button>
    <Button style={{ marginRight: 16 }} type="dashed" disabled>
      Dashed(disabled)
    </Button>
    <Button style={{ marginRight: 16 }} type="link">Link</Button>
    <Button style={{ marginBottom: 16 }} type="link" disabled>
      Link(disabled)
    </Button>
    <div style={{ padding: '20px', background: 'rgb(190, 200, 200)' }}>
      <Button style={{ marginRight: 16 }} ghost>Ghost</Button>
      {' '}
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </div>
  </>
```
<h3>Multiple Buttons</h3>
<p>
  If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into <mark>Dropdown.Button</mark>.
</p>

```js 
  import { Button, Menu, Dropdown, Icon } from 'antd';

  function handleMenuClick(e) {
    console.log('click', e);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );  
  <>
    <Button style={{ marginRight: 16 }} type="primary">primary</Button>
    <Button style={{ marginRight: 16 }}>secondary</Button>
    <Dropdown overlay={menu}>
      <Button>
        Actions <Icon type="down" />
      </Button>
    </Dropdown>
  </>
```
<br />
<h3>Ghost Button</h3>
<p>
  <mark>ghost</mark> property will make button's background transparent, it is commonly used in colored background.
</p>

```js
  import { Button } from 'antd';
  <>
    <div style={{background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
      <Button style={{ marginRight: 16 }} type="primary" ghost>
        Primary
      </Button>
      {' '}
      <Button style={{ marginRight: 16 }} ghost>Default</Button>
      {' '}
      <Button style={{ marginRight: 16 }} type="dashed" ghost>
        Dashed
      </Button>
      {' '}
      <Button style={{ marginRight: 16 }} type="danger" ghost>
        danger
      </Button>
      {' '}
      <Button type="link" ghost>
        link
      </Button>
    </div>
  </>
```
<br />
<h3>Loading</h3>
<p>
  A loading indicator can be added to a button by setting the <mark>loading</mark> property on the <mark>Button</mark>.
</p>

```js
  import { Button } from 'antd';

  <>
    <Button style={{ marginRight: 16 }} type="primary" loading={true} />
    <Button style={{ marginRight: 16 }} type="primary" size="small" loading={true} />
    <Button style={{ marginRight: 16 }} type="primary" loading />
    <Button style={{ marginRight: 16 }} type="primary" shape="circle" loading />
    <Button type="danger" shape="round" loading />
  </>
```
<br />
<h3>Button Group</h3>
<p>
  Buttons can be grouped by placing multiple <mark>Button</mark> components into a <mark>Button.Group</mark>. The <mark>size</mark> can be set to <mark>large</mark>, <mark>small</mark> or left unset resulting in a default size.
</p>

```js
  import { Button, Icon } from 'antd';
  const ButtonGroup = Button.Group;

  <>
    <h3>Basic</h3>
    <ButtonGroup style={{ marginRight: 16 }}>
      <Button>Cancel</Button>
      <Button>OK</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginRight: 16 }}>
      <Button disabled>L</Button>
      <Button disabled>M</Button>
      <Button disabled>R</Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginRight: 16 }}>
      <Button>L</Button>
      <Button>M</Button>
      <Button>R</Button>
    </ButtonGroup>
    <h3>With Icon</h3>
    <ButtonGroup style={{ marginRight: 16 }}>
      <Button type="primary">
        <Icon type="left" />
        Go back
      </Button>
      <Button type="primary">
        Go forward
        <Icon type="right" />
      </Button>
    </ButtonGroup>
    <ButtonGroup style={{ marginRight: 16 }}>
      <Button type="primary" icon="cloud" />
      <Button type="primary" icon="cloud-download" />
    </ButtonGroup>
    <ButtonGroup>
      <Button type="primary" size="small" icon="cloud" />
      <Button type="primary" size="small" icon="cloud-download" />
    </ButtonGroup>
  </>
```
<br />
<h3>block Button</h3>
<p>
  <mark>block</mark> property will make the button fit to its parent width.
</p>

```js
  import { Button } from 'antd';

  <>
    <Button style={{ marginBottom: 16 }} type="primary" block>
      Primary
    </Button>
    <Button style={{ marginBottom: 16 }} block>Default</Button>
    <Button style={{ marginBottom: 16 }} type="dashed" block>
      Dashed
    </Button>
    <Button style={{ marginBottom: 16 }} type="danger" block>
      Danger
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </>
```
