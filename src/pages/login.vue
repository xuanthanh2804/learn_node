<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2 class="text-center text-dark mt-5">Login Form</h2>
          <div class="text-center mb-5 text-dark">Made with BearNest</div>
          <div class="card my-5">
            <form class="card-body cardbody-color p-lg-5">
              <div class="text-center">
                <img
                  src="https://banner2.cleanpng.com/20180629/srq/kisspng-bear-logo-bear-angry-5b36a6e70b3920.339123251530308327046.jpg"
                  class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="password"
                />
              </div>

              <div class="text-center">
                <button type="submit" class="btn btn-color px-5 mb-5 w-100">
                  Login
                </button>
              </div>
              <div id="emailHelp" class="form-text text-center mb-5 text-dark">
                Not Registered?
                <a href="#/register" class="text-dark fw-bold">
                  Create an Account</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login", // Use a multi-word name
  // ... other component options
  methods: {},
};
</script>
<style>
.btn-color {
  background-color: #0e1c36;
  color: #fff;
}

.profile-image-pic {
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.cardbody-color {
  background-color: #ebf2fa;
}

a {
  text-decoration: none;
}
</style>
