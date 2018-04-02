<template>
<div>
  <Banner/>
  <Skills :skills="basedata.skills" />
  <CardInfo :cardInfo="basedata.cardInfo" />
  <Ourservice :services="basedata.services" />
  <Photo :photoes="basedata.photoes" />
  <Experience :experiences="basedata.experiences" />
  <Blog :blogs="basedata.blogs" />
  <Contact />
</div>
</template>
<script>
import data from '~/api/data.json'
import Banner from '~/components/banner/banner'
import Skills from '~/components/skills/skills'
import CardInfo from '~/components/cardInfo/cardInfo'
import Ourservice from '~/components/ourservice/ourservice'
import Photo from '~/components/photo/photo'
import Experience from '~/components/experience/experience'
import Blog from '~/components/blog/blog'
import Contact from '~/components/contact/contact'
export default {
  name: "",
  data: () => ({
    basedata: data
  }),
  components: {
    Banner,
    Skills,
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
