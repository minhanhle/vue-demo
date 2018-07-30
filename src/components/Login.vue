<template>
    <div class="login">
        <div>
            <h3>Login</h3>
            <form>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="text" class="form-control">
                </div>
                <div>
                    <label><input type="checkbox"> Remember me</label>
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
    return {}
  },
  methods: { }
}
</script>
<style>
    .login {
        display: flex;
        align-items: center;
        justify-content: center;
        height: inherit;
    }

    .login form {
        width: 600px;
    }
</style>
