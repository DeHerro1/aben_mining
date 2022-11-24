<template>
  <div class="deposit_table">
    <el-dialog
      title="Create User"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <!-- <h3 class="center py-20" style="font-size: 30px">Login</h3> -->
        <div>
          <div class="pb-20">
            <label for="security_code">Name</label>
            <el-input
              id="security_code"
              v-model="form.name"
              class="mt-5"
            ></el-input>
          </div>
          <div class="pb-20">
            <label for="security_code">Security Code</label>
            <el-input
              id="security_code"
              v-model="form.passcode"
              class="mt-5"
            ></el-input>
          </div>
          <div class="pt-10 pb-20">
            <label for="transaction_code">Transaction Code</label>
            <el-input
              id="transaction_code"
              v-model="form.transaction_code"
              class="mt-5"
            ></el-input>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" :loading="loading" @click="registerUser"
          >Create User</el-button
        >
      </span>
    </el-dialog>
    <div class="d-flex justify_between">
      <h3>Depositors</h3>
      <!-- <el-button type="primary" @click="dialogVisible = true"
        >Create User</el-button
      > -->
    </div>

    <!-- <el-card class="mt-20"> -->
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
                {{ props.row.deposit_date }}
              </span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Tracking Status">
          <template slot-scope="scope">
            <div
              style="cursor: pointer"
              @click="getDepositorDetails(scope.row._id)"
            >
              <span>
                <el-tag
                  :type="scope.row.status == 'pending' ? 'warning' : 'success'"
                  >{{ scope.row.status }}</el-tag
                >
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
    <!-- </el-card> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DepositorsPage',
  layout: 'adminDash',
  data() {
    return {
      loading: false,
      tableLoading: false,
      search: '' as string,
      depositors: [],
      dialogVisible: false,
      form: {
        passcode: '' as string,
        transaction_code: '' as string,
      },
    }
  },
  created() {
    localStorage.getItem('5%5od4pogift')
    this.getDepositors()
  },
  methods: {
    handleClose() {
      this.dialogVisible = false
    },
    getDepositorDetails(id: string) {
      //   this.$router.push(`deposit_vault/depositor/${id}`)
      this.$router.push({
        name: 'depositor_details',
        query: {
          id,
        },
      })
    },
    open2(message: string, messageType: any) {
      this.$message({
        message,
        type: messageType,
      })
    },
    async registerUser() {
      this.loading = true
      try {
        const loginRes = await this.$axios.post(`/users`, this.form)
        console.log('user', loginRes)
        this.open2('User created successful!', 'success')
        this.loading = false
        this.dialogVisible = false
      } catch (error) {
        console.log(error)
        this.open2('All user credentials are required!', 'error')
        this.loading = false
      }
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
$small_screen: 426px;
$medium_screen: 769px;
$laptop_screen: 1024px;
.deposit_table {
  //   min-height: 600px;
  padding-top: 20px;
  height: 500px;
  margin: 20px 20px 0 310px;
  @media (max-width: $laptop_screen) {
    margin-left: 210px;
  }
}
</style>
