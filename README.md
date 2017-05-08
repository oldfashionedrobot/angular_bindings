## Angular Component Bindings Example

This repo shows a basic example of passing data between a Parent and Child component using three kinds of Angular bindings.
* The `@` binding, which is useful for passing an Angular interpolated string to a Child component.
* The one-way `<` binding, which lets you pass a variable from a Parent component to a Child component, but also update the variable in the Child component when it gets changed in the Parent.
* The two-way `=` binding, which is similar to the one-way binding, but changing the variable in the Child component will also change that value in the Parent.


### See what it looks like
Pull this repo down, run `npm install`, then run `npm run dev-server`. You should be able to load it up in your browser and mess around with the input fields to see the different bindings in action.


More info about these bindings, and a fourth type of binding can be found here: [Angular Bindings](http://stackoverflow.com/questions/35855758/angularjs-data-binding-types)
<br>
The Angular docs for bindings: [Angular Docs](https://docs.angularjs.org/api/ng/service/$compile#-scope-)
