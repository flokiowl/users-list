<template>
    <div class="container">
		<header class="users__header">
			<h1>Список пользователей</h1>
		</header>
		<main class="users__main">
			<div class="users__search">
				<input type="text" placeholder="Поиск по пользователям...">
			</div>
			<ul class="users__list">
				<li class="users__item" v-for="user in users" :key="user.id">
					<router-link class="users__link" :to="'user/' + user.id">
						<div class="users__image">
							<img v-if="user.image" :src="user.image" :alt="user.name">
						</div>
						<div class="users__name">
							<span class="name">{{user.name}}</span>
							<span class="role">{{user.role}}</span>
						</div>
					</router-link>
				</li>
			</ul>
		</main>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: "UserList",
    data() {
        return {
            users: null
		};
	},
	computed: {
		// users () {
        //     return this.$store.getters.users
		// }
	},
    methods: {},
    mounted () {
        axios.get('https://demo7931371.mockable.io/users').then(response => {
            console.log(response)
            this.users = response.data.data
        })
        
    }
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
.users__list {
	margin-top: 20px;
	padding: 0;
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
	.role {
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
