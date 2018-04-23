<template>
<div id="">
  <b-button-toolbar>
    <b-form-group horizontal label="Filter" class="mb-0">
      <b-input-group>
        <b-form-input v-model="filter" placeholder="Type to Search" />
        <b-input-group-append>
          <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
    <b-button-group size="sm" class="mx-1">
      <b-btn @click.prevent="newRow">New</b-btn>
    </b-button-group>
  </b-button-toolbar>
  <b-table class="table" id="table" ref="table"
    striped bordered hover refreshed head-variant='light' no-provider-sorting no-provider-filtering
    :items="dataProvider"
    :fields="fields"
    :filter="filter"
    @row-dblclicked="rowdbClick"
    @row-clicked="rowClick">
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
  <confirmbox ref="confirm" :confrimAction="deleteRow" :confirmData="rowItem" />
</div>
</template>
<script>
import confirmbox from '~/components/confirm/confirm'
import _ from 'lodash'
export default {
  components: {
    confirmbox
  },
  data: () => ({
    isNew: false,
    rowItem: {}
  }),
  props: ['fields', 'filter', 'dataProvider', 'confrimAction', 'formVue'],
  methods: {
    rowClick (item, index, e) {
      if (e.target.className.includes('Delete')) {
        this.rowItem = item
        this.$refs.confirm.showModal()
      } else if (e.target.className.includes('Edit')) {
        this.$refs.form.form = _.cloneDeep(item)
        this.$refs.form.showModal()
      }
    },
    rowdbClick (item, index, e) {
      this.$refs.form.form = _.cloneDeep(item)
      this.$refs.form.showModal()
    },
    newRow () {
      this.$refs.form.showModal(true)
    },
    deleteRow (menu) {
      return new Promise((resolve, reject) => {
        this.$http.delete('/api/deleteMenu?id=' + menu._id).then(response => {
          if (response.data.status === 200) {
            this.refresh()
            resolve()
          } else {
            reject(new Error())
          }
        }).catch((err) => {
          reject(err)
        })
      })
    },
    refresh () {
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
