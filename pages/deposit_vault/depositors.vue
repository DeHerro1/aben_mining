<template>
  <div class="deposit_table">
    <h3>Depositors</h3>
    <el-card class="mt-20">
      <el-card class="mt-20" style="min-height: 400px">
        <el-table
          v-loading="depositors.length < 1"
          :data="depositors"
          stripe
          :default-sort="{ prop: 'name', order: 'descending' }"
        >
          <!-- <el-table-column label="ID"> -->
          <!-- <template slot-scope="scope">
              <div
                class="d-flex"
                style="cursor: pointer"
                @click="getDepositorDetails(scope.row._id)"
              >
                <span class="d-block mt-10">{{ scope.row._id }}</span>
              </div>
            </template> -->
          <!-- </el-table-column> -->
          <el-table-column label="Name">
            <template slot-scope="scope">
              <div
                class="d-flex"
                style="cursor: pointer"
                @click="getDepositorDetails(scope.row._id)"
              >
                <span class="d-block">
                  {{ scope.row.firstName }}
                  {{ scope.row.lastName }}
                </span>
              </div>
            </template>
          </el-table-column>

          <el-table-column label="Email">
            <template slot-scope="props">
              <div
                class="d-flex clickable"
                @click="getDepositorDetails(props.row._id)"
              >
                <span>
                  {{ props.row.email }}
                </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="Phone Number">
            <template slot-scope="scope">
              <div
                style="cursor: pointer"
                @click="getDepositorDetails(scope.row._id)"
              >
                <span> {{ scope.row.phone }} </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="Item Type">
            <template slot-scope="scope">
              <div
                style="cursor: pointer"
                @click="getDepositorDetails(scope.row._id)"
              >
                <span>{{ scope.row.item_type }} </span>
              </div>
            </template>
          </el-table-column>

          <el-table-column label="Item Value">
            <template slot-scope="props">
              <div
                class="d-flex clickable"
                @click="getDepositorDetails(props.row._id)"
              >
                <span>
                  {{ props.row.item_value }}
                </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="Deposit Date ">
            <template slot-scope="props">
              <div
                class="d-flex clickable"
                @click="getDepositorDetails(props.row._id)"
              >
                <span>
                  {{ $moment(props.row.deposit_date).format('DD MMM, YY') }}
                </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="Location">
            <template slot-scope="scope">
              <div
                style="cursor: pointer"
                @click="getDepositorDetails(scope.row._id)"
              >
                <span>
                  {{ scope.row.city }}, {{ scope.row.state }},
                  {{ scope.row.country }}
                </span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-card>

      <!-- <div class="mt-40 center pb-10">
        <el-pagination
          background
          :page-sizes="[15, 30, 50]"
          :page-size="15"
          layout="prev, pager, next, sizes, total"
          :total="0"
        >
        </el-pagination>
      </div> -->
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DepositorsPage',
  layout: 'dashboard',
  data() {
    return {
      loading: false,
      tableLoading: false,
      search: '' as string,
      depositors: [],
    }
  },
  created() {
    this.getDepositors()
  },
  methods: {
    getDepositorDetails(id: string) {
      //   this.$router.push(`deposit_vault/depositor/${id}`)
      this.$router.push({
        name: 'depositor_details',
        query: {
          id,
        },
      })
    },
    async getDepositors() {
      this.loading = true
      try {
        const depositorsResponse = await this.$axios.get('/deposits')
        console.log(depositorsResponse)
        this.depositors = depositorsResponse.data.data

        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.deposit_table {
  //   min-height: 600px;
  padding-top: 20px;
  height: 500px;
  margin: 20px 20px 0 310px;
}
</style>
