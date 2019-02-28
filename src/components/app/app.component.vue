<template>
    <div class="application--wrap">
    </div>
</template>

<script>
    export default {
        // beforeCreate()
        // {
        //     menu.create({
        //         File: {
        //             Refresh: {
        //                 modifiers: "ctrl",
        //                 key: "r",
        //                 click: () =>
        //                 {
        //                     this.refreshData();
        //                 }
        //             },
        //             separator1: null,
        //             Exit: {
        //                 key: "esc",
        //                 click: function()
        //                 {
        //                     nw.App.quit();
        //                 }
        //             }
        //         }
        //     });
        //     this.$on("disable-menu", function(isDisabled = false) {
        //         isDisabled ? menu.disable() : menu.enable();
        //     });
        // },
        // mounted()
        // {
        //     this.$nextTick(async function() {
        //         if (await isInitialized() === false) {
        //             await this.refreshData();
        //             await setInitialized();
        //         }
        //     });
        // },
        // beforeDestroy()
        // {
        //     this.$off();
        // },
        // components: {
        //     AppMain,
        //     AppFooter,
        //     AppSide,
        //     Downloader
        // },
        // data() {
        //     return {
        //         selectedCountryId: null,
        //     };
        // },
        // methods: {
        //     async refreshData()
        //     {
        //         await this.$refs.Downloader.init();
        //         this.refreshSide();
        //         this.changeCountry(null);
        //     },
        //     changeCountry(countryId)
        //     {
        //         this.selectedCountryId = countryId;
        //     },
        //     refreshSide()
        //     {
        //         this.$refs.AppSide.refreshCountryList();
        //     }
        // }
    };
</script>

<style src="vuetify/dist/vuetify.min.css"></style>
<style src="material-icons-base64/index.css"></style>

<style>
    html
    {
        overflow: auto;
    }
</style>
