# React TODO 

I know it is not original, but it is a good project. And certainly good practice.

<img src="https://i.imgur.com/HCtZ4Ix.gif" />

Let's build a classic TODO application, to get the hang of using inputs and forms in react, rendering data from lists and structuring our state.

## Goals

* [ ] Display a list of TODO's.
* [ ] Create an input for users to type their TODO's.
  * [ ] Add a TODO to the list when the user clicks an 'add' button.
  * [ ] Add a TODO to the list when the user hits enter inside the input.
  * [ ] Make the field a 'controlled input' (it's value is always stored in state)
* [ ] Users can add TODO's to the list by hitting a button, or hitting enter with the input selected.
* [ ] Clicking on a todo toggles its status (DONE/TODO)
* [ ] A clear button to remove DONE TODO's.
* [ ] Use the `key` prop correctly

## Stretch Goals

* [ ] Add the ability to edit TODO's
* [ ] Add descriptions/notes to TODO's
* [ ] Make TODO's re-arrangable (perhaps with drag-and-drop)
* [ ] Allow TODO's to nest under other TODO's.

## Notes

* Inputs can be a little funky in React. 

We prefer to hold the value of input in a state varible, so that we can easily set or get it the way we would any other piece of data. We refer to this as a 'controlled input', and manage it's value as a stateful variable, and change it as the user types with an `onChange` event listener.

https://reactjs.org/docs/forms.html

* Note that the [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) and [`textarea`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) elements are different. 

If you want a one-line field, then go with `input`. If you want multiple lines, use `textarea`. Setting a large width and height on an `input` is not going to do what you want.

## Install and Use

To run and edit the project, clone the project to your computer, `cd` into the project directory and follow the instructions below for your javascript pacakge manager of choice.

### yarn

In the project directory run `yarn install` to install the depenencies, and `yarn start` to star the development server. It should open a browser tab to `localhost:3000`.

### npm

In the project directory run `npm install` to install the depenencies, and `npm start` to star the development server. It should open a browser tab to `localhost:3000`.
