app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /* html */
  `
  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="review in reviews">
        {{review.name}} gave this {{ review.rating }} stars <span v-show="review.recommend">and recommended this product</span>
        <br v-if="review.review" />
        <span v-if="review.review">{{review.review}}</span>
      </li>
    </ul>
  </div>
  `
})
