<template>
  <div class="pic_home">
    <header>
      <div class="maxWidth top_log">
        <div class="left_logo">
          <img src="@/assets/image/top-logo.png" alt="" />
        </div>
        <div class="right_search">
          <a
            v-if="token != undefined"
            :href="
              'https://pay.hyperlink.ltd/#/?tokenkey=' + token + '&language=en'
            "
            target="_blank"
            >Subscribe</a
          >
          <router-link to="/login" v-if="token == undefined"
            >Log In</router-link
          >
          <a href="javascript:;" v-else @click="outLogin">Log Out</a>
        </div>
      </div>
    </header>

    <main class="maxWidth">
      <div class="pay_list" :loading="true">
        <div class="left_nav_bar">
          <div class="JS-Fix-Target" style="">
            <div class="filters">
              <ul class="filters__list JS-Filters">
                <li
                  class="filter"
                  v-for="(item, i) in table_list"
                  :key="i"
                  @click="listChange(item.type)"
                >
                  <a class="filter__link" href="javascript:;">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right_list_pay">
          <div class="wallpapers wallpapers_zoom wallpapers_main">
            <ul class="wallpapers__list" id="lazyload">
              <li
                class="wallpapers__item"
                v-for="(item, i) in list_pic"
                :key="i"
              >
                <a
                  class="wallpapers__link"
                  @click="
                    lookpicture(
                      'https://hyperlink.ltd/v1/api/pic/' +
                        item.type +
                        '/' +
                        item.url
                    )
                  "
                >
                  <div class="wallpapers__canvas">
                    <img
                      v-if="item.url"
                      :src="
                        'https://hyperlink.ltd/v1/api/pic/' +
                        item.type +
                        '/' +
                        item.url
                      "
                      ale="Image fails to display"
                      class="wallpapers__image"
                    />
                  </div>
                  <span class="wallpapers__info">{{ item.name }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="dialog" v-if="dialog">
          <div class="model">
            <div class="execution_box">
              <h3>Account not logged in</h3>
              <p>Please login before operation</p>
              <div class="sub_btn">
                <button class="later" @click="dialog = false">Later</button>
                <router-link tag="button" to="/login" class="goligin"
                  >Log In</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "LazyLoad",
  data() {
    return {
      value: "",
      token: "",
      dialog: false,
      table_list: [],
      list_pic: [],
      newlist: [],
    };
  },
  methods: {
    outLogin() {
      this.$api
        .logout()
        // this.$axios
        //   .post(
        //     "https://api.hyperlinkvpn.com/api/sign/web/logout",
        //     {},
        //     {
        //       headers: {
        //         Authorization: localStorage.getItem("token"),
        //         language: "en-US",
        //       },
        //     }
        //   )
        .then((res) => {
          console.log(res);
          if (res.data.code == "0") {
            this.$notify({
              title: "Success",
              message: "Exit Successful",
              type: "success",
            });
            this.$router.push("/login");
            localStorage.removeItem("token");
          }
        });
    },
    // gopaylist() {
    //   window.open(
    //     "http://192.168.31.8:8084/#/?tokenkey=" + localStorage.getItem("token")
    //   );
    // },
    lookpicture(url) {
      // :href="'http://192.168.31.8:8084/#/?tokenkey=' + token"
      if (localStorage.getItem("token")) {
        // window.open(
        //   "http://192.168.31.8:8084/#/?tokenkey=" +
        //     localStorage.getItem("token")
        // );
        window.open(url);

        // location.href =
        //   "http://192.168.31.8:8082/#/?tokenkey=" +
        //   localStorage.getItem("token");
      } else {
        this.dialog = true;
      }
    },
    // 左侧tab栏数据
    getlistall() {
      // this.$showLoading();
      this.$api.typeall({}).then((res) => {
        console.log(res);
        this.table_list = res.data;
        this.listChange(this.table_list[0].type);
      });
    },
    // 图片列表数据
    listChange(key) {
      this.$showLoading();
      this.list_pic = [];
      console.log(key);
      this.$api.listshow({ type: key }).then((res) => {
        console.log(res);
        // #关闭loading
        this.list_pic = res.data;
        this.$hideLoading();
      });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.getlistall();
  },
};
</script>

<style lang="less" scoped>
body {
}
.pic_home {
  height: calc(100% - 68px);
}
header {
  background: #fff;
  box-shadow: 0 0 5px #ccc;
  .top_log {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    align-items: center;
    // width: 1000px;
    .left_logo {
      img {
        width: 200px;
      }
    }

    .right_search {
      display: flex;
      // width: 40%;
      align-items: center;
      input {
        box-sizing: border-box;
        width: 100%;
        text-align: left;
        color: rgb(199, 187, 167);
        background-color: #f1f1f1;
        font-size: 14px;
        line-height: 20px;
        padding: 5px 34px 5px 12px;
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
      }
      a {
        display: inline-block;
        width: 100px;
        color: #f7a403;
      }
    }
  }
}
main {
  // margin-top: 50px;
  height: 100%;
  padding: 40px 0;
  box-sizing: border-box;
  .pay_list {
    display: flex;
    height: 100%;

    .left_nav_bar {
      width: 10%;
      height: 100%;
      .JS-Fix-Target {
        height: 100%;
        .filters {
          text-align: left;
          height: 100%;
          .filters__list {
            // height: 500px;
            height: 100%;
            overflow-y: scroll;
            .filter {
              text-align: center;
            }
          }

          a {
            display: inline-block;
            margin-bottom: 10px;
            padding: 2px 10px 2px 0;
            color: #f7a403;
          }
        }
      }
    }
    .right_list_pay {
      width: 89%;
      height: 100%;
      padding-left: 20px;
      box-sizing: border-box;
      h3 {
        text-align: left;
        color: #f7a403;
        margin-bottom: 20px;
        font-size: 26px;
        font-weight: normal;
      }
      .wallpapers {
        height: 100%;
        .wallpapers__list {
          text-align: center;
          // height: 664px;
          height: 100%;
          overflow-y: scroll;
          #lazyload {
            background-color: #ccc;
            margin: 0 auto;
            .img {
              background-color: #ccc;
            }
          }
          .wallpapers__item {
            background-color: #fff3dc;
            // width: 20%;
            width: 300px;
            margin: 0 10px 20px;
            display: inline-block;
            overflow: hidden;
            border-radius: 10px;
            cursor: pointer;
            .wallpapers__link {
              color: #736d64;
              .wallpapers__image {
                width: 100%;
                height: 100%;
              }
              .wallpapers__canvas {
                overflow: hidden;
                width: 100%;
                height: 170px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .wallpapers__image:hover {
                transform: scale(1.16);
                transition: transform 0.2s ease;
              }

              .wallpapers__info {
                display: block;
                text-align: center;
                padding: 10px 0;
              }
            }
          }
        }
      }
    }
  }
  .dialog {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    .model {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);

      .execution_box {
        width: 500px;
        height: 200px;
        background: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: left;
        border-radius: 10px;
        h3 {
          padding: 15px 10px;
          border-bottom: 1px solid #ccc;
          font-weight: normal;
        }
        p {
          position: relative;
          top: 15%;
          left: 10px;
        }
        .sub_btn {
          position: absolute;
          bottom: 12px;
          right: 22px;
          button {
            border: 0;
            background: transparent;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
          }
          .later {
            background: #dcdcdc;
            margin: 0 10px;
          }
          .goligin {
            background: #f7a403;
            color: #fff;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 820px) {
  header .top_log .left_logo img {
    width: 150px;
  }
  main {
    width: 100%;
    padding: 10px 0;
    .pay_list {
      width: 100%;
      .left_nav_bar {
        width: 32% !important;
      }
      .right_list_pay {
        width: 68%;
        padding: 0;
        .wallpapers {
          width: 100%;
          .wallpapers__list {
            width: 100%;
            padding: 0 10px;
            box-sizing: border-box;
            .wallpapers__item {
              width: 100%;
              margin: 0;
            }
          }
        }
      }
    }
    .dialog .model .execution_box {
      width: 80%;
    }
  }
}
</style>
