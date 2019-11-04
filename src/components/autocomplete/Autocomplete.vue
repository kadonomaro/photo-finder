<template>
  <div class="autocomplete" v-show="isActive">
    <ul class="autocomplete__list">
      <li class="autocomplete__item"
        v-for="(item, index) in filteredDictionary"
        :key="index"
        @click="setActiveWord(item.title)"
        @keypress.enter="setActiveWord(item.title)"
        tabindex="0"
      >{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queriesDictionary: this.$store.state.queriesDictionary.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)),
      filteredDictionary: [],
      isActive: false
    }
  },
  methods: {
    checkDictionary(query) {
      this.queriesDictionary.forEach(word => {
        if (word.title.toLowerCase().includes(query.toLowerCase()) && query) {
          word.isActive = true;
          this.isActive = true;
        } else {
          word.isActive = false;
        }
      });
      this.filteredDictionary = this.queriesDictionary.filter(word => word.isActive);
    },
    setActiveWord(word) {
      this.$emit('set-query', word)
      this.isActive = false;
    },
  },
};
</script>

<style lang="scss">
  .autocomplete {
    position: absolute;
    z-index: 99;
    top: 100%;
    left: 20px;
    right: 0;
    max-height: 400px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0 3px 10px rgba($color: #000000, $alpha: 0.3);
    overflow: auto;
      &::-webkit-scrollbar {
        width: 0;
      }
    &__list {
      margin: 0;
      padding: 0;
      background-color: rgba($color: #ffffff, $alpha: 0.8);
      list-style: none;
    }
    &__item {
      padding: 10px;
      cursor: pointer;
      transition: background-color 0.2s ease-in;
      &:hover,
      &:focus {
        background-color: rgba($color: #606060, $alpha: 0.3);
        outline: none;
      }
      &:not(:last-child) {
        border-bottom: 1px solid #cccccc;
      }
    }
  }
</style>
