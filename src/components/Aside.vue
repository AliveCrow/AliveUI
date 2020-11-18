<template>
  <aside class="aside_show">
    <img src="../assets/logo.png" alt="" class="logo" width="121" />
    <label>
      <input type="text" class="search" />
    </label>
    <div class="aside_content">
      <ul class="">
        <li>
          <h3>开始</h3>
          <ul>
            <li>
              <router-link
                :to="{ path: '/' }"
                class="one_leave"
                :class="{ selected: fullPath === '/' }"
              >
                介绍
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ path: '/Use' }"
                class="one_leave"
                :class="{ selected: fullPath === '/Use' }"
              >
                下载与使用
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <h3>样式</h3>
          <ul>
            <span style="margin: 5px 0">常用元素</span>
            <li>
              <ul class="two_level">
                <li>
                  <router-link :to="{ path: '/' }" class="one_leave"
                    >标题</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ path: '/' }" class="one_leave"
                    >文字</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ path: '/' }" class="one_leave"
                    >按钮</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ path: '/' }" class="one_leave"
                    >漂浮提示</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h3>组件</h3>
          <ul>
            <li>
              <ul class="two_level">
                <li>
                  <router-link
                    to="/Switch"
                    class="one_leave"
                    :class="{ selected: fullPath === '/Switch' }"
                    >Switch组件</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ path: '/Button' }"
                    class="one_leave"
                    :class="{ selected: fullPath === '/Button' }"
                    >按钮</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ path: '/' }" class="one_leave"
                    >文字</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ path: '/' }" class="one_leave"
                    >漂浮提示</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { inject, Ref, onMounted, computed } from "vue";
import router from "/@/router";

export default {
  name: "Aside",
  props: {
    fullPath: String,
  },
  setup(props) {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const fullPath = computed({
      get: () => router.currentRoute.value.fullPath,
      set: (val) => {
        return val;
      },
    });
    onMounted: {
      fullPath.value = router.currentRoute.value.fullPath;
    }
    return {
      fullPath,
    };
  },
};
</script>

<style scoped lang="scss">
aside {
  a {
    color: $color;
    transition: all 0.2s ease 0.02s;
    display: inline-block;
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
