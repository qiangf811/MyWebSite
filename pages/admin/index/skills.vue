<template>
<div id="">
  <b-button-toolbar aria-label="Toolbar with button groups and input groups">
    <b-form-group horizontal label="Filter" class="mb-0">
      <b-input-group>
        <b-form-input v-model="filter" placeholder="Type to Search" />
        <b-input-group-append>
          <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
    <b-button-group size="sm" class="mx-1">
      <b-btn @click.prevent="newSkill">New</b-btn>
    </b-button-group>
  </b-button-toolbar>
  <b-table class="table" id="table" striped bordered hover refreshed head-variant='light' :items="myProvider" no-provider-sorting no-provider-filtering :fields="fields" :filter="filter" @row-dblclicked="rowdbClick" @row-clicked="rowClick" ref="table">
    <template slot="index" slot-scope="data">
     {{data.index + 1}}
   </template>
    <template slot="tools" slot-scope="data">
     <b-button variant="success" class="grid-btn Edit">Edit</b-button>
     <b-button variant="danger" class="grid-btn Delete">Delete</b-button>
    </template>
    <template slot="table-caption">
      This is a table caption at the top.
    </template>
  </b-table>
  <skillForm ref="formsss" @refresh="refresh"></skillForm>
  <confirmbox ref="confirm" :confrimAction="deleteUser" :data="rowItem" :msg="deleteTip" />
</div>
</template>
<script>
import axios from 'axios'
import _ from 'lodash'
import confirmbox from '~/components/confirm/confirm'
import skillForm from '~/components/form/skill'
export default {
  components: {
    skillForm,
    confirmbox
  },
  data() {
    return {
      isEdit: false,
      filter: null,
      deleteTip: '',
      rowItem: {},
      fields: [
        'index',
        {
          key: 'name',
          sortable: true
        },
        {
          key: 'value'
        },
        'tools'
      ]
    }
  },
  methods: {
    async myProvider(ctx) {
      try {
        let {
          data
        } = await axios.get('/api/skills')
        return data
      } catch (e) {
        return []
      }
    },
    rowClick(item, index, e) {
      if (e.target.className.includes('Delete')) {
        this.deleteTip = '你确定删除此项数据吗？'
        this.rowItem = item
        this.$refs.confirm.showModal()
      } else if (e.target.className.includes('Edit')) {
        this.$refs.formsss.form = _.cloneDeep(item)
        this.$refs.formsss.showModal()
      }
    },
    rowdbClick(item, index, event) {
      this.$refs.formsss.form = _.cloneDeep(item)
      this.$refs.formsss.showModal()
    },
    newSkill() {
      this.$refs.formsss.showModal(true)
    },
    deleteUser(skill) {
      return new Promise((resolve, reject) => {
        this.$http.delete('/api/deleteSkill?id=' + skill._id).then(response => {
          if (response.data.status === 200) {
            this.refresh()
            resolve()
          } else {
            reject()
          }
        }).catch((err) => {
          reject(err)
        })
      })
    },
    refresh() {
      this.$root.$emit('bv::refresh::table', 'table')
    }
  }
}
</script>
<style lang="css" scoped>
.table{
  text-align: center;
  margin-top: 20px;
}
.grid-btn{
  margin: 0 4px;
}
</style>
