<template>
  <div class="gallery-viewer">

    <div class="gallery-viewer__search">
      <form action="" class="search">
        <input type="search" class="search__input" v-model="query">
        <button class="search__button" @click.prevent="fetchImages(query)">Search</button>
      </form>
    </div>

    <ul class="gallery-viewer__list">
      <li class="gallery-viewer__item" v-for="(source, index) in previewImageSource" :key="index">
        <div class="gallery-viewer__tags">
          <a class="gallery-viewer__link gallery-viewer__link--tag"
            v-for="(tag, index) in imageTags[index].split(',')"
            :key="index"
            @click.prevent="fetchImages(tag)">
            {{ tag }}
          </a>
        </div>
        <img class="gallery-viewer__image"
          :src="source"
          :alt="imageTags[index]"
        >
        <div class="gallery-viewer__footer">
          <a :href="largeImageSource[index]" class="gallery-viewer__link">Download</a>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
const API_KEY = '12967020-a3deecfacc5cfa367f6aefde8';
export default {
  data(){
    return{
      previewImageSource: [],
      largeImageSource: [],
      imageTags: [],
      query: '',
      randomQueries: ['flowers', 'cats', 'dogs', 'bubbles', 'butterfly', 'peoples', 'winter', 'summer',]
    }
  },
  mounted(){
    this.fetchImages(this.randomQueries[this.getRandom(0, this.randomQueries.length - 1)])
  },
  methods: {
    getRandom(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    async fetchImages(query){
      this.query = '';
      this.previewImageSource.length = 0;
      this.largeImageSource.length = 0;
      this.imageTags.length = 0;

      await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&pretty=true`)
      .then(responce=>{
        return responce.json();
      })
      .then(data=>{
        for (let i = 0; i < data.hits.length; i++) {
          this.previewImageSource.push(data.hits[i].webformatURL);
          this.largeImageSource.push(data.hits[i].largeImageURL);
          this.imageTags.push(data.hits[i].tags);
        }
        console.log(data.hits);
      })
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
      position: relative;
      display: flex;
      flex-grow: 1;
      flex-basis: calc(25% - 30px);
      min-width: 250px;
      margin: 15px;
      border-radius: 20px;
      box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
      overflow: hidden;
      cursor: pointer;
      &:hover .gallery-viewer__footer {
        transform: translateY(-100%);
      }
      &:hover .gallery-viewer__tags {
        transform: translateY(100%);
      }
    }
    &__image {
      display: block;
      max-width: 100%;
      object-fit: cover;
    }
    &__tags, &__footer {
      position: absolute;
      left: 0;
      right: 0;
      background-color: rgba($color: #000000, $alpha: 0.5);
      transition: transform 0.2s ease-in;
    }
    &__tags {
      top: -50px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      color: #ffffff;
      font-size: 18px;
    }
    &__footer {
      bottom: -50px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
    }
    &__link {
      display: block;
      padding: 6px 12px;
      color: #ffffff;
      font-size: 18px;
      text-decoration: none;
      border: 1px solid #ffffff;
      border-radius: 20px;
      transition: all 0.2s ease-in;
      &:hover {
        color: #303030;
        background-color: #ffffff;
      }
    }
    &__link--tag {
      margin: 5px;
      padding: 3px 6px;
      font-size: 16px;
    }
  }

.search {
    display: flex;
    border-radius: 20px;
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
    &__input,
    &__button {
      padding: 8px 12px;
      border: none;
    }
    &__input {
      flex-grow: 1;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    &__button {
      min-width: 120px;
      color: #ffffff;
      background-color: #606060;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      cursor: pointer;
      transition: background-color 0.2s ease-in, color 0.2s ease-in;
      &:hover {
        color: #606060;
        background-color: transparent;
      }
    }
  }
</style>

