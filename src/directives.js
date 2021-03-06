import Vue from 'vue';
import throttle from 'lodash/throttle';

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let func = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', func);
      }
    }
    window.addEventListener('scroll', throttle(func, 300));

  }
});


Vue.directive('resize', {
  inserted: function (el, binding) {
    let func = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('resize', func);
      }
    }
    window.addEventListener('resize', throttle(func, 300));

  }
});
