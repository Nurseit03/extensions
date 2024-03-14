<template>
    <div class="container">
      <div class="content">
        <h1 class="content__title">Toggle</h1>
        <div class="content__buttons">
          <button class="button__off" :class="{'is-active': !active}" @click="setActive(false)">OFF</button>
          <button class="button__on" :class="{'is-active': active}" @click="setActive(true)">ON</button>
        </div>
        <div class="sites">
            <p>Список сайтов</p>
            <textarea rows="8" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" v-model="list"></textarea>
        </div>
        <button type="button" class="button__save" @click="saveList">Сохранить список</button>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: true,
            list: "example.com",
        }
    },
    created() {
        chrome.storage.sync.get(['toggleSitesActive', 'toggleSitesList'], (result) => {
            this.active = result.toggleSitesActive;
            this.list = result.toggleSitesList;
        });
    },
    methods: {
        setActive(active) {
            this.active = active;
            chrome.storage.sync.set({
                toggleSitesActive: active
            }, () => {});

            chrome.browserAction.setIcon({
                path: this.icons[active ? 'active' : 'inactive']
            });
        },
        saveList() {
            chrome.storage.sync.set({
                toggleSitesList: this.list
            }, () => {});
        }
    }
}
</script>