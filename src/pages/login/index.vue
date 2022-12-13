<template>
  <div class="login_page">
    <div class="login_flex centerWidth">
      <div class="left_login_pic">
        <img src="@/assets/image/login/left_login_pic.png" alt="" />
      </div>
      <div class="right_login_sub">
        <router-link class="top_log" tag="div" to="/">
          <img class="pc_log" src="@/assets/image/top-logo.png" alt="" />
          <img class="app_log" src="@/assets/image/login_h5_log.png" alt="" />
        </router-link>
        <div class="login_tit">
          <!-- <h1>{{ $t("lang.login.Sign_in") }}</h1>
          <p>{{ $t("lang.login.welcome") }}</p> -->
          <h1>Sign In</h1>
          <!-- <p>注册</p> -->
        </div>
        <div class="form_login">
          <div class="mb-3 form_li">
            <label for="exampleFormControlInput1" class="form-label"
              >Email</label
            >
            <input
              type="text"
              class="form-control login_input"
              id="exampleFormControlInput1"
              placeholder="Email"
              v-model="userEmail"
            />
          </div>
          <div class="mb-3 form_li">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Password</label
            >
            <p class="password_p">
              <input
                :type="password_type ? 'password' : 'text'"
                class="form-control login_input"
                id="exampleFormControlInput1"
                placeholder="Password"
                :maxlength="50"
                v-model="userPassword"
              />
              <img
                class="eye"
                src="@/assets/image/login/eye-Close.png"
                alt=""
                v-show="password_type"
                @click="passChange"
              />
              <img
                class="eye"
                v-show="!password_type"
                src="@/assets/image/login/eye-open.png"
                alt=""
                @click="passChange"
              />
            </p>
          </div>
          <div class="submit">
            <button
              type="button"
              class="btn btn-warning"
              @click="loginSubmit"
              :loading="loginLoading"
            >
              Sign In
            </button>
          </div>
          <!-- <div class="register">
              <span @click="registerFlag = true"> 立即註冊</span>
              <span @click="forgetPassword = true"> 忘記密碼</span>
            </div> -->
        </div>
      </div>
    </div>
    <div class="login_dialog">
      <!-- <el-dialog
        :title="$t('lang.login.register_hyperlink')"
        :visible.sync="registerFlag"
        width="622px"
        center
        :show-close="false"
      >
        <p class="register_hint">
          {{ $t("lang.login.client_side_register") }}
        </p>
        <span slot="footer" class="dialog-footer">
          <el-button @click="gohome" class="gohomebtn">{{
            $t("lang.login.go_home")
          }}</el-button>
          <p class="login_p">
            {{ $t("lang.login.Have_account")
            }}<span @click="registerFlag = false">
              {{ $t("lang.login.gologin") }}</span
            >
          </p>
        </span>
      </el-dialog>
      <el-dialog
        :title="$t('lang.login.forgetPassword')"
        :visible.sync="forgetPassword"
        width="622px"
        center
        :show-close="false"
      >
        <p class="register_hint">
          {{ $t("lang.login.client_side_password") }}
        </p>
        <span slot="footer" class="dialog-footer">
          <el-button @click="gohome" class="gohomebtn">{{
            $t("lang.login.go_home")
          }}</el-button>
          <p class="login_p">
            {{ $t("lang.login.Have_account")
            }}<span @click="forgetPassword = false">
              {{ $t("lang.login.gologin") }}</span
            >
          </p>
        </span>
      </el-dialog> -->
    </div>
  </div>
</template>

<script>
// import {login} from '@/api/http'

export default {
  data() {
    return {
      // z1x2c3v4826@163.com
      // qqqq1111
      loginLoading: false,
      userEmail: "",
      userPassword: "",
      password_type: true,
      registerFlag: false,
      forgetPassword: false,
    };
  },
  watch: {
    userPassword(value, oldval) {
      if (value) {
        if (/[\u4E00-\u9FA5]/g.test(value)) {
          this.userPassword = oldval;
        }
      }
    },
    userEmail(value, oldval) {
      if (value) {
        if (/[\u4E00-\u9FA5]/g.test(value)) {
          console.log("val");
          this.userEmail = oldval;
        }
      }
    },
  },
  methods: {
    loginSubmit() {
      if (this.userEmail != "" && this.userPassword != "") {
        this.loginLoading = true;
        // this.$axios
        //   .post("https://api.hyperlinkvpn.com/api/sign/web/login", {
        //     userEmail: this.userEmail,
        //     userPassword: this.userPassword,
        //   })
        this.$api
          .login({ userEmail: this.userEmail, userPassword: this.userPassword })
          .then((res) => {
            if (res.data.code == "0") {
              localStorage.setItem("token", res.data.data);
              this.$notify({
                title: "Success",
                message: "Login Successfully",
                type: "success",
              });
              setTimeout(() => {
                // location.href = "/memberCenter";
                this.$router.push("/");
              }, 500);
            } else {
              this.$notify.error({
                message: res.data.message,
                title: "Error",
              });
            }
            this.loginLoading = false;
          })
          .catch((error) => {
            console.log(error);
            this.$notify({
              title: "Error",
              message: "Service error!",
              type: "error",
            });
          });
      } else {
        this.$notify({
          title: "Error",
          message: "Email and password cannot be empty!",
          type: "error",
        });
      }
    },
    gohome() {
      this.$router.push("/");
    },
    passChange() {
      this.password_type = this.password_type ? false : true;
    },
    keydownEvent() {
      document.onkeydown = (e) => {
        if (e.defaultPrevented) {
          return;
        }
        if (e.keyCode === 13) {
          this.loginSubmit(); //需要调用的方法
        }
      };
    },
  },

  mounted() {
    this.keydownEvent();
  },
};
</script>

<style lang="less" scoped>
.login_page {
  // padding: 110px;
  height: 100%;
  overflow: hidden;
  background: #fff;
  .centerWidth {
    width: 1200px;
    margin: 0 auto;
  }
  .login_flex {
    display: flex;
    box-shadow: 0 0 5px #ccc;
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    top: 150px;
    .left_login_pic {
      width: 50%;
      text-align: left;
      img {
        // width: 579px;
        width: 90%;
        height: 100%;
      }
    }

    .right_login_sub {
      width: 50%;
      padding: 55px 40px 0 50px;
      .top_log {
        text-align: right;
        cursor: pointer;
        .app_log {
          display: none;
        }
        img {
          width: 171px;
        }
      }
      .login_tit {
        margin: 48px 0 70px 0;
        text-align: left;
        h1 {
          font-size: 32px;
          margin-bottom: 15px;
          font-weight: bold;
        }
        p {
          font-size: 16px;
          color: #aaa8a8;
        }
      }
      .form_login {
        .form_li {
          margin-bottom: 30px;
          text-align: left;
          .form-label {
            color: #aaa8a8;
          }
          .login_input {
            width: 360px;
            height: 50px;
            // padding-right: 43px;
            padding: 0 10px;
            display: block;
            margin-top: 10px;
            border: 1px solid #ccc;
            box-sizing: border-box;
            border-radius: 5px;
            outline: none;
          }
          .password_p {
            position: relative;
            .eye {
              position: absolute;
              width: 30px;
              right: 210px;
              top: 15px;
              cursor: pointer;
            }
          }
        }
        .submit {
          margin-top: 62px;
          margin-bottom: 40px;
          text-align: left;
          button {
            width: 363px;
            padding: 10px 0;
            border: none;
            color: #fff;
            font-size: 26px;
            border-radius: 5px;
            background: rgba(247, 164, 3, 1);
            cursor: pointer;
          }
        }
        .register {
          display: flex;
          justify-content: space-between;
          width: 362px;
          color: #aaa8a8;
          cursor: pointer;
        }
      }
    }
  }
  .alert {
    position: fixed;
    top: 30px;
    right: 50px;
    // transform: translateX(-50%);
    min-width: 200px;
    background: #fef0f0;
    padding: 10px 20px;
    color: #f56c6c;
  }
  .login_dialog {
    ::v-deep .el-dialog__header {
      text-align: left;
      padding: 30px 35px;
      border-bottom: 1px solid #ccc;
      .el-dialog__title {
        font-size: 29px;
        font-weight: bold;
      }
    }
    ::v-deep .el-dialog--center {
      top: 15%;
    }
    .gohomebtn {
      background: #f7a403;
      width: 60%;
      color: #fff;
      padding: 17px 0;
      border: 0;
      font-size: 22px;
    }
    .register_hint {
      font-size: 22px;
      word-break: break-word;
    }
    .login_p {
      font-size: 16px;
      margin-top: 20px;
      span {
        color: rgb(77, 169, 255);
        cursor: pointer;
      }
    }
  }
}
// PC--适用于13-15.6英寸的
@media screen and (max-width: 1800px) {
  .login_page .login_flex {
    width: 950px;
    top: 60px;
    left: 50px;
    .left_login_pic img {
      width: 100%;
    }
    .right_login_sub {
      padding-top: 20px;
      .form_login .form_li .password_p .eye {
        right: 80px;
      }
    }
  }
}
@media screen and (max-width: 820px) {
  .login_page {
    margin: 0;
    .login_flex {
      width: 100%;
      border-radius: 0;
      box-shadow: none;
      position: relative;
      top: 0;
      left: 0;
      .left_login_pic {
        display: none;
      }
      .right_login_sub {
        width: 100%;
        padding: 70px 35px 140px;
        .top_log {
          .pc_log {
            display: none;
          }
          .app_log {
            display: block;
            width: 110px;
          }
        }
        .login_tit {
          margin: 10px 0 50px 0;
        }
        .form_login {
          .form_li {
            .form-label {
              display: none;
            }
            .login_input {
              width: 100%;
              height: 56px;
              border: 0;
              border-bottom: 1px solid #ccc;
              border-radius: 0;
            }
            .password_p {
              .eye {
                // left: 290px;
                right: 0;
              }
            }
          }
          .submit {
            button {
              width: 100%;
              border-radius: 50px;
              font-size: 22px;
              padding: 12px 0;
            }
          }
          .register {
            width: 100%;
          }
        }
      }
    }
    ::v-deep .login_dialog .el-dialog--center {
      width: 95% !important;
      .el-dialog__body {
        padding-bottom: 0;
      }
      .el-dialog__header {
        padding: 15px 20px;
        .el-dialog__title {
          font-size: 18px;
        }
      }
      .register_hint {
        font-size: 16px;
      }
      .gohomebtn {
        width: 50%;
        font-size: 16px;
        padding: 13px 0;
      }
      .login_p {
        margin-bottom: 0;
      }
    }
  }
}
</style>
