<template>
  <div>
    <HeaderNav />
    <div class="accounts">
      <div>
        <div class="welcome">
          <h2>
            Welcome Charles Obeng
          </h2>
          <small>Your last login was 06 Mar 2024 15:16</small>
        </div>
        <div class="hea">
          <h2>My Accounts</h2>

          <div class="link">
            <h4>Accounts</h4>
          </div>
        </div>

        <hr />
        <br>
        <div>
          <h4 class="sumary">Savings And Investments</h4>
        </div>

        <div>
          <div class="table">
            <div class="table-header">
              <div class="header__item">
                <a id="name" class="filter__link" href="#">Account Name</a>
              </div>
              <div class="header__item">
                <a class="filter__link filter__link--number" href="#"></a>
                Account Number</a>
              </div>
              <div class="header__item">
                <a id="draws" class="filter__link filter__link--number" href="#">Balance
                </a>
              </div>
              <div class="header__item">
                <a id="losses" class="filter__link filter__link--number" href="#">Available Balance</a>
              </div>
              <div class="header__item">
                <a id="total" class="filter__link filter__link--number" href="#"></a>
              </div>
            </div>
            <div class="table-content">
              <div class="table-row">
                <div class="table-data">Tom Hakins</div>
                <div class="table-data">
62001896549</div>
                <div class="table-data">$16,175,000.00</div>
                <div class="table-data">$16,175,000.00</div>
                <div class="table-data">
                  <a href="" class="more-btn">More</a>
                </div>
              </div>

                     <div class="table-row">
                <div class="table-data"><b>Total</b> </div>
                <div class="table-data"></div>
                <div class="table-data">$16,175,000.00</div>
                <div class="table-data">$16,175,000.00</div>
                <div class="table-data">
               
                </div>
              </div>

            </div>
          </div>
        </div>

      
      </div>

      <div class="footer">
        <small>CLID 1039737 | SUPRT NR 13019530 | TECH REF J2-101-L-L20240306152625
</small>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountPage',
}
</script>

<style lang="scss" scoped>
.accounts {
  background-color: white !important;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .welcome {
    text-align: center;
    margin-bottom: 20px;
  }

  .hea {
    display: flex;

    h2 {
      font-size: 18px;
      margin-right: 100px;
    }

    .link {
      border-bottom: 1px solid rgb(246, 217, 180);

      h4 {
        font-size: 16px;
        color: rgb(219, 186, 145);
      }
    }
  }

  .sumary {
    font-size: 16px;
  }
}

.table {
  width: 100%;
}

.table-header {
  display: flex;
  width: 100%;
  background: rgb(226, 233, 235);
  padding: 10px;
}

.table-row {
  display: flex;
  width: 100%;
  padding: 10px;
  margin-top: 20px;

  &:nth-of-type(odd) {
    background: #eeeeee;
  }
}

.table-data,
.header__item {
  flex: 1 1 20%;
  text-align: center;
}

.header__item {
  font-weight: bold;
  color: #b3645d;
}

.filter__link {
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;

  &::after {
    content: '';
    position: absolute;
    right: 20px;
    color: black;
    font-size: 15px;
    top: 50%;
    transform: translateY(-50%);
  }

  &.desc::after {
    content: '(desc)';
  }

  &.asc::after {
    content: '(asc)';
  }
}

.more-btn {
  color: #b3645d;
  text-decoration: none;
  background-color: black;
  padding: 5px 10px;
  border-radius: 20px;
}

a {
  color: #b3645d;
  text-decoration: none;
}
</style>
