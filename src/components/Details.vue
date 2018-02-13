<template lang="pug">
  Row
    Col(
      :xs="{span: 24}"
      :sm="{span: 20, offset: 2}"
      :lg="{span: 22, offset: 1}"
    )
      Row(type="flex" justify="start")
        Col
          Button(
            @click="$router.go(-1)"
            type="primary"
          ) Назад
      Card(:bordered="true")
        p(slot="title") {{ id }}
        | {{ selectedObj }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['id'],
  computed: {
    ...mapState(['selectedObj'])
  }
}
</script>
