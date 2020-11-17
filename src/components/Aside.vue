<template>
  <aside class="aside_show">
    <img src="../assets/logo.png" alt="" class="logo" width="121"/>
    <label >
      <input type="text" class="search" />
    </label>
    <div class="aside_content">
      <ul class="">
        <li>
          <h3>开始</h3>
          <ul>
            <li>
              <router-link
                  :to="{ path: '/doc' }"
                  class="selected one_leave"
                  @click="open">
                安装
              </router-link>
              <ul class="two_level ">
                <li>
                  <router-link :to="{ path: '/doc' }">介绍2</router-link>
                </li>
                <li>
                  <router-link :to="{ path: '/doc' }">介绍2</router-link>
                </li>
                <li>
                  <router-link :to="{ path: '/doc' }">介绍2</router-link>
                </li>
                <li>
                  <router-link :to="{ path: '/doc' }">介绍2</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link
                  :to="{ path: '/doc' }"
                  class="one_leave"
                  @click="open">
                介绍
              </router-link>
              <ul class="two_level hidden">
                <li>
                  <router-link :to="{ path: '/doc' }">介绍2</router-link>
                </li>
                <li>
                  <router-link :to="{ path: '/doc' }">介绍2</router-link>
                </li>
                <li>
                  <router-link :to="{ path: '/doc' }">介绍2</router-link>
                </li>
                <li>
                  <router-link :to="{ path: '/doc' }">介绍2</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h3>样式</h3>
          <ul>
            <li>
              <router-link :to="{ path: '/doc' }" class="one_leave">
                安装
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <h3>组件</h3>
          <ul>
            <li>
              <router-link :to="{ path: '/doc' }" class="selected one_leave">
                按钮
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'Aside',
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
  }
};
</script>
<style scoped lang="scss">
@import "../assets/scss/var";

aside {
  height: 100vh !important;
  min-width: 260px;
  max-height: 100%;
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

    h3 {
      margin: 20px 0;
    }

    .selected {
      color: $light-color;
      font-weight: 600;
    }

    .one_leave {
      display: inline-block;

      &:hover {
        &:after {
          opacity: 1;
        }
      }
    }

    .hidden {
      display: none;
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

    .logo {
      display: none !important;
    }

    .search {
      display: none;
    }
  }

  .aside_show {
    display: block;

  }
}
</style>
