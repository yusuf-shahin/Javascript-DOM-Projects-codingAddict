## CRUD operation

**index.html**

```html
<body>
  <section class="section-center">
    <!-- form -->
    <form class="grocery-form">
      <!-- show the alert sign , is that form submit or not -->
      <p class="alert"></p>

      <!--! heading name -->
      <h3>grocery bud</h3>

      <!--! input and button -->
      <div class="form-control">
        <input type="text" id="grocery" placeholder="e.g. eggs" />
        <button type="submit" class="submit-btn">submit</button>
      </div>
    </form>

    <!--! list container -->
    <!--# initially visibility hidden -->
    <div class="grocery-container">
      <div class="grocery-list">
        <!--* dinamically add list from js -->
      </div>
      <button class="clear-btn">clear items</button>
    </div>
  </section>
  <!-- javascript -->
  <script src="app.js"></script>
</body>
```
