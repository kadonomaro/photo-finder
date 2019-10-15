<template>
  <div class="gallery-viewer">
    <div class="gallery-viewer__search">
      <form action="" class="search">
        <input
          type="search"
          class="search__input"
          v-model="query"
          placeholder="What would you like to find?"
          @input="autocompleteCheck"
        >
        <button class="search__button" @click.prevent="fetchData(query)">Search</button>
      </form>

      <div class="autocomplete">
        <div v-for="(item, index) in filteredAutocomplete" :key="index">{{ item.title }}</div>
      </div>

      <div class="gallery-viewer__type">
        <div class="image-type">
          <ul class="image-type__list">
            <li class="image-type__item"
              v-for="(link, index) in imageType"
              :key="index">
              <a href=""
                :class="['image-type__link', {'image-type__link--active': link.isActive}]"
                @click.prevent="setImageType(link)"
              >{{ link.type }}</a>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <ul class="gallery-viewer__list">
      <app-picture
        class="gallery-viewer__item"
        v-for="image in images"
        :key="image.id"
        :previewImage="image.previewImageSource"
        :largeImage="image.largeImageSource"
        :imageTag="image.imageTags"
        :id="image.id"
        :meta="true"
        :isFavorite="image.isFavorite"
        :type="imageType.find(type=>type.isActive).type"
      ></app-picture>
    </ul>

    <div class="gallery-viewer__pagination">
        <pagination
        v-model="page"
        :page-count="20"
        :container-class="'pagination'"
        :click-handler="changePage"
      ></pagination>
    </div>
  </div>
</template>

<script>
const API_KEY = '12967020-a3deecfacc5cfa367f6aefde8';
let isLoaded = false;
export default {
  data(){
    return{
      page: 1,
      query: '',
      randomQueries: ['flowers', 'cats', 'dogs', 'bubbles', 'butterfly', 'peoples', 'winter', 'summer'],
      imageType: [
        {
          type: 'all',
          isActive: false
        },
        {
          type: 'photo',
          isActive: true
        },
        {
          type: 'illustration',
          isActive: false
        },
        {
          type: 'vector',
          isActive: false
        }
      ],
      images: this.$store.state.images,
      autocompleteItems: this.$store.state.queries,
      filteredAutocomplete: []
    }
  },
  mounted(){
    if (!isLoaded) {
      this.$store.dispatch('fetchData', [this.randomQueries[this.getRandom(0, this.randomQueries.length - 1)], this.imageType.find(type=>type.isActive).type])
      isLoaded = true;
    }

  },
  methods: {
    fetchData(){
      this.$store.dispatch('fetchData', [this.query, this.imageType.find(type=>type.isActive).type]);
      this.page = 1;

      if (this.query) {
        this.$store.commit('updateQueries', this.query);
      }
      // this.query = '';
    },
    getRandom(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    setImageType(link){
      this.imageType.forEach(type=>{
        type.isActive = false;
      });
      link.isActive = true;
    },
    changePage(){
      this.$store.dispatch('fetchData', [this.query, this.imageType.find(type=>type.isActive).type, this.page]);
    },
    autocompleteCheck(){
      this.autocompleteItems.forEach(item=>{
        if (item.title.includes(this.query)) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      })
      this.filteredAutocomplete = this.autocompleteItems.filter(item=>item.isActive);
    }
  }
}
</script>

<style lang="scss">
  .gallery-viewer {

    &__search {
      margin-bottom: 20px;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
      padding: 0;
      list-style-type: none;
    }
    &__item {
      display: flex;
      flex-grow: 1;
      flex-basis: calc(25% - 30px);
      min-width: 250px;
      margin: 15px;
    }
    &__pagination {
      margin-bottom: 20px;
    }
  }

.search {
    display: flex;
    border-radius: 20px;
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
    &__input,
    &__button {
      padding: 8px 12px;
      font-size: 18px;
      border: 2px solid transparent;
      outline: none;
      &:hover,
      &:focus {
        border-color: #606060;
      }
    }
    &__input {
      flex-grow: 1;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      border-right-width: 0px;
      transition: border-color 0.2s ease-in;
    }
    &__button {
      min-width: 120px;
      color: #ffffff;
      background-color: #606060;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      transition: background-color 0.2s ease-in, color 0.2s ease-in, border-color 0.2s ease-in;
      cursor: pointer;
      &:hover,
      &:focus {
        color: #303030;
        background-color: #cccccc;
      }
    }
  }

  .image-type {
    &__list {
      display: flex;
      justify-content: center;
      list-style-type: none;
    }
    &__item {
      margin: 0 5px;
    }
    &__link {
      display: block;
      padding: 4px 12px;
      color: #606060;
      text-decoration: none;
      border-radius: 20px;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
      &:hover {
        color: #ffffff;
        background-color: #909090;
      }
    }
    &__link--active {
      color: #ffffff;
      background-color: #606060;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    font-size: 24px;
    list-style: none;
    li {
      margin-right: 3px;
      color: #ffffff;
      background-color: #909090;
      &:first-child {
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
      }
      &:last-child {
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
      }
    }
    li.active {
      background-color: #303030;
    }
    a {
      display: block;
      padding: 8px 15px;
    }

  }
</style>

