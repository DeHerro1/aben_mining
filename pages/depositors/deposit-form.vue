<template>
  <div class="login_main_container">
    <div class="login_full_container">
      <div class="login_container">
        <h3 class="center py-20" style="font-size: 30px">Deposit Form</h3>
        <div class="registerForm_form">
          <el-form
            ref="registerForm"
            :model="registerForm"
            label-position="top"
            :rules="validation"
          >
            <div class="personal_info_section pb-20">
              <div class="registerForm_label">
                <h3>Depositor's Details</h3>
              </div>

              <div class="form_div">
                <el-row class="first_last">
                  <el-col :xs="24" :sm="24" class="register_first_name">
                    <el-form-item label="First Name" prop="first_name">
                      <el-input
                        v-model="registerForm.first_name"
                        placeholder="First name"
                        class="w-100"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" class="register_first_name">
                    <el-form-item label="Last Name" prop="last_name">
                      <el-input
                        v-model="registerForm.last_name"
                        placeholder="Last Name"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :xs="24" :sm="24" class="register_first_name">
                    <el-form-item label="City" prop="city">
                      <el-input v-model="registerForm.city" placeholder="City">
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" class="register_first_name">
                    <el-form-item label="Phone number">
                      <el-input
                        v-model="registerForm.phone"
                        type="number"
                        placeholder="0200113399"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :xs="24" :sm="24" class="register_first_name">
                    <el-form-item label="ID Number" prop="id_number">
                      <el-input
                        v-model="registerForm.id_number"
                        placeholder="ID card number"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" class="register_first_name">
                    <el-form-item label="Date of Birth" prop="dob">
                      <div class="d-flex">
                        <el-input
                          v-model="registerForm.day"
                          class="dob_input"
                          type="number"
                          :max="2"
                          placeholder="Day"
                        >
                        </el-input>
                        <el-input
                          v-model="registerForm.month"
                          class="dob_input"
                          type="number"
                          :maxlength="2"
                          placeholder="Month"
                        >
                        </el-input>
                        <el-input
                          v-model="registerForm.year"
                          type="number"
                          :maxlength="4"
                          placeholder="Year"
                        >
                        </el-input>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :xs="24" :sm="24" class="register_first_name">
                    <el-form-item label="Gender" prop="phone">
                      <el-radio v-model="registerForm.gender" label="1"
                        >Female</el-radio
                      >
                      <el-radio v-model="registerForm.gender" label="2"
                        >Male</el-radio
                      >
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" class="register_first_name">
                    <el-form-item label="State" prop="state">
                      <el-input
                        v-model="registerForm.state"
                        placeholder="state"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :xs="24" :sm="24">
                    <el-form-item label="Email address" prop="email">
                      <el-input
                        v-model="registerForm.email"
                        type="email"
                        placeholder="Enter email"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>

            <hr class="hr_rule" />
            <div class="contact_info_section pb-20">
              <div class="registerForm_label">
                <h3>Item Details</h3>
              </div>
              <div class="form_div">
                <el-form-item label="Item Type" prop="item_type">
                  <el-input
                    v-model="registerForm.item_type"
                    placeholder="Name of item"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item label="Quantity">
                  <el-input
                    v-model="registerForm.quantity"
                    type="number"
                    placeholder="Quantity of item"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item label="Deposite Date">
                  <el-date-picker
                    v-model="registerForm.deposit_date"
                    type="date"
                    placeholder="Pick a day"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="Item Value">
                  <el-input
                    v-model="registerForm.item_value"
                    placeholder="item value"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item label="Item Description">
                  <el-input
                    v-model="registerForm.item_description"
                    placeholder="Descriptoin of item"
                  >
                  </el-input>
                </el-form-item>
              </div>
            </div>
            <hr class="hr_rule" />
            <div class="contact_info_section pb-20">
              <div class="registerForm_label">
                <h3>Next of Kin Details</h3>
              </div>
              <div class="form_div">
                <el-form-item label="Kin" prop="item_type">
                  <el-input
                    v-model="registerForm.kin"
                    placeholder="Full Name of Kin"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item label="Relationship">
                  <el-input
                    v-model="registerForm.kin_relationship"
                    placeholder="Relation to Kin"
                  >
                  </el-input>
                </el-form-item>
              </div>
            </div>
            <hr class="hr_rule" />
            <div class="contact_info_section pb-20">
              <div class="registerForm_label">
                <h3>Account Security</h3>
              </div>
              <div class="form_div">
                <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="24">
                    <el-form-item label="Password" prop="password">
                      <el-input v-model="registerForm.password" type="password">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="24">
                    <el-form-item
                      label="Confirm Password"
                      prop="confirm_password"
                    >
                      <el-input
                        v-model="registerForm.confirm_password"
                        type="password"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="mt-20 register_btn">
              <el-button
                class="submit_register_button"
                type="primary"
                :loading="loading"
                @click="submitItem"
                >Submit</el-button
              >
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FormPage',
  layout: 'adminDash',
  data() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const validatePass = (rule: any, value: string, callback: any) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        if ((this as any).registerForm.confirm_password !== '') {
          ;(this as any).$refs.registerForm.validateField('confirm_password')
        }
        callback()
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const validatePass2 = (rule: any, value: string, callback: any) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== (this as any).registerForm.password) {
        callback(new Error("Password don't match!"))
      } else {
        callback()
      }
    }
    return {
      checked: false as boolean,
      loading: false as boolean,
      registerForm: {
        first_name: '' as string,
        last_name: '' as string,
        city: '' as string,
        dob: '' as string,
        email: '' as string,
        password: '' as string,
        gender: '' as string,
        state: '' as string,
        item_type: '' as string,
        item_description: '' as string,
        item_value: '' as string,
        quantity: '' as string,
        deposit_date: '' as string,
        kin: '' as string,
        kin_relationship: '' as string,
        confirm_password: '',
        phone: '' as string,
        id_number: '' as string,
        day: '' as string,
        month: '' as string,
        year: '' as string,
      },
      validation: {
        email: [
          {
            required: true,
            type: 'email',
            message: 'Please enter valid email',
            trigger: ['blur', 'change'],
          },
          { min: 5, message: 'Length should be 5 or more', trigger: 'blur' },
        ],
        first_name: [
          {
            required: true,
            message: 'Please enter your first name',
            trigger: ['blur', 'change'],
          },
        ],
        last_name: [
          {
            required: true,
            message: 'Please enter your last name',
            trigger: ['blur', 'change'],
          },
        ],
        password: [{ validator: validatePass, trigger: 'blur' }],
        confirm_password: [{ validator: validatePass2, trigger: 'blur' }],
      },
    }
  },
  methods: {
    open2(message: string) {
      this.$message({
        message,
        type: 'success',
      })
    },
    async submitItem() {
      this.loading = true
      try {
        const form = this.registerForm
        const data = {
          firstName: form.first_name,
          lastName: form.last_name,
          city: form.city,
          phone: form.phone,
          id_number: form.id_number,
          dob: `${form.day}/${form.month}/${form.year}`,
          gender: form.gender,
          state: form.state,
          email: form.email,
          item_type: form.item_type,
          item_description: form.item_description,
          item_value: form.item_value,
          quantity: form.quantity,
          deposit_date: form.deposit_date,
          next_of_kin: form.kin,
          relationship: form.kin_relationship,
          status: 'pending',
          password: form.password,
          confirm_password: form.confirm_password,
        }
        const depositFormResponse = await this.$axios.post('/deposits', data)
        this.loading = false
        this.open2('Deposit form submitted!')
        this.$router.replace('/depositors')
        console.log(depositFormResponse)
      } catch (error) {
        console.log(error)
        // this.open2('Deposit form submitted!')
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
.login_main_container {
  // width: 100%;
  margin: 20px 20px 0 310px;
  @media (max-width: $laptop_screen) {
    margin-left: 210px;
  }
  @media (max-width: $small_screen) {
    margin-left: 10px;
  }
  .login_full_container {
    width: 80%;
    margin: 0 auto;
    @media (max-width: $small_screen) {
      margin: 0;
      width: 100%;
    }
  }
  .login_container {
    padding: 20px;
    // overflow-y: scroll;
    margin: 40px 0;
    width: 100%;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    // @media (max-width: $laptop_screen) {
    //   width: 80%;
    // }
    @media (max-width: $small_screen) {
      width: 100%;
      margin-top: 0;
      box-shadow: none;
    }
  }
  @media (max-width: $medium_screen) {
    padding-top: 20px;
  }
}
.registerForm_form {
  padding-top: 20px;

  .personal_info_section {
    // display: flex;
  }
  .contact_info_section {
    padding-top: 10px;
    // display: flex;
  }
  .form_div {
    margin-left: 50px;
    .register_first_name {
      padding-right: 20px;
      @media (max-width: 768px) {
        padding-right: 0;
      }
    }
    @media (max-width: 768px) {
      margin-left: 20px;
    }
  }
}
.registerForm_label {
  padding-top: 10px;
  padding-bottom: 20px;
  // width: 20%;
}
.register_btn {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: $small_screen) {
  .registerForm_form {
    .form_div {
      max-width: 500px;
      width: 100%;
      margin-left: 0;
      .register_first_name {
        padding-right: 0;
      }
    }
  }
  .user_registerForm_footer {
    padding: 80px 0 30px;
    width: 100%;
    .user_img_logo {
      width: 75.61px;
      height: 16.3px;
    }
  }

  .register_btn {
    display: block;
    .submit_register_button {
      width: 100%;
    }
  }
}
</style>
