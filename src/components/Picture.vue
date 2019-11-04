<template>
  <div>
    <li class="picture">
      <div class="picture__tags" v-if="meta">
        <a
          class="picture__link picture__link--tag"
          v-for="(tag, index) in imageTag.split(',')"
          :key="index"
          @click.prevent="fetchData([tag, type])"
        >{{ tag }}</a>
      </div>
      <img class="picture__image" :src="previewImage" :alt="imageTag" />
      <div class="picture__footer">
        <button :class="['picture__like', {'picture__like--active': isFavorite}]" aria-label="Like picture" @click="toggleFavorite(id, index)"></button>
        <a class="picture__link" :href="download" @click.prevent="downloadImage(largeImage, imageTag)" download="filename.jpg">Download</a>
        <button class="picture__link" @click="openModal">Open</button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ['id', 'previewImage', 'largeImage', 'imageTag', 'meta', 'isFavorite', 'type', 'index'],
  data() {
    return {
      download: '',
    };
  },
  methods: {
    fetchData(props) {
      this.$store.dispatch('fetchData', props);
    },
    toggleFavorite(id, index) {
      this.$store.commit('toggleFavorite', [id, index]);
    },
    downloadImage(imageURL, filename){
      fetch(imageURL).then(response => {
        return response.blob();
      }).then(blob => {
        return URL.createObjectURL(blob);
      }).then(image=>{
        this.download = image;
      })

    },
    openModal() {
      this.$modal.show({
        template: `
          <div class="image-modal">
            <div class="image-modal__image">
              <img :src="imageSource" alt="">
            </div>
          </div>
        `,
        props: ['imageSource',]
      }, {
        imageSource: this.largeImage
      },{
        width: '90%',
        height: '90%'
      })
    }
  }
};
</script>

<style lang="scss">
  .picture {
    position: relative;
    display: flex;
    text-align: center;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.3);
    overflow: hidden;
    cursor: pointer;
    &:hover .picture__footer {
      transform: translateY(-100%);
    }
    &:hover .picture__tags {
      transform: translateY(100%);
    }
    &__image {
      display: block;
      max-width: 100%;
      object-fit: cover;
    }
    &__tags,
    &__footer {
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
      background-color: transparent;
      border: 1px solid #ffffff;
      border-radius: 20px;
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 10px;
      }
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
    &__like {
      position: absolute;
      left: 20px;
      top: 50%;
      width: 30px;
      height: 30px;
      background-color: transparent;
      background-image: url('../assets/icons/like.svg');
      background-repeat: no-repeat;
      border: none;
      transform: translate(0, -50%);
      cursor: pointer;
    }
    &__like--active {
      background-position-x: -35px;
    }
  }
</style>
