export const actions = {
  sendEmail ({commit}, emailInfo) {
    try {
      this.$axios.post('/api/contact', {
        emailInfo
      })
        .then(res => {
          //
        })
    } catch (e) {
      console.log(e)
    }
  }
}
