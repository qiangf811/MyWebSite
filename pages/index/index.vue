<template>
<div>
  <Banner/>
  <CardInfo :cardInfo="basedata.cardInfo" :skills="basedata.skills"/>
  <Ourservice :services="basedata.services" />
  <Photo :photoes="basedata.photoes" />
  <Experience :experiences="basedata.experiences" />
  <Blog :blogs="basedata.blogs" />
  <Contact />
</div>
</template>
<script>
import Banner from '~/components/banner/banner'
import CardInfo from '~/components/cardInfo/cardInfo'
import Ourservice from '~/components/ourservice/ourservice'
import Photo from '~/components/photo/photo'
import Experience from '~/components/experience/experience'
import Blog from '~/components/blog/blog'
import Contact from '~/components/contact/contact'
import axios from 'axios'
export default {
  data: () => ({
    basedata: []
  }),
  async asyncData ({error}) {
    try {
      let {data} = await axios.get(`http://localhost:${process.env.PORT}/api/indexData`)
      return {
        basedata: data
      }
    } catch (e) {
      error({ statusCode: 404, message: `Post ERRP:${e}` })
    }
  },
  components: {
    Banner,
    CardInfo,
    Ourservice,
    Photo,
    Experience,
    Blog,
    Contact
  }
}
</script>
<style lang="stylus" scoped>
</style>
