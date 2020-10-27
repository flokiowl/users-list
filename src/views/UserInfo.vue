<template>
  <div class="container">
    <header class="users__header">
      <router-link to="/" class="user__back">
        <img :src="backSVG" alt="Вернутся к списку контактов" />
      </router-link>
    </header>
    <main class="users__main">
      <div class="user__top">
        <div class="user__image">
          <span class="image-holder">
            <img v-if="user.avatar" :src="user.avatar" alt="user.first_name" />
          </span>
        </div>
        <div class="user__name">
          <span class="name">{{ user.first_name }} {{ user.last_name }}</span>
          <span class="role">{{ user.email }}</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import backSVG from "@/assets/back.svg";
export default {
  name: "UserInfo",
  props: ["id"],
  data() {
    return {
      backSVG,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user(this.id);
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.users__header {
  display: flex;
  justify-content: space-between;
  background: #eee;
  padding: 15px 25px;
  h1 {
    font-size: 28px;
    margin: 0;
  }
}
.user__back {
  display: inline-block;
  padding: 15px 25px;
  margin: -15px -25px;
  img {
    max-width: 16px;
  }
}
.user__undo {
  border: 0;
  img {
    max-width: 16px;
  }
}
.user__top {
  height: 300px;
  width: 100%;
  padding: 15px 25px;
  margin: -15px -25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user__image {
  flex-grow: 1;
  .image-holder {
    display: inline-block;
    height: 165px;
    width: 165px;
    background: #eee;
    border-radius: 50%;
    overflow: hidden;
    img {
      max-width: 100%;
      min-height: 100%;
    }
  }
}
.user__name {
  display: flex;
  flex-direction: column;
  padding: 10px 0 15px 0;
  .name {
    font-size: 24px;
    margin-bottom: 5px;
  }
  .role {
    font-size: 14px;
    color: #aaa;
  }
}
.user__actions {
  min-width: 210px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.user__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid #eee;
  background: #eee;
  border-radius: 50%;
  cursor: pointer;
  img {
    max-width: 16px;
  }
}
</style>
