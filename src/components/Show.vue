<script>
import { Niivue } from "@niivue/niivue";
const nv = new Niivue({
  // crosshairColor: [0,1,0,0.5], textHeight: 0.05,
});

export default {
  name: "Show",
  props: {},
  data() {
    return {
      volumeList: [
        {
          url: "../../submit1/0f593c1e-4bb8-470f-a87b-fee3dbd3b3ed.nii.gz",
        },
      ],
    };
  },

  mounted() {
    nv.attachTo("gl");
    nv.loadVolumes(this.volumeList);
  },
};
</script>

<template>
  <div class="show">
    <canvas id="gl" width="480" height="640"> </canvas>
  </div>
</template>

<style scoped>

</style>