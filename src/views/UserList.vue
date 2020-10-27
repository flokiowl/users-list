<template>
  <div class="container">
    <header class="users__header">
      <h1>Список пользователей</h1>
    </header>
    <main class="users__main">
      <div class="users__search">
        <input
          v-model="searchValue"
          type="text"
          placeholder="Поиск по пользователям..."
        />
        <div class="users__sort">
          Показывать
          <el-select
            v-model="pageSize"
            :value="pageSize"
            @change="pageSizeChangeHandler"
          >
            <el-option
              v-for="(item, idx) in options"
              :key="item + idx"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
          из {{ this.users.length }}
        </div>
      </div>
      <ul class="users__list" v-if="displayedUsers.length">
        <li class="users__item" v-for="user in displayedUsers" :key="user.id">
          <router-link class="users__link" :to="'user/' + user.id">
            <div class="users__image">
              <img
                v-if="user.avatar"
                :src="user.avatar"
                :alt="user.first_name"
              />
            </div>
            <div class="users__name">
              <span class="name"
                >{{ user.first_name }} {{ user.last_name }}</span
              >
              <span class="email">{{ user.email }}</span>
            </div>
          </router-link>
        </li>
      </ul>
      <div v-else>
        <p>Нету пользователей</p>
      </div>
      <el-pagination
        ref="pagination"
        layout="prev, pager, next"
        hide-on-single-page
        :current-page="+this.$route.query.page || 1"
        :page-size="pageSize"
        @current-change="pageChangeHandler"
        :total="filteredWorks.length"
      >
      </el-pagination>
    </main>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      pageSize: 3,
      options: [1, 2, 3, 4, 5],
      searchValue: "",
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    filteredWorks() {
      return this.users.filter((user) => {
        const fullName = user.first_name + " " + user.last_name;
        if (this.searchValue === "") return true;
        else
          return (
            fullName.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1
          );
      });
    },
    displayedUsers() {
      let page = +this.$route.query.page || 1;
      let perPage = this.pageSize;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return this.filteredWorks.slice(from, to);
    },
  },
  methods: {
    pageChangeHandler(val) {
      this.$router.push({ path: "/", query: { page: val } });
    },
    pageSizeChangeHandler() {
      if (this.$route.query.page && this.$route.query.page !== 1) {
        this.$router.replace({ query: null });
      }
    },
  },
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
  a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }
}
.users__main {
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 90px);
}
.users__search {
  display: flex;
  input {
    flex-grow: 1;
    height: 35px;
    border-radius: 20px;
    padding: 0 25px;
    background: #f5f5f5;
    border: 1px solid #f5f5f5;
    &:focus {
      outline: none;
    }
  }
}
.users__sort {
  margin-left: 10px;
  font-size: 14px;
  .el-input {
    width: 60px;
    max-width: 60px;
  }
  .el-input__inner {
    padding: 0 15px;
  }
  .el-input__suffix {
    display: flex;
    align-items: center;
  }
}
.users__list {
  margin-top: 20px;
  padding: 0;
  flex-grow: 1;
}
.users__item {
  list-style: none;
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid #eee;
}
.users__link {
  display: flex;
  flex-grow: 1;
  height: 100%;
  padding: 10px 0;
  color: #3b3b3b;
  text-decoration: none;
  text-align: left;
}
.users__image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #eee;
  margin-right: 15px;
  overflow: hidden;
  img {
    max-width: 100%;
    min-height: 100%;
  }
}
.users__name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .name {
    display: inline-block;
    margin-bottom: 2px;
  }
  .email {
    font-size: 13px;
    color: #aaa;
  }
}
.users__action {
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 15px;
  }
}
</style>
