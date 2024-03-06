<template>
  <div>
    <div class="all-wrapper menu-side with-pattern">
      <div class="auth-box-w">
        <div class="logo-w">
          <a href="../"><img alt="" width="150px" src="/images/logo.png" /></a>
        </div>
        <h4 class="auth-header">Login to E-banking</h4>

        <form action="" method="post">
          <div class="form-group">
            <label for="">Email Address</label
            ><input
              class="form-control"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <div class="pre-icon os-icon os-icon-user-male-circle"></div>
          </div>
          <div class="åform-group">
            <label for="">Password</label
            ><input
              class="form-control"
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            <div class="pre-icon os-icon os-icon-fingerprint"></div>
          </div>
          <div class="buttons-w">
            <button class="btn btn-primary" type="submit" name="login">
              Log me in
            </button>
            <div class="form-check-inline">
              <label class="form-check-label"
                ><input class="form-check-input" type="checkbox" />Remember
                Me</label
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {},
}
</script>
