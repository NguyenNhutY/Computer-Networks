LỖ HỔNG CROSS SITE SCRIPTING:
dùng mà họ không nhận 
thức được việc đó. Khi người dùng truy cập 
các trang đã bị nhiễm, java applet client.jar 
302
sẽ truy cập vào cửa sổ lệnh của hệ thống của 
họ. Attacker sử dụng lệnh echo để viết các 
script có tên winconfig.vbs trong thư mục ( 
% temp% ) và sau đó cmd.exe sẽ thực thi
winconfig.vbs để tải về tập tin thực thi độc 
hại theo quy định của kẻ tấn công trong URL 
vào thư mục temp và đổi tên nó thành
update.exe, cuối cùng nó sẽ thực hiện 
update.exe
------------------------------------------
Loại tấn công XSS:
Vấn đề ở đây là thực hiện khai thác bằng 
cách sử dụng trình duyệt nhúng Webkit.
Ngoài ra các nhà phát triển Skype đã thiết lập 
các chương trình URI cho trình duyệt nhúng
"file 😕 /" cho phép kẻ tấn công truy cập hệ 
thống tập tin và đọc bất kỳ tập tin có thể
được đọc bởi các ứng dụng iOS sandbox.
Trong tương lai, Cần hạn chế các ứng 
dụng của bên thứ ba để thực hiện các hành 
động được xác định bởi URL cũng như URI
cho phép các trang web nhúng một iframe
mà buộc Skype mở ra(nếu nó được cài đặt) 
và gọi một số cụ thể. JavaScript <iframe
src="skype://1900expensivepremiumnumber
?call"> </ iframe>.
--------------------------------------------
NAT PINNING - IRC Over HTTP
. Khi nạn nhân nhấp chuột vào một URL 
XSS có lỗ hổng có một hình thức ẩn kết nối 
với http://attacker.com:6667 (port IRC), 
người dùng submit form mà không biết. Một 
kết nối HTTP được tạo ra bởi kẻ tấn công tới
máy chủ IRC ( kết nối giả) chỉ đơn giản là
lắng nghe. Router của nạn nhân nhìn thấy 
một " kết nối IRC " (mặc dù khách hàng của 
mình đang nói trong HTTP) và một nỗ lực tại 
một ' DCC Chat” . Direct Client- to-Client
(DCC ) là một tiểu giao thức IRC liên quan 
cho phép trao đổi các tập tin và thực hiện các 
cuộc trò chuyện không chuyển tiếp bằng cách 
cho phép các Peers kết nối với nhau bằng 
cách sử dụng một máy chủ IRC cho tín hiệu
bắt tay.Chat DCC yêu cầu mở một cổng local
trên máy trạm mà được kết nối ngược từ. Khi 
mà router là ngăn chặn tất cả các kết nối từ 
bên trong, nó quyết định để chuyển tiếp lưu 
lượng đến cổng Chat DCC ngược về máy của 
nạn nhân để cho phép NAT traversal cho
những kẻ tấn để kết nối trở lại và trò chuyện 
với anh ta. Tuy nhiên, kẻ tấn công có chỉ 
định cổng .
