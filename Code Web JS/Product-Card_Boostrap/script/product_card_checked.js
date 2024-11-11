const handlePageLoaded = () => {
  document.getElementById("ring")[0].style.display = "none";
}

const showAlertBuyNowButton = () => {
  alert("Bạn đã mua sản phẩm thành công!");
}
const showAlertAddToCartButton = () =>{
  alert("Bạn đã thêm sản phẩm vào giỏ hàng thành công!");
}

const changeImage = (imgId, newSrc) => {
  var img = document.getElementById(imgId);
  img.src = newSrc;
}

const changeButtonBackground = (clickedButton) => {
  clickedButton.style.backgroundColor = 'red';
  // Lấy tất cả các nút trong trang
  var buttons = document.getElementsByClassName('button');
  // Lặp qua tất cả các nút và đổi lại background thành màu trắng
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i] !== clickedButton) {
      buttons[i].style.backgroundColor = 'white';
    }
  }
}