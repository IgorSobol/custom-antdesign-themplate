### Adding a component
To add components, create a folder in ``` ~src/components/ ```

### Adding a layout
To add layout, create a folder in ``` ~src/layout/ ```

### Adding split in visual representation
If you need to add a section to the visual representation, you need to:
* Create folder in ``` ~src/... ```
* Let's say you need to add a `New layout`. Add a folder with the name `~src/new_layout`. Next, make changes to the file `styleguide.config.js`
```
  ...
  sections: [
    {
      name: 'New layout',
      usageMode: 'collapse',
      exampleMode: 'collapse',
      components: [
        `src/new_layout/**/*.${COMPONENTS_EXT}`,
      ],
      ignore: [],
    },
  ],
  ...
```
