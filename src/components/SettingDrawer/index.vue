<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <template v-slot:handle>
        <div class="setting-drawer-handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <template>
          <div>
            <h2>整体风格定制</h2>
            <a-radio-group v-model="navTheme">
              <a-radio :value="dark">黑色</a-radio>
              <a-radio :value="lighn">白色</a-radio>
            </a-radio-group>
          </div>
        </template>
        <script>
          export default {
            data() {
              return {
                visible: false,
                navTheme: "dark"
              };
            },
            methods: {
              onChange(e) {
                console.log("radio checked", e.target.value);
              }
            }
          };
        </script>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    }
  }
};
</script>
<style>
.setting-drawer-handle {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  color: rgb(24, 71, 223);
  font-size: 20px;
  text-align: center;
  line-height: 48px;
  border-radius: 3px 0 0 3px;
}
</style>
