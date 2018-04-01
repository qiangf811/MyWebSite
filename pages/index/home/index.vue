<template>
<div>
  <div class="bannerContainer">
    <Banner/>
  </div>
  <Skills :skills="basedata.skills" />
  <CardInfo :cardInfo="basedata.cardInfo"/>
  <Ourservice :services="basedata.services"/>
</div>
</template>
<script>
import data from '~/api/data.json'
import Banner from '~/components/banner/banner'
import Skills from '~/components/skills/skills'
import CardInfo from '~/components/cardInfo/cardInfo'
import Ourservice from '~/components/ourservice/ourservice'
export default {
  name: "",
  data: () => ({
    basedata: data

  }),
  components: {
    Banner,
    Skills,
    CardInfo,
    Ourservice
  }
}
</script>
<style lang="stylus" scoped>
</style>
