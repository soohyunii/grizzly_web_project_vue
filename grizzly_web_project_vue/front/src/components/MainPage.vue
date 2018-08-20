<template>
  <div class="MainPage">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
/*import Router from '../router/index';*/
import utils from '../../utils';

export default {
  name: 'MainPage',
  data () {
    return {
      msg: '메인페이지 입니다'
    }
  }
};
</script>