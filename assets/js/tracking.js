export default ({ $gtm }, inject) => {
  inject('pushTracking', $gtm.push)
}
