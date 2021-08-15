<template>
  <Disclosure as="nav" class="bg-white dark:bg-gray-800" v-slot="{ open }" id="nav">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
<!--            <img class="block lg:hidden h-8 w-auto" :src="Logo" alt="Papyrus" />-->
            <img class="dark:hidden h-6 md:h-9 w-auto" :src="LogoFull" alt="Papyrus" />
          </div>
          <div class="hidden sm:block sm:ml-12">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                 :class="[item.current ? 'bg-primary' : 'text-gray-800 dark:text-gray-300 hover:bg-secondary hover:text-white',
                 'px-3 py-2 rounded-md text-sm font-medium']"
                 :aria-current="item.current ? 'page' : undefined"
              >
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center pr-2 md::flex md:flex-1 md:justify-end">
          <template v-if="userIsLoggedIn">
            <!-- Notification component -->
            <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="@/assets/placeholder/jeff.png" alt="User Profile Image" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                  </MenuItem>

                  <MenuItem v-slot="{ active }" class="inline-block">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Change Theme</a>
                    <theme-switcher />
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </template>

          <template v-else>
            <div class="flex xl:w-1/4 px-4 xl:px-6">
              <button-base
                :route="'/login'"
              >
                Login
              </button-base>
            </div>
            <theme-switcher class="hidden sm:block"/>
          </template>

        </div>
      </div>
    </div>

<!--    logged out-->
    <div>

    </div>

    <!--    logged in-->
    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="item in navigation"
           :key="item.name"
           :href="item.href"
           :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
           :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </a>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import {
    Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/vue';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';

import LogoFull from '@/assets/logos/logo-full-1.svg';
import Logo from '@/assets/logos/logo.svg';
import ButtonBase from '../ui/ButtonBase';
import ThemeSwitcher from '../ui/buttons/ThemeSwitcher';

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false }
];

export default {
    components: {
        ThemeSwitcher,
        ButtonBase,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        BellIcon,
        MenuIcon,
        XIcon
    },
    data() {
        return {
            userIsLoggedIn: false
        };
    },
    setup() {
        return {
            navigation,
            Logo,
            LogoFull
        };
    }
};
</script>

<style scoped lang="scss">
</style>
