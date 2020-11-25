<template>
  <aside class="aside_show">
    <img src="../assets/logo.png" alt="" class="logo" width="121"/>
    <label style="position: relative">
      <input type="text" class="search" v-model="keyword" />
      <svg class="icon search-icon" aria-hidden="true" @click="clearKeyword">
        <use xlink:href="#iconclose-outline"></use>
      </svg>
    </label>
    <div class="aside_content" v-if="keyword===''" >
      <ul>
        <li v-for="item in asideData">
          <h3>{{ item.name }}</h3>
          <ul class="two_level">
            <li v-for="content in item.children">
              <router-link :to="{ path: `${content.path}` }" class="one_leave">
                {{ content.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="aside_content " v-else>
      <ul class="two_level search-res">
        <li v-for="content in arr">
          <router-link :to="{ path: `${content.path}` }" class="one_leave">
            {{ content.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import {
  inject,
  watchEffect,
  onMounted,
  computed,
  ref,
  reactive,
  toRefs
} from 'vue';
import {AsideData} from '../Doc/AsideData';

export default {
  name: 'Aside',
  props: {
    fullPath: String
  },
  setup(props: any) {
    let a: { name: string; path: string }[] = [];
    const keyword = ref('');
    let asideData = reactive(AsideData());
    let arr = ref<{ name: string; path: string }[]>([])
    AsideData().forEach((i) => {
      i.children.forEach((item) => {
        a.push(item);
      });
    });

    const searchResult = computed({
      get: () => a,
      set: val => {
        arr.value = val;
      }
    });
    const clearKeyword=()=>{
      keyword.value = ''
    }
    watchEffect(() => {
      searchResult.value = a.filter(
          (item) => item.name.indexOf(keyword.value) !== -1
      );
    });

    return {
      asideData,
      keyword,
      searchResult,
      arr,
      clearKeyword
    };
  }
};
</script>

<style scoped lang="scss">
.router-link-exact-active {
  color: $light-color !important;
}

aside {
  a {
    color: $color;
    transition: all 0.2s ease 0.02s;
    display: inline-blocks;

    &::after {
      opacity: 0;
      width: 100%;
    }

    &:focus {
      color: $light-color;
      transition: all 0.2s ease 0.02s;
    }
  }

  height: 100vh;
  min-width: 260px;
  overflow-y: auto;
  box-shadow: 0 0 2px rgba(#000, 0.3);
  background-color: #fff;
  padding-left: 20px;
  transition: all 0.4s cubic-bezier(0.68, 0.18, 0.53, 0.18) 0.1s;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $logo-color;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;

    &:hover {
      background-color: $border-color;
    }
  }

  .logo {
    display: block;
    width: 50px;
    margin: 20px auto;
  }
  .icon{
    position: absolute;
    right: 0;
    height: 20px;
    width: 20px;
    margin:5px 5px;
    fill:rgba($color,.2);
    border-radius: 50%;
    transition: all .15s;
    &:hover{
      background-color: rgba($color,.2);
      fill: #fff;
    }
  }
  .search {
    height: 30px;
    width: 200px;
    border: 1px solid $border-color;
    outline: none;
    transition: border 0.2s ease 0.02s;
    border-radius: 3px;
    padding: 0 10px;
    &:focus {
      border-color: $light-color;
    }
  }
  .aside_content {
    text-align: left;
    &>.search-res{
      padding-top: 20px;
    }
    h3 {
      margin: 20px 0;
    }

    .one_leave {
      display: inline-block;

      &:hover {
        &:after {
          opacity: 1;
        }
      }
    }

    .two_level {
      margin-left: 20px;
      margin-right: 20px;
      line-height: 1.5rem;

      & > li {
        margin: 6px 0;
      }
    }
  }
}

@media (max-width: 650px) {
  aside {
    position: absolute;
    z-index: 90;

    .logo {
      display: none !important;
    }

    .search {
      display: none;
    }
    .search-icon{
      display: none;
    }
  }

  .aside_show {
    display: block;
  }
}
</style>
