import Vue from 'vue';

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let func = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', func);
      }
    }
    window.addEventListener('scroll', func);
  }
});
