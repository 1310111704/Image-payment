<template>
  <div class="footer">
    <div class="maxWidth_footer">
      <div class="row foot_row">
        <div>
          <div class="card foot_card">
            <div class="card-body foot_card_body">
              <ul>
                <li>
                  <h3 class="about">About Us：</h3>
                </li>
                <li>
                  <router-link to="/privacyPolicy" target="_blank"
                    >Privacy Agreement</router-link
                  >
                </li>

                <li>
                  <router-link to="/serviceTerms" target="_blank"
                    >Terms of Service</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="fot_vpn">© 2022 Hyperlink. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.footer {
  background: rgb(30, 33, 36);
  position: fixed;
  bottom: 0;
  width: 100%;
  .maxWidth_footer {
    max-width: 1520px;
    margin: 0 auto;
  }
  .foot_row {
    .foot_card {
      background: transparent;
      border: 0;
      .foot_card_body {
        padding: 35px 20px;
        text-align: center;
        ul {
          padding-left: 0;
          .about {
            color: #fff;
            font-size: 20px;
          }
          li {
            line-height: 50px;
            display: inline-block;
            margin-right: 20px;
            a {
              color: rgb(139, 139, 139);
              text-decoration: none;
              img {
                width: 350px;
              }
            }
          }
        }
      }
    }
  }
  .fot_vpn {
    text-align: center;
    color: rgb(136, 136, 136);
    padding-bottom: 24px;
    margin: 0;
  }
}
// 移动端--start
@media screen and (max-width: 820px) {
  .footer .foot_row .foot_card .foot_card_body {
    padding: 35px 0;
  }
  .footer .foot_row .foot_card .foot_card_body ul li a img {
    width: 300px;
  }
  .footer .foot_row .foot_card .foot_card_body ul .about {
    font-size: 16px;
  }
  .footer .foot_row .foot_card .foot_card_body ul li a {
    font-size: 14px;
  }
  .footer .foot_row .foot_card .foot_card_body ul {
    // padding-left: 2rem;
  }
  .footer .foot_row .foot_card .foot_card_body ul li {
    line-height: 30px;
  }
}
</style>
