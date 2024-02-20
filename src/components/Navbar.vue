<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">BearNest</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Clothing</a></li>
                <li><a class="dropdown-item" href="#"> Shoes</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Different Choice</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Contact Us</a>
            </li>
          </ul>
          <!-- form search -->
          <div>
            <div class="input-container me-3">
              <input
                placeholder="Search something..."
                class="input"
                name="text"
                type="text"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="icon"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect fill="white"></rect>
                  <path
                    d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <!-- Nofications -->
          <div>
            <a class="text-reset me-3">
              <i class="bi bi-bell"></i>
            </a>
          </div>
          <!-- Wrapper -->
          <div>
            <div class="dropdown">
              <a
                class="text-reset me-3 dropdown-toggle"
                href="#"
                role="button"
                id="cartDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-cart-plus"></i>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="cartDropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">Order</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Pay</a>
                </li>
              </ul>
            </div>
          </div>

          <!-- avatar isLoggedIn-->
          <div v-if="isLoggedIn" class="dropdown">
            <a
              data-mdb-dropdown-init
              class="nav-link dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a class="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Logout</a>
              </li>
            </ul>
          </div>
          <!-- before isLoggedIn  -->
          <div v-if="!isLoggedIn" class="dropdown">
            <a
              data-mdb-dropdown-init
              class="nav-link dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
            >
              <i class="bi bi-person-circle"></i>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <router-link class="dropdown-item" to="/login"
                  >Sign In</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/register"
                  >Register</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {},
};
</script>

<style>
.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.input {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 18px 16px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.input::placeholder {
  color: transparent;
}

.input:focus::placeholder {
  color: rgb(131, 128, 128);
}

.input:focus,
.input:not(:placeholder-shown) {
  background-color: #fff;
  border: 1px solid rgb(98, 0, 255);
  width: 290px;
  cursor: none;
  padding: 18px 16px 18px 40px;
}

.icon {
  position: absolute;
  left: 0;
  top: 0;
  height: 40px;
  width: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  z-index: -1;
  fill: rgb(98, 0, 255);
  border: 1px solid rgb(98, 0, 255);
}

.icon {
  width: 25px;
  position: absolute;
  z-index: 99;
  left: 12px;
  bottom: 9px;
}

.input:hover + .icon {
  transform: rotate(360deg);
  transition: 0.2s ease-in-out;
}

.input:focus + .icon,
.input:not(:placeholder-shown) + .icon {
  z-index: 0;
  background-color: transparent;
  border: none;
}
</style>
