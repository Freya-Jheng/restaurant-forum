<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <router-link :to='{
            name:"user",
            params: {
              id: comment.User.id
            }
          }'>
            {{comment.User.name}}
          </router-link>
        </h3>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">
          {{comment.createdAt | fromNow}}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

import { fromNowFilter } from '../utilities/mixins'

export default {
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentUser: dummyUser.currentUser,
    }
  },
  mixins: [ fromNowFilter ],
  methods: {
    handleDeleteButtonClick(commentId){
      console.log('handleDeleteButtonClick', commentId)
      console.log('rComments',this.restaurantComment)
      // 在這裡要向伺服器請求刪除id為commentId的資料
      // 用emit觸發父層事件
      this.$emit('after-delete-comment', commentId)
    }
  }
}
</script>
