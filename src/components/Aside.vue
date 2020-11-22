<template>
  <aside class="aside_show">
    <img src="../assets/logo.png" alt="" class="logo" width="121" />
    <label>
      <input type="text" class="search" />
    </label>
    <div class="aside_content">
      <ul class="">
        <li v-for="item in asideData">
          <h3>{{item.name}}</h3>
          <ul class="two_level">
            <li v-for="content in item.children ">
              <router-link :to="{ path: `${content.path}` }"  class="one_leave">
                {{content.name}}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { inject, Ref, onMounted, computed } from "vue";
import router from "../router/index";
import {AsideData} from '../Doc/AsideData'

export default {
  name: "Aside",
  props: {
    fullPath: String,
  },
  setup(props: any) {
    const asideData = AsideData()
    console.log(asideData);
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
      asideData
    };
  },
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
    z-index: 90;
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
