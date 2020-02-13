# AntDesigne custom theme
In this manual you can familiarize yourself with the installation and configuration details.

### To run a local demo
```
  npx styleguidist server 
```
## To set up a custom theme
You need to take several steps
### 1. Take the AntDesigne library.
* [Antd](https://ant.design/docs/react/use-with-create-react-app) - Installation instructions
### 2. Install less support in your project
* [next-less](https://github.com/zeit/next-plugins/tree/master/packages/next-less) - Next.js + Less
### 3. Copy custom styles
```
  src/stylesheets/applications.less
```
### Project Structure Notes

  * ``` ~src/stylesheets/ant_theme/**/* ```
  This folder contains all the variables with which the basic customization of the anti-design components was carried out.
  These variables are suggested by antdesign products.
  You can view all variables [here](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less).
  You can read more about customizing a template [here](https://ant.design/docs/react/customize-theme).

  * ``` ~src/stylesheets/applications.less ```
  This folder contains styles for additional customization of the anti-design library.
  Our design provides for some effects that differ from the anti-design effects. Basic customization was carried out using variables, and the styles that are in this folder are designed for deeper customization.
  If necessary, these styles can be omitted.

  * ``` ~src/components/**/* and ~src/layout/**/* ```
  These folders contain examples of components and instructions that are intended to stylguidist.
  You can read more about style settings in our project [here](https://github.com/rubygarage/nextjs-enterprise-ant-theme/blob/master/Readme-styleguidist.md).
  
