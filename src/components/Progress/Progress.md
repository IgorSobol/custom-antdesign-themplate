<a href="https://ant.design/components/progress/" title="More details about Ant progress">More details here</a>
<br />
<br />
<br />
<h3>When To Use</h3>
<p>If it will take a long time to complete an operation, you can use <mark>Progress</mark> to show the current progress and status.</p>
<ul>
  <li>When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds.</li>
  <li>When you need to display the completion percentage of an operation.</li>
</ul>
<br />
<br />
<h3>Progress bar</h3>
<p>A standard progress bar.</p>

```js
  import { Progress } from 'antd';

  <div>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </div>
```

<br />
<h3>Circular progress bar</h3>
<p>A circular progress bar.</p>

```js
  import { Progress } from 'antd';
  
  <div>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </div>
```

```js
  import React, { useState } from 'react';
  import { Progress, Button } from 'antd';
  
  function App() {
    const [percent, setPersent] = useState(0);
    const ButtonGroup = Button.Group;

    increase = () => {
      console.log(percent);
      let i = percent + 10;
      if (i < 100) {
        setPersent(i);
      } else {
        setPersent(100);
      }
    };

    decline = () => {
      console.log(percent);
      let i = percent - 10;
      if (i > 0) {
        setPersent(i);
      } else {
        setPersent(0);
      }
    };
    
    return (
      <div>
        <Progress percent={percent} />
        <ButtonGroup>
          <Button onClick={() => decline()} icon="minus" />
          <Button onClick={() => increase()} icon="plus" />
        </ButtonGroup>
      </div>
    )
  }

  <App />
```
