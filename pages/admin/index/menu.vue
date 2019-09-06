<template>
<div id="menu">
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
    striped bordered hover refreshed head-variant='light'
    no-provider-sorting no-provider-filtering
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
       <b-button variant="success" class="grid-btn sort" id="Up">Up</b-button>
       <b-button variant="danger" class="grid-btn sort" id="Down">Down</b-button>
    </template>
    <template slot="table-caption">
        This is a table caption at the top.
    </template>
  </b-table>
  <menuForm ref="menuForm" @refresh="refresh"></menuForm>
  <confirmbox ref="confirm" :confrimAction="deleteRow" :confirmData="rowItem" />
</div>
</template>
<script>
import axios from 'axios'
import _ from 'lodash'
import menuForm from '~/components/form/menuForm'
import confirmbox from '~/components/confirm/confirm'
export default {
  data: () => ({
    filter: null,
    rowItem: {},
    fields: [
      'index',
      {
        key: 'name'
      },
      {
        key: 'href'
      }, {
        label: 'permission',
        key: 'role',
        formatter: function (role) {
          let roleName
          switch (role) {
            case 3:
              roleName = '超级管理员'
              break
            case 2:
              roleName = '管理员'
              break
            case 1:
              roleName = '会员用户'
              break
            default:
              roleName = '普通用户'
          }
          return roleName
        }
      },
      'tools'
    ],
    async dataProvider () {
      try {
        let {
          data
        } = await axios.get('/api/menu')
        return data
      } catch (e) {
        return []
      }
    }
  }),
  methods: {
    rowClick (item, index, e) {
      debugger
      if (e.target.className.includes('Delete')) {
        this.rowItem = item
        this.$refs.confirm.showModal()
      } else if (e.target.className.includes('Edit')) {
        this.$refs.menuForm.form = _.cloneDeep(item)
        this.$refs.menuForm.showModal()
      } else if (e.target.className.includes('sort')) {
        let isUp = e.target.id === 'Up' ? 1 : 0
        if ((isUp && index === 0) || (!isUp && index === this.$refs.table._data.localItems.length - 1)) return
        this.$http.post('/api/sortMenu?id=' + item._id + '&isUp=' + isUp).then(response => {
          if (response.status === 200) {
            this.refresh()
          }
        })
      }
    },
    rowdbClick (item, index, e) {
      this.$refs.menuForm.form = _.cloneDeep(item)
      this.$refs.menuForm.showModal()
    },
    newRow () {
      this.$refs.menuForm.showModal(true)
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
  },
  components: {
    menuForm,
    confirmbox
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
