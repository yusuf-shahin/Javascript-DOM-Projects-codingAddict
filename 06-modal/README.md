# This is a simple Javascript Modal related project.

- click the "Modal Content" button, then it show us a Modal.

### In this project , we basically add and remove HTML element class name by useing Javascript.

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(73, 166, 233, 0.5);
  display: grid;
  place-items: center;
  transition: var(--transition);
  visibility: hidden;
  z-index: -10;
}
/* OPEN/CLOSE MODAL */
.open-modal {
  visibility: visible;
  z-index: 10;
}
```

##### using javascript we add "open modal" class after "modal-overlay".
