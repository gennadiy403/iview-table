<template lang="pug">
  Row
    Col(
      :xs="{span: 24}"
      :sm="{span: 20, offset: 2}"
      :lg="{span: 22, offset: 1}"
    )
      Input(
        v-model="searchPhrase"
        icon="ios-search"
        placeholder="Найти..."
      )
      Table(
        @on-row-click="getDetails"
        :columns="columns"
        :data="filteredData"
        no-data-text="По вашему запросу ничего не найдено"
      )
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      searchPhrase: ''
    }
  },
  computed: {
    ...mapState([
      'columns',
      'data'
    ]),
    filteredData (v) {
      const lowSearch = this.searchPhrase.toLowerCase()
      return this.data.filter(row => {
        return Object.values(row).some(val => String(val).toLowerCase().includes(lowSearch))
      })
    }
  },
  methods: {
    ...mapMutations([
      'setSelected'
    ]),
    getDetails (obj) {
      this.setSelected(obj)
      this.$router.push(`details/${obj.id}`)
    }
  }
}
</script>
