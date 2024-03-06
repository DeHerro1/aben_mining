<template>
  <div class="all-wrapper menu-side with-pattern">
    <div class="auth-box-w wider">
      <div class="logo-w">
        <a href="../"><img alt="" width="150px" src="/images/logo.png" /></a>
      </div>
      <h4 class="auth-header">Create new account</h4>

      <form action="" method="post" enctype="multipart/form-data">
        <div class="form-group">
          <label for=""> Name</label
          ><input
            class="form-control"
            placeholder="Enter your first name"
            name="first"
            type="text"
          /><input
            class="form-control"
            name="last"
            placeholder="Enter your Last name"
            type="text"
          />
          <div class="pre-icon os-icon os-icon-user"></div>
        </div>

        <div class="form-group">
          <label for=""> SSN</label
          ><input
            class="form-control"
            placeholder="Enter SSN"
            name="rt"
            type="text"
          />
          <div class="pre-icon os-icon">X</div>
        </div>
        <div class="form-group">
          <label for=""> Phone Number</label
          ><input
            class="form-control"
            placeholder="Enter phone number"
            name="phone"
            type="text"
          />
          <div class="pre-icon os-icon os-icon-phone"></div>
        </div>
        <div class="form-group">
          <label for=""> Email address</label
          ><input
            class="form-control"
            placeholder="Enter email"
            name="email"
            type="email"
          />
          <div class="pre-icon os-icon os-icon-email-2-at2"></div>
        </div>
        <div class="form-group">
          <label for=""> Address</label
          ><input
            class="form-control"
            placeholder="House Address"
            name="address"
            type="address"
          /><input
            class="form-control"
            placeholder="Enter City"
            name="city"
            type="address"
          /><input
            class="form-control"
            placeholder="Enter State"
            name="state"
            type="address"
          /><input
            class="form-control"
            placeholder="Enter Country"
            name="country"
            type="address"
          />
          <div class="pre-icon os-icon os-icon-map"></div>
        </div>
        <div class="form-group">
          <label for=""> Date of Birth</label
          ><input
            class="form-control"
            placeholder="Enter your DOB"
            name="dob"
            type="date"
          />
          <div class="pre-icon os-icon os-icon-calendar"></div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label for=""> Password</label
              ><input
                class="form-control"
                placeholder="Password"
                name="password"
                type="password"
              />
              <div class="pre-icon os-icon os-icon-fingerprint"></div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="">Confirm Password</label
              ><input
                class="form-control"
                placeholder="Confirm Password"
                type="password"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for=""> Passport Photograph</label
          ><input
            class="form-control"
            placeholder="Enter email"
            name="pic"
            type="file"
          />
          <div class="pre-icon os-icon os-icon-user"></div>
        </div>
        <div class="form-group">
          <label for="">ID</label
          ><input
            class="form-control"
            placeholder="Enter email"
            name="id"
            type="file"
          />
          <div class="pre-icon os-icon os-icon-file"></div>
        </div>
        <div class="buttons-w">
          <button class="btn btn-primary" type="submit" name="add">
            Register Now
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
}
</script>
