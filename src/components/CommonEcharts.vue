<template>
  <div ref="echart"></div>
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    isAxisChart: {
      type: Boolean,
      default: true,
    },
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series,
        };
      },
    },
  },
  data() {
    return {
      axisOption: {},
      normalOption: {},
      echart: null,
    };
  },
  watch: {
    chartData: {
      handler() {
        this.initChart();
      },
      deep: true,
    },
  },
  methods: {
    initChart() {
      this.initChartData;
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
      } else {
        this.normalOption.series = this.chartData.series;
      }
    },
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;
    },
  },
};
<style></style>;
