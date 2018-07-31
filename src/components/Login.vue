<template>
    <div class="login">
        <div>
            <h3>Login</h3>
            <span class="text error" v-if="isError">Something wrong! Please check again.</span>
            <form v-on:submit="login()">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" v-model="email" required data-error="Email address is invalid">
                    <div class="help-block with-errors"></div>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" v-model="password" required data-error="Password is invalid">
                    <div class="help-block with-errors"></div>
                </div>
                <div>
                    <label><input type="checkbox" v-model="rememberMe"> Remember me</label>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-default">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      rememberMe: false,
      isError: false
    }
  },
  methods: {
    login () {
      if (this.email === 'anhl3m@gmail.com' && this.password === '123456') {
        this.isError = false
        this.$router.push({name: 'HelloWorld'})
      } else {
        this.isError = true
      }
    }
  }
}
</script>
<style>
    .login {
        display: flex;
        align-items: center;
        justify-content: center;
        height: inherit;
    }
    .login .error {
      color: red;
    }

    .login form {
        width: 600px;
    }
</style>
