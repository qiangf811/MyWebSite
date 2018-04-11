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
import axios from 'axios'
export default {
  data: () => ({
    basedata: data
  }),
  asyncData () {
    // We can return a Promise instead of calling the callback
    return axios.get('http://localhost:8080/api/skills')
      .then((res) => {
        return { basedata: res.data }
      })
  },
  // created() {
  //   this.$http.get('/api/skills').then(response => {
  //     console.log(response)
  //     this.basedata = response.data
  //   })
  // },
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
