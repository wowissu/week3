<script lang="ts">
import { defineComponent } from 'vue'
import HomeView from './views/HomeView.vue'
// import HelloWorld from './components/HelloWorld.vue';
// import MyButton from '@/components/MyButton.vue'
// import MyInput from '@/components/MyInput.vue'
// import FallthroughAttributes from '@/components/FallthroughAttributes.vue'
// import MySlot from '@/components/MySlot.vue'
// import MyTabs from '@/components/MyTabs/MyTabs.vue'
import { AsyncMyTabs } from '@/components/MyTabs/AsyncMyTabs'
import MyTab from '@/components/MyTabs/MyTab.vue'

export default defineComponent({
  components: {
    HomeView,
    AsyncMyTabs,
    // MyTabs,
    MyTab
    // MySlot
    // HelloWorld,
    // MyButton,
    // MyInput,
    // FallthroughAttributes,
    // MyTabs,
    // MyTab
  },
  data() {
    return {
      showTab: false,
      myText: '',
      currentTabName: 'first'
    }
  },
  methods: {
    onAddBook(payload: any) {
      console.log(payload);
    }
  },
  mounted() {
    setTimeout(() => {
      this.showTab = true
    }, 2000)
  }
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <div>
        <!-- <div>
          <MyButton :text="'我的按鈕'" @addBook="onAddBook"></MyButton>
        </div>
        <div>
          <MyInput v-model.capitalize="myText"></MyInput>
        </div> -->

        <!-- <div>
          <FallthroughAttributes class="my-class" text="Fallthrough Attributes">
        </div> -->

        <!-- <MySlot>
          <template #header="{ foo }">
            <div>
              header {{ foo }}
            </div>
          </template>
          <template #default>
            body
          </template>
          <template #footer>
            footer
          </template>
        </MySlot> -->

        <AsyncMyTabs v-if="showTab">
          <MyTab name="first" >
            first
          </MyTab>
          <MyTab name="second" >
            second
          </MyTab>
        </AsyncMyTabs>
      </div>

      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <HomeView  />
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
