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
      <b-btn @click.prevent="newUser">New</b-btn>
    </b-button-group>
  </b-button-toolbar>
  <b-table class="table" id="table" striped bordered hover refreshed head-variant='light' :items="myProvider" no-provider-sorting no-provider-filtering :fields="fields" :filter="filter" @row-dblclicked="rowdbClick" @row-clicked="rowClick" @filtered="onFiltered" ref="table">
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
  <userFrom ref="userForm" @refresh="refresh"></userFrom>
  <confirmbox ref="confirm" :confrimAction="deleteUser" :data="rowItem" :msg="deleteTip" />
</div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import _ from 'lodash'
import userFrom from '~/components/form/userFrom'
import confirmbox from '~/components/confirm/confirm'
export default {
  components: {
    userFrom,
    confirmbox
  },
  data() {
    return {
      filter: null,
      deleteTip: '',
      rowItem: {},
      fields: [
        'index',
        {
          label: 'userName',
          key: 'username',
          sortable: true
        },
        {
          label: 'role',
          key: 'role',
          formatter: 'formatterRoleName'
        },
        {
          label: 'phoneNumber',
          key: 'phoneNumber',
        },
        {
          label: 'createAt',
          key: 'meta.createAt',
          formatter: 'formatterTime',
          sortable: true
        },
        {
          label: 'updateAt',
          key: 'meta.updateAt',
          formatter: 'formatterTime',
          sortable: true
        },
        'tools'
      ]
    }
  },
  methods: {
    async myProvider(ctx) {
      try {
        let {data} = await axios.get('http://localhost:8080/api/users')
        return data
      } catch (e) {
        return []
      }
    },
    formatterRoleName(value) {
      let roleName
      switch (value) {
        case 3:
          roleName = '超级管理员';
          break;
        case 2:
          roleName = '管理员';
          break;
        case 1:
          roleName = '会员用户';
          break;
        default:
          roleName = '普通用户'
      }
      return roleName
    },
    formatterTime(time) {
      return moment(time).format('YYYY-MM-DD hh:mm')
    },
    onFiltered(filteredItems) {
      // this.totalRows = filteredItems.length
    },
    rowClick(item, index, e) {
      if (e.target.className.includes('Delete')) {
        this.deleteTip = '你确定删除改用户吗？'
        this.rowItem = item
        this.$refs.confirm.showModal()
      } else if (e.target.className.includes('Edit')) {
        this.$refs.userForm.form = _.cloneDeep(item)
        this.$refs.userForm.showModal()
      }
    },
    rowdbClick(item, index, event) {
      this.$refs.userForm.form = _.cloneDeep(item)
      this.$refs.userForm.showModal()
    },
    newUser() {
      this.$refs.userForm.showModal(true)
    },
    deleteUser(user) {
      return new Promise((resolve, reject) => {
        this.$http.delete('/api/deleteUser?id=' + user._id).then(response => {
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
    refresh(){
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
