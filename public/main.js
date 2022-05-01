var loaderFile = function (event) {
  const reader = new FileReader()
  console.log(reader)
  reader.readAsDataURL(event.target.files[0])
  reader.onload = function () {}
}
