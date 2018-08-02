<template>
    <div class="detail">
        <div v-if="!tour" class="not-found">Không tìm thấy dữ liệu...</div>
        <div v-if="tour" class="desctiption">
          <div class="title">{{tour.name}}</div>
          <b-container fluid>
            <div class="row">
              <div class="col-sm-4">
                <img :src="tour.image" :alt="tour.image" class="avatar">
              </div>
              <div class="col-sm-8 common-des">
                <div class="row row-des">
                  <label class="col-sm-5">
                    <font-awesome-icon icon="check" />
                    Thời gian:
                  </label>
                  <span class="col-sm-6">{{tour.time}}</span>
                </div>
                <div class="row row-des">
                  <label class="col-sm-5">
                    <font-awesome-icon icon="check" />
                    Ngày khởi hành:
                  </label>
                  <span class="col-sm-6">{{tour.schedule}}</span>
                </div>
                <div class="row row-des">
                  <label class="col-sm-5">
                    <font-awesome-icon icon="check" />
                    Khởi hành:
                  </label>
                  <span class="col-sm-6">{{tour.startDate}}</span>
                </div>
                <div class="row row-des">
                  <label class="col-sm-5">
                    <font-awesome-icon icon="check" />
                    Kết thúc:
                  </label>
                  <span class="col-sm-6">{{tour.endDate}}</span>
                </div>
                <div class="row row-des">
                  <label class="col-sm-5">
                    <font-awesome-icon icon="check" />
                    Chi phí:
                  </label>
                  <span class="col-sm-6">{{tour.price}}</span>
                </div>
              </div>
            </div>
          </b-container>
          <h4 class="sub-title">Mô tả lịch trình</h4>
          <div class="content-description">
            <div v-for="(item, index) in tour.description" :key="index">
              <div class="image-content">
                <img v-if="item.image" :src="item.image" :alt="item.text">
              </div>
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailPage',
  data () {
    return {
    }
  },
  computed: {
    tour () {
      const id = this.$route.params.id
      const tour = this.$store.getters.getDetail(id)
      return tour
    }
  }
}
</script>

<style>
.detail {
  padding: 1rem 3rem;
}
.detail .not-found {
  text-align: center;
  font-size: 18px;
}
.detail .desctiption .title {
  text-align: center;
  font-size: 2rem;
  color: #2389b1;
  padding-bottom: 1rem;
}
.detail .desctiption .avatar {
  border: none;
  border-radius: 0;
  text-align: center;
  height: 200px;
  float: right;
}
.detail .desctiption .common-des {
  padding-bottom: 1rem;
}
.detail .desctiption .common-des .row-des {
  padding: 5px 10px;
  border-bottom: 1px dashed #ccc;
}
.detail .desctiption .sub-title {
  font-weight: 500;
}
.detail .desctiption .content-description {
  padding: 1rem;
}
.detail .desctiption .content-description .image-content {
  width: 100%;
  text-align: center;
  padding: 5px;
}
</style>
