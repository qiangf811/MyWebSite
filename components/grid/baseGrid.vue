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
        <b-btn @click.prevent="newMethod">New</b-btn>
      </b-button-group>
    </b-button-toolbar>
    <b-table class="table" id="table"
      striped
      bordered
      hover
      refreshed
      head-variant='light'
      :items="dataProvider"
      no-provider-sorting
      no-provider-filtering
      :fields="fields"
      :filter="filter"
      @row-dblclicked="rowdbClick"
      @row-clicked="rowClick" ref="table">
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
    <confirmbox ref="confirm" :confrimAction="confrimAction" :data="rowItem" :msg="confirmMsg" />
  </div>
</template>
<script>
import confirmbox from '~/components/confirm/confirm'
export default {
  name: "",
  components: {
    confirmbox
  },
  data: () => ({

  }),
  props: ['newMethod','dataProvider','fields','filter','rowdbClick','rowClick','confrimAction','rowItem','confirmMsg']
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
